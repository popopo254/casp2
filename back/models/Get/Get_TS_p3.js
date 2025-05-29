const db = require('../../config/database')
const getP3 = `
    SELECT 
    projects.project_id, projects.project_type ,projects.project_data_ref, project_data.project_data_p_3
FROM projects 
    INNER JOIN project_data ON project_data.project_data_id = projects.project_data_ref
    WHERE projects.project_id = ? AND projects.project_user = ? AND projects.project_type = ?
`
const TS_Get_P3 = (data,callback) =>{
    const { project_id,project_type,project_user } = data

    //console.log(project_id,project_user,project_type)
    
    db.query(getP3,[project_id,project_user,project_type],(err,result)=>{
        if(err){
            return callback(err,null)
        }
        //console.log("TS_Get_P3 :",result)
        callback(null,result)
    })
}

module.exports = TS_Get_P3