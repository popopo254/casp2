const con = require('../config/database');

const GetPlTimelines = `
    SELECT 
        project_status.project_status_id AS status_id,
        project_status.project_status_name AS status, 
        project_timelines.specified_at AS date, 
        project_timelines.project_timeline_comment AS detail
    FROM project_timelines 
    RIGHT JOIN project_status 
        ON project_timelines.project_timeline_status_id = project_status.project_status_id
    WHERE project_timelines.project_timeline_projectId = ?
    ORDER BY project_timelines.specified_at
`;

const GetTimelines = (data, callback) => {
    const { project_id } = data;

    if (!project_id) {
        return callback(new Error("project_id is required"), null);
    }

    con.query(GetPlTimelines, [project_id], (err, result) => {
        if (err) {
            return callback(err, null);
        }

        if (result.length === 0) {
            return callback(null, {
                success: false,
                message: "ไม่พบ Timeline สำหรับโครงการนี้"
            });
        }

        return callback(null, {
            success: true,
            data: result
        });
    });
};

module.exports = GetTimelines;
