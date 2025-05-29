const con = require('../config/database');

const SQL_SEND_PROPOSAL = `
    UPDATE projects 
    SET project_status = 2 
    WHERE project_id = ?;
`;

const SQL_CHECK_DRAFT = `
    SELECT
      CASE
        WHEN project_data_p_1 IS NOT NULL
         AND project_data_p_2 IS NOT NULL
         AND project_data_p_3 IS NOT NULL
         AND project_data_p_4 IS NOT NULL
         AND project_data_p_5 IS NOT NULL
         AND project_data_p_6 IS NOT NULL
        THEN TRUE
        ELSE FALSE
      END AS all_fields_filled
    FROM project_data
    WHERE project_id = ?;
`;

const SQL_CREATE_TIMELINE = `
    INSERT INTO project_timelines(project_timeline_projectId, project_timeline_status_id)
    VALUES (?, ?);
`;

const sendProposal = (data, callback) => {
    const { project_id } = data;

    if (!project_id) {
        return callback(new Error("project_id is required"), null);
    }

    // ตรวจสอบว่า project_data ครบทุกหน้า
    con.query(SQL_CHECK_DRAFT, [project_id], (err, result) => {
        if (err) return callback(err, null);

        const allFilled = result[0]?.all_fields_filled;

        if (allFilled !== 1) {
            return callback(null, {
                success: false,
                message: 'กรุณากรอกข้อมูลโครงการให้ครบทุกหน้าก่อนส่งเสนอ'
            });
        }

        // ถ้ากรอกครบแล้ว → ส่งเสนอ
        con.query(SQL_SEND_PROPOSAL, [project_id], (err, updateResult) => {
            if (err) return callback(err, null);

            // เพิ่ม timeline สถานะ = 2
            con.query(SQL_CREATE_TIMELINE, [project_id, 2], (err, timelineResult) => {
                if (err) return callback(err, null);

                if (timelineResult.affectedRows > 0) {
                    return callback(null, {
                        success: true,
                        message: 'ส่งโครงการเสนอเรียบร้อย',
                        updateResult
                    });
                } else {
                    return callback(null, {
                        success: false,
                        message: 'ไม่สามารถสร้าง timeline ได้'
                    });
                }
            });
        });
    });
};

module.exports = sendProposal;
