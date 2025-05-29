const db = require('../config/database.js')

const getAffiliations = (callback) => {
    db.query("SELECT * FROM affiliations", (err, results) => {
      if (err) {
        callback(err,null);
      } else {
        callback(null,results);
      }
    })
};

module.exports = getAffiliations