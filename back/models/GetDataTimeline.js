const con = require('../config/database');

const dataTimeline = `
    SELECT 
        projects.project_id,
        projects.update_at AS project_created_at,
        project_types.project_type_thai_name,
        affiliations.affiliation_name,
        projects.project_status,
        project_data.project_data_p_1,
        users.user_name,
        project_data.update_at
    FROM projects 
    JOIN project_types 
        ON project_types.project_type_id = projects.project_type
    JOIN project_data 
        ON project_data.project_id = projects.project_id
    JOIN users 
        ON users.user_id = projects.project_user
    JOIN affiliations 
        ON affiliations.affiliation_ID = projects.project_affiliation
    WHERE projects.project_id = ?
    LIMIT 1;
`;

const GetDataTimeline = (data, callback) => {
    const { project_id } = data;

    if (!project_id) {
        return callback(new Error("project_id is required"), null);
    }

    con.query(dataTimeline, [project_id], (err, result) => {
        if (err) {
            return callback(err, null);
        }

        if (result.length === 0) {
            return callback(null, {
                success: false,
                message: "ไม่พบข้อมูลโครงการ"
            });
        }

        return callback(null, {
            success: true,
            data: result[0] 
        });
    });
};

module.exports = GetDataTimeline;
