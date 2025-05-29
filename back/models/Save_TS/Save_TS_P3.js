
const db = require('../../config/database');

const createProject = `INSERT INTO projects (project_type,project_user, project_affiliation) VALUES (?,?,?)`;
const insertProjectData = `INSERT INTO project_data (project_id,project_data_p_3) VALUES (?,?)`;
const updateProjectRef = `UPDATE projects SET project_data_ref = ? WHERE project_id = ?`;
const updateProjectData = `UPDATE project_data SET project_data_p_3 = ? WHERE project_id = ?`;


const Save_TS_P3 = (data, callback) => {
    let { project_id, project_type, project_data, project_user, project_affiliation } = data;
    const projectData = JSON.stringify({

        principle_reason: project_data.principle_reason || "",
        relate_to_other: project_data.relate_to_other || "",
        objectives: project_data.objectives || [{ objective: "" }],
        inputs: project_data.inputs || [{ input: "" }],
        outputs: project_data.outputs || [
            { output: 'จำนวนผู้เข้าร่วมโครงการไม่น้อยกว่าร้อยละ 80', disable: true },
            { output: 'ผู้เข้าร่วมโครงการมีความพึงพอใจในระดัยค่เฉลี่ยรวมำม่น้อยกว่า 4.5', disable: true },
            { output: '', disable: false }
        ],
        outcome_users: project_data.outcome_users || [{ outcome_user: "" }],
        outcome_changes: project_data.outcome_changes || [{ outcome_change: "" }],
        toc: project_data.toc || "",
        impact_economy: project_data.impact_economy || [{ economy: "" }],
        impact_socialty: project_data.impact_socialty || [{ socialty: "" }],
        impact_environment: project_data.impact_environment || [{ environment: "" }]
    })
   //console.log("Saving project data:", projectData); // Debug log
   
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

module.exports = Save_TS_P3;
