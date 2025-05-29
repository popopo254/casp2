const con = require('../../config/database')

const sqlToggle = `
    UPDATE controls 
    SET control_status = ?
    WHERE control_name = 'is_open_proposal'
`

const toggleState = (data, callback) => {
    const status = data.status ? 1 : 0;

    con.query(sqlToggle, [status], (err, result) => {
        if (err) {
            return callback(err, null);
        }
        return callback(null, result);
    });
};


module.exports = toggleState