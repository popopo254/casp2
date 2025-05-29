const db = require('../../config/database');

const createProject = `INSERT INTO projects (project_type, project_user, project_affiliation) VALUES (?, ?, ?)`;
const insertProjectData = `INSERT INTO project_data (project_id, project_data_p_1) VALUES (?, ?)`;
const updateProjectRef = `UPDATE projects SET project_data_ref = ? WHERE project_id = ?`;
const updateProjectData = `UPDATE project_data SET project_data_p_1 = ? WHERE project_id = ?`;

const Save_ST_P1 = (data, callback) => {
   
    let { project_id, project_type, project_data, project_user, project_affiliation } = data;
    
    const projectData = JSON.stringify({
        project_name: project_data.project_name || "",
        agency_group: project_data.agency_group || [], 
        project_manager_leader_name: project_data.project_manager_leader_name || "",
        project_manager_team_lists: project_data.project_manager_team_lists || []
    })

    if (!project_id) {
        db.query(createProject, [project_type, project_user, project_affiliation], (err, result) => {
            if (err) {
                console.error('Error creating project:', err);
                return callback(err, null);
            }

            const newProjectId = result.insertId;

            db.query(insertProjectData, [newProjectId,projectData], (err, result1) => {
                if (err) {
                    console.error('Error inserting project data:', err);
                    return callback(err, null);
                }

                const newProjectDataId = result1.insertId;

                db.query(updateProjectRef, [newProjectDataId, newProjectId], (err) => {
                    if (err) {
                        console.error('Error updating project reference:', err);
                        return callback(err, null);
                    }
                    callback(null, { insertId: newProjectId,updated_data: projectData });
                });
            })
        })
    } else {
        
        db.query(updateProjectData, [projectData, project_id], (err, result1) => {
            if (err) {
                console.error('Error updating project data:', err);
                return callback(err, null);
            }
            callback(null, { insertId: project_id, updated_data: projectData });
        });
    }
};

module.exports = Save_ST_P1;