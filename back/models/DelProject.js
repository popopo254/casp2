const con = require('../config/database');

const query_string = `
    DELETE FROM projects
    WHERE project_id = ? AND project_user = ?
`;

const PlDelProject = (data, callback) => {
    con.query(query_string, [data.project_id, data.user_id], (err, results) => {
        if (err) {
            //console.log(err);
            return callback(err, null);
        } else {
            return callback(null, results);
        }
    });
};

module.exports = PlDelProject;
