const  con  = require('../../config/database')
const query_string = `
    INSERT INTO user_access (access_user,access_permission)
    VALUES(?,?)
`
const AdminAddPermission = (data, callback) => {
    con.query(`
        SELECT access_user, access_permission 
        FROM user_access
        WHERE access_user = ? AND access_permission = ?`, 
        [data.user_id, data.role_id], 
        (err, result) => {
            if (err) {
                return callback(err, null);
            }
            if (result.length > 0) {
                // User already has the permission
                return callback(null, { success: false, message: "This role already has the permission." });
            }
            // If not, insert the new permission
            con.query(query_string, [data.user_id, data.role_id], (err, results) => {
                if (err) {
                    //console.log(err);
                    return callback(err, null);
                } else {
                    return callback(null, { success: true, message: "Permission added successfully.", data: results });
                }
            });
        }
    );
    
}

module.exports = AdminAddPermission