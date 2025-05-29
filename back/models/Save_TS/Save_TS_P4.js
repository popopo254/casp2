
const db = require('../../config/database');

const createProject = `INSERT INTO projects (project_type,project_user, project_affiliation) VALUES (?,?,?)`;
const insertProjectData = `INSERT INTO project_data (project_id,project_data_p_4) VALUES (?,?)`; 
const updateProjectRef = `UPDATE projects SET project_data_ref = ? WHERE project_id = ?`;
const updateProjectData = `UPDATE project_data SET project_data_p_4 = ? WHERE project_id = ?`; 


const Save_TS_P4 = (data, callback) => {
    let { project_id, project_type, project_data, project_user, project_affiliation } = data;

    const projectDataString = JSON.stringify(project_data); 

    //console.log("Saving project data P4:", projectDataString); // Debug log

    if (!project_id) {
        db.query(createProject, [project_type, project_user, project_affiliation], (err, result) => {
            if (err) {
                console.error('Error creating project (P4):', err);
                return callback(err, null);
            }

            const newProjectId = result.insertId;

            db.query(insertProjectData, [newProjectId, projectDataString], (err, result1) => { // <--- Use projectDataString
                if (err) {
                    console.error('Error inserting project data (P4):', err);
                    return callback(err, null);
                }

                const newProjectDataId = result1.insertId;

                db.query(updateProjectRef, [newProjectDataId, newProjectId], (err) => {
                    if (err) {
                        console.error('Error updating project reference (P4):', err);
                        return callback(err, null);
                    }
                    callback(null, { insertId: newProjectId, updated_data: projectDataString });
                });
            })
        })
    } else {
        db.query(updateProjectData, [projectDataString, project_id], (err, result1) => { // <--- Use projectDataString
            if (err) {
                console.error('Error updating project data (P4):', err);
                return callback(err, null);
            }
            callback(null, { insertId: project_id, updated_data: projectDataString });
        });
    }
};

module.exports = Save_TS_P4;