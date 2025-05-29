const con = require('../config/database.js');

const getInfo = (data) => {
  return new Promise((resolve, reject) => {
    const query_string = `
      SELECT users.user_id, users.user_employeeID, users.user_affiliation, users.user_name, users.user_email, 
             permissions.permission_id, permissions.permission_name, permission_eng_name, 
             affiliations.affiliation_name
      FROM user_access 
      LEFT JOIN permissions ON user_access.access_permission = permissions.permission_id
      LEFT JOIN users ON user_access.access_user = users.user_id
      LEFT JOIN affiliations ON users.user_affiliation = affiliations.affiliation_ID
      WHERE users.user_id = ? 
    `;

    con.query(query_string, [data.user_id], (err, results) => {
      if (err) {
        //console.log(err);
        reject(err);
      } else {
        //console.log('User found',results);
        resolve(results);
      }
    });
  });
};

module.exports = getInfo;
