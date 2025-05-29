const  con  = require('../../config/database')
const query_string = `
    SELECT users.user_id,users.user_employeeID, users.user_name,users.user_email, users.created_at, permissions.permission_id,
    permissions.permission_name, permissions.permission_eng_name, user_access.access_isActive, user_access.update_at,
    affiliations.affiliation_name
    FROM user_access 
    LEFT JOIN permissions ON user_access.access_permission =  permissions.permission_id
    LEFT JOIN users ON user_access.access_user = users.user_id
    LEFT JOIN affiliations ON users.user_affiliation = affiliations.affiliation_ID
    WHERE users.user_id = ? 
`
const AdminGetUser = (data, callback) => {
    con.query(query_string, [data.user_id], (err, results) => {
        if (err) {
            //console.log(err);
            callback(err, null);
        } else {
            callback(null, results);
        }
    });
}

module.exports = AdminGetUser