const con = require('../../config/database')
const getAllProject = `SELECT projects.*, project_data.project_data_p_1, project_types.project_type_thai_name,project_status.project_status_name FROM projects 
                       INNER JOIN project_data ON  projects.project_data_ref = project_data.project_data_id  
                       INNER JOIN project_types ON projects.project_type = project_types.project_type_id
                       INNER JOIN project_status ON projects.project_status = project_status.project_status_id
                       WHERE  projects.project_affiliation = ? AND project_data.project_data_p_1 IS NOT NULL AND projects.project_status IN (4,5,6,8,9,10,11,12,13)
                       ORDER BY projects.update_at DESC                       
`

const getProject = (data,callback)=>{
    con.query(getAllProject,[data.user_affiliation],(err,results)=>{
        if(err){
            return callback(err,null)
        }
        callback(null,results)
    })
} 
 
module.exports = getProject