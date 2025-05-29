const  con  = require('../../config/database')
const query_string = `
    INSERT INTO users (user_email,user_employeeID,user_name,user_affiliation)
    VALUES(?,?,?,?)
`
const AdminAddAccount = (data, callback) => {

    
    // Check if the email already exists
    con.query(`
        SELECT user_email
        FROM users
        WHERE user_email = ?`, 
        [data.email], (err, result) => {
            if (err) {
                //console.log(err);
                return callback(err, null);
            }
            if (result.length > 0) {
                // User already exists
                return callback({ message: "บัญชีนี้มีในระบบเรียบร้อยเเล้ว." }, null);
            }

            const query_string = `INSERT INTO users (user_email, user_employeeID, user_name, user_affiliation) VALUES (?, ?, ?, ?)`;
            con.query(query_string, [data.email, data.code, data.name, data.affiliation_ID], (err, results) => {
                if (err) {
                    //console.log(err);
                    return callback(err, null);
                } else {
                    const insertedId = results.insertId;

                    con.query(`INSERT INTO user_access (access_user, access_permission) VALUES(?, ?)`, [insertedId, 1], (err, accessResults) => {
                        if (err) {
                            //console.log(err);
                            return callback(err, null);
                        } else {
                            return callback(null, { success: true, message: "เพิ่มบัญชีเรียบร้อยเเล้ว.", data: accessResults });
                        }
                    });
                }
            });
        }
    );
};

module.exports = AdminAddAccount