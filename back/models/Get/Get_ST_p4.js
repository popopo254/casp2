const db = require('../../config/database')
const getP4 = `
    SELECT 
    projects.project_id, projects.project_type ,projects.project_data_ref, project_data.project_data_p_4
FROM projects 
    INNER JOIN project_data ON project_data.project_data_id = projects.project_data_ref
    WHERE projects.project_id = ? AND projects.project_user = ? AND projects.project_type = ?
`
const ST_Get_P4 = (data,callback) =>{
    const { project_id,project_type,project_user } = data

    //console.log(project_id,project_user,project_type)
    
    db.query(getP4,[project_id,project_user,project_type],(err,result)=>{
        if(err){
            return callback(err,null)
        }
        //console.log("Get_P4 :",result)
        callback(null,result)
    })
}

module.exports = ST_Get_P4