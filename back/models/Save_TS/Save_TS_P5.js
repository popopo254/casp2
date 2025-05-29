
const db = require('../../config/database');

const createProject = `INSERT INTO projects (project_type,project_user, project_affiliation) VALUES (?,?,?)`;
const insertProjectData = `INSERT INTO project_data (project_id,project_data_p_5) VALUES (?,?)`;
const updateProjectRef = `UPDATE projects SET project_data_ref = ? WHERE project_id = ?`;
const updateProjectData = `UPDATE project_data SET project_data_p_5 = ? WHERE project_id = ?`;


const Save_TS_P5 = (data, callback) => {
    let { project_id, project_type, project_data, project_user, project_affiliation } = data;
    //console.log('TS_P5', data);

    // Ensure project_data is properly formatted
    let dataToStore;
    try {
        // If project_data is already a string, parse it first
        if (typeof project_data === 'string') {
            dataToStore = JSON.parse(project_data);
        } else {
            dataToStore = { ...project_data };
        }
        
        // Remove the attached_file property before saving to DB
        delete dataToStore.attached_file;
        
        const projectDataString = JSON.stringify(dataToStore);

        if (!project_id) {
            db.query(createProject, [project_type, project_user, project_affiliation], (err, result) => {
                if (err) return callback(err, null);

                const newProjectId = result.insertId;
                db.query(insertProjectData, [newProjectId, projectDataString], (err, result1) => {
                    if (err) return callback(err, null);

                    const newProjectDataId = result1.insertId;
                    db.query(updateProjectRef, [newProjectDataId, newProjectId], (err) => {
                        if (err) return callback(err, null);
                        callback(null, { 
                            success: true,
                            insertId: newProjectId, 
                            message: 'Project created successfully' 
                        });
                    });
                });
            });
        } else {
            db.query(updateProjectData, [projectDataString, project_id], (err, result1) => {
                if (err) return callback(err, null);
                callback(null, { 
                    success: true,
                    insertId: project_id, 
                    message: 'Project updated successfully' 
                });
            });
        }
    } catch (error) {
        console.error('Error processing project data:', error);
        return callback(error, null);
    }
};

module.exports = Save_TS_P5;
