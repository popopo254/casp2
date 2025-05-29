const db = require('../../config/database')
const getP2 = `
    SELECT 
    projects.project_id, projects.project_type ,projects.project_data_ref, project_data.project_data_p_2
FROM projects 
    INNER JOIN project_data ON project_data.project_data_id = projects.project_data_ref
    WHERE projects.project_id = ? AND projects.project_user = ? AND projects.project_type = ?
`
const TS_Get_P2 = (data, callback) => {
    const { project_id, project_type, project_user } = data

    //console.log(project_id, project_user, project_type)

    db.query(getP2, [project_id, project_user, project_type], (err, result) => {
        if (err) {
            console.error('Database error:', err);
            return callback(err, null)
        }
        //try
        if (result.length === 0) {
            //console.log('No data found for project_id:', project_id);
            return callback(null, []); // Return empty array if no data found
        }
        //end of try
        //console.log("TS_Get_P2 :", result)
        callback(null, result)
    })
}

module.exports = TS_Get_P2