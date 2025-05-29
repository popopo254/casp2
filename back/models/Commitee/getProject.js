const con = require('../../config/database')
const getAllProject = `SELECT projects.*, project_data.project_data_p_1, project_types.project_type_thai_name,project_status.project_status_name FROM projects 
                       INNER JOIN project_data ON  projects.project_data_ref = project_data.project_data_id  
                       INNER JOIN project_types ON projects.project_type = project_types.project_type_id
                       INNER JOIN project_status ON projects.project_status = project_status.project_status_id
                       WHERE project_data.project_data_p_1 IS NOT NULL AND projects.project_status IN (6)
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