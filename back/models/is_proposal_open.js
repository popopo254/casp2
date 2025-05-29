const con = require('../config/database')
const GetSystemState = `SELECT control_name,control_status FROM controls WHERE control_name = 'is_open_proposal'`

const getSystemStatus = (callback)=>{
    con.query(GetSystemState,(err,results)=>{
        if(err){
            return callback(err,null)
        }
        callback(null,results)
    })
} 
 
module.exports = getSystemStatus