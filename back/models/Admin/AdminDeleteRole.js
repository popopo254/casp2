const  con  = require('../../config/database.js')
const query_string = `
    DELETE FROM user_access 
    WHERE access_user = ? AND access_permission = ? 
`
const AdminDeleteRole = (data, callback) => {
    con.query(query_string, [data.userID, data.roleID], (err, results) => {
        if (err) {
            //console.log(err);
            callback(err, null);
        } else {
            callback(null, results);
        }
    });
}

module.exports = AdminDeleteRole