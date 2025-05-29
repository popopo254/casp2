// do not modify yet
const db = require('../../config/database');

const createProject = `INSERT INTO projects (project_type,project_user, project_affiliation) VALUES (?,?,?)`;
const insertProjectData = `INSERT INTO project_data (project_id,project_data_p_6) VALUES (?,?)`;
const updateProjectRef = `UPDATE projects SET project_data_ref = ? WHERE project_id = ?`;
const updateProjectData = `UPDATE project_data SET project_data_p_6 = ? WHERE project_id = ?`;


const Save_TS_P6 = (data, callback) => {
    let { project_id, project_type, project_data, project_user, project_affiliation } = data;
    //console.log('TS_P6',data)
    // const projectData = JSON.stringify({
       
    //   })
    
      if (!project_id) {
        db.query(createProject, [project_type, project_user, project_affiliation], (err, result) => {
            if (err) {
                console.error('Error creating project:', err);
                return callback(err, null);
            }

            const newProjectId = result.insertId;

            db.query(insertProjectData, [newProjectId,project_data], (err, result1) => {
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
                    callback(null, { success: true, message: 'Project created and data saved successfully', insertId: newProjectId,updated_data: project_data });
                });
            })
        })
    } else {
        
        db.query(updateProjectData, [project_data, project_id], (err, result1) => {
            if (err) {
                console.error('Error updating project data:', err);
                return callback(err, null);
            }
            callback(null, { success: true, message: 'Project data updated successfully',insertId: project_id, updated_data: project_data });
        });
    }
};

module.exports = Save_TS_P6;
