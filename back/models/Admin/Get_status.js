const con = require('../../config/database')
const getAllProject = `SELECT * FROM project_status WHERE project_status.project_status_id > 6`

const getStatus = (callback)=>{
    con.query(getAllProject,(err,results)=>{
        if(err){
            return callback(err,null)
        }
        callback(null,results)
    })
} 
 
module.exports = getStatus