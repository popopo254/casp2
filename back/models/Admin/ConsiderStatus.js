const bodyParser = require('body-parser');
const con = require('../../config/database');

const consider = `
    UPDATE projects 
    SET project_status = ? 
    WHERE project_id = ?;
`;

const SQL_CREATE_TIMELINE = `
    INSERT INTO project_timelines(project_timeline_projectId, project_timeline_status_id,project_timeline_comment)
    VALUES (?, ?, ?);
`;

const ConsiderStatus = (data, callback) => {
    const { status, project_id,comment } = data;
    //console.log('timelime comment',data)
    con.query(consider, [status, project_id], (err, result) => {
        if (err) {
            return callback(err, null);
        }

        if (result.affectedRows > 0) {
            // ถ้าอัปเดตสำเร็จ ค่อยเพิ่ม timeline
            con.query(SQL_CREATE_TIMELINE, [project_id, status,comment], (err2, result2) => {
                if (err2) {
                    return callback(err2, null);
                }

                if (result2.affectedRows > 0) {
                    return callback(null, { success: true, message: 'สถานะได้รับการอัปเดตและ timeline ถูกเพิ่มเรียบร้อยแล้ว' });
                } else {
                    return callback(null, { success: false, message: 'ไม่สามารถเพิ่ม timeline ได้' });
                }
            });
        } else {
            return callback(null, { success: false, message: 'ไม่พบ project หรือไม่สามารถอัปเดตสถานะได้' });
        }
    });
};


module.exports = ConsiderStatus