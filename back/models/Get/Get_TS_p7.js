const db = require('../../config/database')
const getP7 = `
    SELECT 
    projects.project_id, projects.project_type ,projects.project_data_ref, project_data.project_data_p_6,project_data.project_data_p_4
FROM projects 
    INNER JOIN project_data ON project_data.project_data_id = projects.project_data_ref
    WHERE projects.project_id = ? AND projects.project_user = ? AND projects.project_type = ?
`
const TS_Get_P7 = (data,callback) =>{
    const { project_id,project_type,project_user } = data

    //console.log(project_id,project_user,project_type)
    
    db.query(getP7,[project_id,project_user,project_type],(err,result)=>{
    if(err){
        return callback(err,null)
    }
    if(result && result.length > 0){
        if(typeof result[0].project_data_p_4 === 'string'){
            try {
                result[0].project_data_p_4 = JSON.parse(result[0].project_data_p_4)
            } catch(e){
                console.error("Error parsing project_data_p_4:", e)
            }
        }
    }
    //console.log("TS_Get_P7 :",result)
    callback(null,result)
    })
}

module.exports = TS_Get_P7