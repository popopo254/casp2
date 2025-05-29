
const db = require('../../config/database');

const createProject = `INSERT INTO projects (project_type,project_user, project_affiliation) VALUES (?,?,?)`;
const insertProjectData = `INSERT INTO project_data (project_id,project_data_p_7) VALUES (?,?)`;
const updateProjectRef = `UPDATE projects SET project_data_ref = ? WHERE project_id = ?`;
const updateProjectData = `UPDATE project_data SET project_data_p_7 = ? WHERE project_id = ?`;


const Save_P7 = (data, callback) => {
    let { project_id, project_type, project_data, project_user, project_affiliation } = data;
    //console.log('st P7',project_data)
    const projectData = JSON.stringify({
        rows: project_data.rows, 
        conditions: project_data.conditions, 
        totalIncome: project_data.totalIncome, 
        totalCost: project_data.totalCost, 
        CommonFee: project_data.CommonFee, 
        totalCostSummary: project_data.totalCostSummary, 
        netIncomeAfterCost : project_data.netIncomeAfterCost,
        breakEvenPoint: project_data.breakEvenPoint,
        costPerPerson: project_data.costPerPerson,
        netProfitPercent: project_data.netProfitPercent,
        universityIncome: project_data.universityIncome,
        facultyShare : project_data.facultyShare,
        projectAdminFund : project_data.projectAdminFund,
        facultyManageShare: project_data.facultyManageShare,
        file: project_data.file
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

module.exports = Save_P7;
