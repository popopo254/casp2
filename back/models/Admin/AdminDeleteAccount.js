const  con  = require('../../config/database')
const query_string = `
        DELETE FROM users
        WHERE user_id = ?
`
const AdminDeleteAccount = (data, callback) => {
            con.query(query_string, [data.userID], (err, results) => {
                if (err) {
                    //console.log(err);
                    return callback(err, null);
                } else {
                    return callback(null, results);
                }
            });
    
}

module.exports = AdminDeleteAccount