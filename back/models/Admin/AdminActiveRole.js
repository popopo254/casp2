const  con  = require('../../config/database')
const query_string = `
    UPDATE user_access
    SET user_access.access_isActive = 1
    WHERE user_access.access_user = ?
    AND user_access.access_permission = ?
`
const AdminActiveRole = (data, callback) => {
    con.query(query_string, [data.userID,data.roleID], (err, results) => {
        if (err) {
            //console.log(err);
            callback(err, null);
        } else {
            callback(null, results);
        }
    })
}

module.exports = AdminActiveRole