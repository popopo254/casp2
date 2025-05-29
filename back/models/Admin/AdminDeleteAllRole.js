const  con  = require('../../config/database')
const query_string = `
    DELETE FROM user_access 
    WHERE access_user = ? 
`
const AdminDeleteAllRole = (data, callback) => {
    //console.log(data)
    con.query(query_string, [data.userID], (err, results) => {
        if (err) {
            //console.log(err);
            callback(err, null);
        } else {
            callback(null, results);
        }
    });
}

module.exports = AdminDeleteAllRole