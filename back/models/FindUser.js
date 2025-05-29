const db = require('../config/database.js')

const getUser = (data) => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM users WHERE user_email = ?", [data.email], (err, results) => {
      if (err) {
        //console.log(err);
        reject(err);
      } else {
        //console.log('find user work')
        resolve(results);
      }
    });
  });
};

module.exports = getUser