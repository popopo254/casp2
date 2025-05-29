const express = require('express')
const cors = require('cors')
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const router = express.Router()

const PlDelProject = require('../models/DelProject')

const Save_P1 = require('../models/Save_No_Income/Save_P1')
const Save_P2 = require('../models/Save_No_Income/Save_P2')
const Save_P3 = require('../models/Save_No_Income/Save_P3')
const Save_P4 = require('../models/Save_No_Income/Save_P4')
const Save_P5 = require('../models/Save_No_Income/Save_P5')
const Save_P6 = require('../models/Save_No_Income/Save_P6')
const Save_P7 = require('../models/Save_No_Income/Save_P7')

const Get_No_Income_P1 = require('../models/Get/Get_p1')
const Get_No_Income_P2 = require('../models/Get/Get_p2')
const Get_No_Income_P3 = require('../models/Get/Get_p3')
const Get_No_Income_P4 = require('../models/Get/Get_p4')
const Get_No_Income_P5 = require('../models/Get/Get_p5')
const Get_No_Income_P6 = require('../models/Get/Get_p6')
const Get_No_Income_P7 = require('../models/Get/Get_p7')


const getAllProject = require('../models/Pl_GetAllProject')
const getSystemStatus = require('../models/is_proposal_open')
const sendProposal = require('../models/sendProposal')
const GetPlTimelines = require('../models/GetPLTimelines')
const GetDataTimeline = require('../models/GetDataTimeline')


// save income
const Save_Income_P1 = require('../models/Save_Income/Save_P1')
const Save_Income_P2 = require('../models/Save_Income/Save_P2')
const Save_Income_P3 = require('../models/Save_Income/Save_P3')
const Save_Income_P4 = require('../models/Save_Income/Save_P4')
const Save_Income_P5 = require('../models/Save_Income/Save_P5')
const Save_Income_P6 = require('../models/Save_Income/Save_P6')
const Save_Income_P7 = require('../models/Save_Income/Save_P7')

//1st try by Aris
const Save_TS_P1 = require('../models/Save_TS/Save_TS_P1')
const TS_Get_P1 = require('../models/Get/Get_TS_p1')
const Save_TS_P2 = require('../models/Save_TS/Save_TS_P2')
const TS_Get_P2 = require('../models/Get/Get_TS_p2')
const Save_TS_P3 = require('../models/Save_TS/Save_TS_P3')
const TS_Get_P3 = require('../models/Get/Get_TS_p3')
const Save_TS_P4 = require('../models/Save_TS/Save_TS_P4')
const TS_Get_P4 = require('../models/Get/Get_TS_p4')
const Save_TS_P5 = require('../models/Save_TS/Save_TS_P5')
const TS_Get_P5 = require('../models/Get/Get_TS_p5')
const Save_TS_P6 = require('../models/Save_TS/Save_TS_P6')
const TS_Get_P6 = require('../models/Get/Get_TS_p6')
const Save_TS_P7 = require('../models/Save_TS/Save_TS_P7')
const TS_Get_P7 = require('../models/Get/Get_TS_p7')
//end of 1st try by Aris

//shot term
const Save_ST_P1 = require('../models/Save_ST/Save_ST_P1')
const ST_Get_P1 = require('../models/Get/Get_ST_p1')
const Save_ST_P2 = require('../models/Save_ST/Save_ST_P2')
const ST_Get_P2 = require('../models/Get/Get_ST_p2')
const Save_ST_P3 = require('../models/Save_ST/Save_ST_P3')
const ST_Get_P3 = require('../models/Get/Get_ST_p3')
const Save_ST_P4 = require('../models/Save_ST/Save_ST_P4')
const ST_Get_P4 = require('../models/Get/Get_ST_p4')
const Save_ST_P5 = require('../models/Save_ST/Save_ST_P5')
const ST_Get_P5 = require('../models/Get/Get_ST_p5')
const Save_ST_P6 = require('../models/Save_ST/Save_ST_P6')
const ST_Get_P6 = require('../models/Get/Get_ST_p6')
const Save_ST_P7 = require('../models/Save_ST/Save_ST_P7')
const ST_Get_P7 = require('../models/Get/Get_ST_p7')
//
router.post("/del/project", async (req, res) => {
    //console.log("del project",req.body)
    PlDelProject(req.body, (err, results) => {
      if (err) {
        console.error("❌ Delete failed:", err);
        return res.status(500).json({
          success: false,
          message: "เกิดข้อผิดพลาดในการลบโครงการ",
        });
      }
  
      // Check if a row was actually deleted
      if (results.affectedRows === 0) {
        console.warn("⚠️ No project deleted (invalid ID or no permission)");
        return res.status(404).json({
          success: false,
          message: "ไม่พบโครงการหรือไม่มีสิทธิ์ลบ",
        });
      }
  
      //console.log("✅ Delete success:", results);
      res.json({
        success: true,
        message: "ลบโครงการเรียบร้อยแล้ว",
      });
    });
  });
  

router.post('/timelines',(req,res)=>{
    //console.log(req.body)
    GetPlTimelines(req.body,(err,results)=>{
        if(err){
            return res.status(500).json({ success: false, message: 'An error occurred while fetching the timelines.' })
        }
        return res.status(200).json({ success: true, message: 'Timelines fetched successfully.', data: results });
    })
})
router.post('/timelines/data',(req,res)=>{
    GetDataTimeline(req.body,(err,result)=>{
        if(err){
            return res.status(500).json({ success: false, message: 'An error occurred while fetching the data timelines.' })
        }
        return res.status(200).json({ success: true, message: 'Data Timelines fetched successfully.', data: result });
    })
})

router.post('/projects',(req,res)=>{
    //console.log(req.body)
    getAllProject(req.body,(err,results)=>{
        if(err){
            return res.status(500).json({ success: false, message: 'An error occurred while fetching the data.' })
        }
        return res.status(200).json({ success: true, message: 'Data fetched successfully.',data: results });
    })
})
router.post('/get/p_1',(req,res)=>{
    Get_No_Income_P1(req.body,(err,result)=>{
        if(err){
            return res.status(500).json({ success: false, message: 'An error occurred while fetching the data.' })
        }
        return res.status(200).json({ success: true, message: 'P_1 Data fetched successfully.', data: result });
    })
})

router.post('/get/p_2',(req,res)=>{
    Get_No_Income_P2(req.body,(err,result)=>{
        if(err){
            return res.status(500).json({ success: false, message: 'An error occurred while fetching the data.' })
        }
        return res.status(200).json({ success: true, message: 'P_2 Data fetched successfully.', data: result });
    })
})

router.post('/get/p_3',(req,res)=>{
    Get_No_Income_P3(req.body,(err,result)=>{
        if(err){
            return res.status(500).json({ success: false, message: 'An error occurred while fetching the data.' })
        }
        return res.status(200).json({ success: true, message: 'P_3 Data fetched successfully.', data: result });
    })
})

router.post('/get/p_4',(req,res)=>{
    Get_No_Income_P4(req.body,(err,result)=>{
        if(err){
            return res.status(500).json({ success: false, message: 'An error occurred while fetching the data.' })
        }
        return res.status(200).json({ success: true, message: 'P_4 Data fetched successfully.', data: result });
    })
})

router.post('/get/p_5',(req,res)=>{
    Get_No_Income_P5(req.body,(err,result)=>{
        if(err){
            return res.status(500).json({ success: false, message: 'An error occurred while fetching the data.' })
        }
        return res.status(200).json({ success: true, message: 'P_5 Data fetched successfully.', data: result });
    })
})

router.post('/get/p_6',(req,res)=>{
    Get_No_Income_P6(req.body,(err,result)=>{
        if(err){
            return res.status(500).json({ success: false, message: 'An error occurred while fetching the data.' })
        }
        return res.status(200).json({ success: true, message: 'P_6 Data fetched successfully.', data: result });
    })
})
router.post('/get/p_7',(req,res)=>{
    Get_No_Income_P7(req.body,(err,result)=>{
        if(err){
            return res.status(500).json({ success: false, message: 'An error occurred while fetching the data.' })
        }
        return res.status(200).json({ success: true, message: 'P_6 Data fetched successfully.', data: result });
    })
})

//Upload File
const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      const uploadPath = path.join(__dirname, '../Files')

      if (!fs.existsSync(uploadPath)) {
        fs.mkdirSync(uploadPath, { recursive: true })
      }
      cb(null, uploadPath)
    },
    filename: (req, file, cb) => {
        const { projectId, projectType, page } = req.query;

        if (!projectId || !projectType || !page) {
            return cb(new Error('Missing projectId or projectType'));
        }

        // แปลงชื่อไฟล์ให้เป็น UTF-8
        const originalName = decodeURIComponent(escape(file.originalname));

        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);

        const newFilename = `${projectId}-${projectType}-${page}-${uniqueSuffix}-${originalName}`;

        cb(null, newFilename);
    }
  }),
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['application/pdf', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet']

    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true)
    } else {
      cb(new Error('❌ ไม่อนุญาตให้อัปโหลดไฟล์ประเภทนี้'))
    }
  }
})

const uploadPath = path.join(__dirname, '../Files')

router.post('/upload/file', (req, res) => {
  upload.single('file')(req, res, (err) => {
    if (err) {
      console.error('Multer error:', err);
      return res.status(400).send({ success: false, message: err.message });
    }

    const { projectId, projectType, page } = req.query;
    if (!projectId || !projectType) {
      return res.status(400).send({ success: false, message: 'Missing projectId or projectType' });
    }

    if (!req.file) {
      return res.status(400).send({ success: false, message: 'No file uploaded' });
    }

    // ลบไฟล์เก่าหลัง upload สำเร็จ
    const existingFiles = fs.readdirSync(uploadPath).filter(name => name.startsWith(`${projectId}-${projectType}-${page}`));
    for (const file of existingFiles) {
      if (file !== req.file.filename) {  // ลบไฟล์เก่าที่ไม่ใช่ไฟล์นี้
        fs.unlinkSync(path.join(uploadPath, file));
      }
    }

    res.send({
      success: true,
      message: 'File uploaded successfully',
      file: req.file
    });
  });
});

// Api Get File มาแสดงบนเว็ป
router.get('/file/display', (req, res) => { 
  const { projectId, projectType, page } = req.query;

  if (!projectId || !projectType || !page) {
    return res.status(400).send({ success: false, message: 'Missing projectId, projectType or page' });
  }

  const folderPath = path.join(__dirname, '../Files');
  const files = fs.readdirSync(folderPath);

  const matchFiles = files.filter(f => f.startsWith(`${projectId}-${projectType}-${page}`));

  if (matchFiles.length === 0) {
    return res.send({ success: true, file: null });
  }

  // 📌 เอาไฟล์ใหม่สุดมาแสดง
  const latestFile = matchFiles.sort().reverse()[0];

  res.send({
    success: true,
    file: latestFile
  });
});



// check open state (proposal)

router.post('/proposal',(req,res)=>{
    getSystemStatus((err,result)=>{
        if(err){
            return res.status(500).json({ success: false, message: 'An error occurred while fetching the data.' })
        }
        const is_proposal_open = result[0].control_status === 1;

        return res.status(200).json({ success: true, message: 'Get System Status', is_proposal_open: is_proposal_open });
    })
})

router.post('/proposal/send', (req, res) => {
    sendProposal(req.body, (err, result) => {
        if (err) {
            return res.status(500).json({ 
                success: false, 
                message: 'An error occurred while sending the proposal.' 
            });
        }

        if (result?.success === false) {
            return res.status(400).json({
                success: false,
                message: result.message || 'Some required fields are missing.'
            });
        }

        return res.status(200).json({ 
            success: true, 
            message: 'Proposal submitted successfully.', 
            data: result 
        });
    });
});


// save
router.post('/p_1/no_income/save',(req,res)=>{
    //console.log('router:',req.body)
    Save_P1(req.body,(err,result)=>{
        if(err){
            //console.log(err)
            return res.json({ success: false, message: 'An error occurred while saving the data.' });
        }
       //console.log(result)
        return res.json({ success: true, message: 'Data saved successfully.',insert_id: result.insertId, updated_data: result.updated_data });
    })
})

router.post('/p_2/no_income/save',(req,res)=>{
    Save_P2(req.body,(err,result)=>{
        if(err){
            return res.json({ success: false, message: 'An error occurred while saving the data.' });
        }
       //console.log(result)
        return res.json({ success: true, message: 'Data saved successfully.',insert_id: result.insertId,updated_data: result.updated_data });
    })
})

router.post('/p_3/no_income/save',(req,res)=>{
    Save_P3(req.body,(err,result)=>{
        if(err){
            return res.json({ success: false, message: 'An error occurred while saving the data.' });
        }
       //console.log(result)
        return res.json({ success: true, message: 'Data saved successfully.',insert_id: result.insertId,updated_data: result.updated_data  });
    })
})

router.post('/p_4/no_income/save',(req,res)=>{
    Save_P4(req.body,(err,result)=>{
        if(err){
            return res.json({ success: false, message: 'An error occurred while saving the data.' });
        }
       //console.log(result)
        return res.json({ success: true, message: 'Data saved successfully.',insert_id: result.insertId,updated_data: result.updated_data  });
    })
})

router.post('/p_5/no_income/save',(req,res)=>{
    Save_P5(req.body,(err,result)=>{
        if(err){
            return res.json({ success: false, message: 'An error occurred while saving the data.' });
        }
       //console.log(result)
        return res.json({ success: true, message: 'Data saved successfully.',insert_id: result.insertId,updated_data: result.updated_data  });
    })
})

router.post('/p_6/no_income/save',(req,res)=>{
    Save_P6(req.body,(err,result)=>{
        if(err){
            return res.json({ success: false, message: 'An error occurred while saving the data.' });
        }
       //console.log(result)
        return res.json({ success: true, message: 'Data saved successfully.',insert_id: result.insertId,updated_data: result.updated_data  });
    })
})

router.post('/p_7/no_income/save',(req,res)=>{
    Save_P7(req.body,(err,result)=>{
        if(err){
            return res.json({ success: false, message: 'An error occurred while saving the data.' });
        }
       //console.log(result)
        return res.json({ success: true, message: 'Data saved successfully.',insert_id: result.insertId,updated_data: result.updated_data  });
    })
})

//income

router.post('/p_1/income/save',(req,res)=>{
    //console.log('router:',req.body)
    Save_Income_P1(req.body,(err,result)=>{
        if(err){
            //console.log(err)
            return res.json({ success: false, message: 'An error occurred while saving the data.' });
        }
       //console.log(result)
        return res.json({ success: true, message: 'Data saved successfully.',insert_id: result.insertId, updated_data: result.updated_data });
    })
})

router.post('/p_2/income/save',(req,res)=>{
    //console.log('router:',req.body)
    Save_Income_P2(req.body,(err,result)=>{
        if(err){
            //console.log(err)
            return res.json({ success: false, message: 'An error occurred while saving the data.' });
        }
       //console.log(result)
        return res.json({ success: true, message: 'Data saved successfully.',insert_id: result.insertId, updated_data: result.updated_data });
    })
})

router.post('/p_3/income/save',(req,res)=>{
    //console.log('router:',req.body)
    Save_Income_P3(req.body,(err,result)=>{
        if(err){
            //console.log(err)
            return res.json({ success: false, message: 'An error occurred while saving the data.' });
        }
       //console.log(result)
        return res.json({ success: true, message: 'Data saved successfully.',insert_id: result.insertId, updated_data: result.updated_data });
    })
})

router.post('/p_4/income/save',(req,res)=>{
    //console.log('router:',req.body)
    Save_Income_P4(req.body,(err,result)=>{
        if(err){
            //console.log(err)
            return res.json({ success: false, message: 'An error occurred while saving the data.' });
        }
       //console.log(result)
        return res.json({ success: true, message: 'Data saved successfully.',insert_id: result.insertId, updated_data: result.updated_data });
    })
})

router.post('/p_5/income/save',(req,res)=>{
    //console.log('router:',req.body)
    Save_Income_P5(req.body,(err,result)=>{
        if(err){
            //console.log(err)
            return res.json({ success: false, message: 'An error occurred while saving the data.' });
        }
       //console.log(result)
        return res.json({ success: true, message: 'Data saved successfully.',insert_id: result.insertId, updated_data: result.updated_data });
    })
})

router.post('/p_6/income/save',(req,res)=>{
    //console.log('router:',req.body)
    Save_Income_P6(req.body,(err,result)=>{
        if(err){
            //console.log(err)
            return res.json({ success: false, message: 'An error occurred while saving the data.' });
        }
       //console.log(result)
        return res.json({ success: true, message: 'Data saved successfully.',insert_id: result.insertId, updated_data: result.updated_data });
    })
})

router.post('/p_7/income/save',(req,res)=>{
    //console.log('router:',req.body)
    Save_Income_P7(req.body,(err,result)=>{
        if(err){
            //console.log(err)
            return res.json({ success: false, message: 'An error occurred while saving the data.' });
        }
       //console.log(result)
        return res.json({ success: true, message: 'Data saved successfully.',insert_id: result.insertId, updated_data: result.updated_data });
    })
})

//shot term
router.post('/p_1/shot_term/save',(req,res)=>{
    //console.log('router:',req.body)
    Save_ST_P1(req.body,(err,result)=>{
        if(err){
            //console.log(err)
            return res.json({ success: false, message: 'An error occurred while saving the data.' });
        }
       //console.log(result)
        return res.json({ success: true, message: 'Data saved successfully.',insert_id: result.insertId, updated_data: result.updated_data });
    })
})
router.post('/p_2/shot_term/save',(req,res)=>{
    //console.log('router:',req.body)
    Save_ST_P2(req.body,(err,result)=>{
        if(err){
            //console.log(err)
            return res.json({ success: false, message: 'An error occurred while saving the data.' });
        }
       //console.log(result)
        return res.json({ success: true, message: 'Data saved successfully.',insert_id: result.insertId, updated_data: result.updated_data });
    })
})
router.post('/p_3/shot_term/save',(req,res)=>{
    //console.log('router:',req.body)
    Save_ST_P3(req.body,(err,result)=>{
        if(err){
            //console.log(err)
            return res.json({ success: false, message: 'An error occurred while saving the data.' });
        }
       //console.log(result)
        return res.json({ success: true, message: 'Data saved successfully.',insert_id: result.insertId, updated_data: result.updated_data });
    })
})
router.post('/p_4/shot_term/save',(req,res)=>{
    //console.log('router:',req.body)
    Save_ST_P4(req.body,(err,result)=>{
        if(err){
            //console.log(err)
            return res.json({ success: false, message: 'An error occurred while saving the data.' });
        }
       //console.log(result)
        return res.json({ success: true, message: 'Data saved successfully.',insert_id: result.insertId, updated_data: result.updated_data });
    })
})
router.post('/p_5/shot_term/save',(req,res)=>{
    //console.log('router:',req.body)
    Save_ST_P5(req.body,(err,result)=>{
        if(err){
            //console.log(err)
            return res.json({ success: false, message: 'An error occurred while saving the data.' });
        }
       //console.log(result)
        return res.json({ success: true, message: 'Data saved successfully.',insert_id: result.insertId, updated_data: result.updated_data });
    })
})
router.post('/p_6/shot_term/save',(req,res)=>{
    //console.log('router:',req.body)
    Save_ST_P6(req.body,(err,result)=>{
        if(err){
            //console.log(err)
            return res.json({ success: false, message: 'An error occurred while saving the data.' });
        }
       //console.log(result)
        return res.json({ success: true, message: 'Data saved successfully.',insert_id: result.insertId, updated_data: result.updated_data });
    })
})
router.post('/p_7/shot_term/save',(req,res)=>{
    //console.log('router:',req.body)
    Save_ST_P7(req.body,(err,result)=>{
        if(err){
            //console.log(err)
            return res.json({ success: false, message: 'An error occurred while saving the data.' });
        }
       //console.log(result)
        return res.json({ success: true, message: 'Data saved successfully.',insert_id: result.insertId, updated_data: result.updated_data });
    })
})
router.post('/ST/get/p_1', (req, res) => {
    ST_Get_P1(req.body, (err, result) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: 'An error occurred while fetching the data.'
            });
        }

        return res.status(200).json({
            success: true,
            message: 'P_1 Data fetched successfully.',
            data: result
        });
    });
});
router.post('/ST/get/p_2', (req, res) => {
    ST_Get_P2(req.body, (err, result) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: 'An error occurred while fetching the data.'
            });
        }

        return res.status(200).json({
            success: true,
            message: 'P_2 Data fetched successfully.',
            data: result
        });
    });
});
router.post('/ST/get/p_3', (req, res) => {
    ST_Get_P3(req.body, (err, result) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: 'An error occurred while fetching the data.'
            });
        }

        return res.status(200).json({
            success: true,
            message: 'P_3 Data fetched successfully.',
            data: result
        });
    });
});
router.post('/ST/get/p_4', (req, res) => {
    ST_Get_P4(req.body, (err, result) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: 'An error occurred while fetching the data.'
            });
        }

        return res.status(200).json({
            success: true,
            message: 'P_4 Data fetched successfully.',
            data: result
        });
    });
});
router.post('/ST/get/p_5', (req, res) => {
    ST_Get_P5(req.body, (err, result) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: 'An error occurred while fetching the data.'
            });
        }

        return res.status(200).json({
            success: true,
            message: 'P_5 Data fetched successfully.',
            data: result
        });
    });
});
router.post('/ST/get/p_6', (req, res) => {
    ST_Get_P6(req.body, (err, result) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: 'An error occurred while fetching the data.'
            });
        }

        return res.status(200).json({
            success: true,
            message: 'P_5 Data fetched successfully.',
            data: result
        });
    });
});
router.post('/ST/get/p_7', (req, res) => {
    ST_Get_P7(req.body, (err, result) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: 'An error occurred while fetching the data.'
            });
        }

        return res.status(200).json({
            success: true,
            message: 'P_5 Data fetched successfully.',
            data: result
        });
    });
});

//



//1st try by Aris
router.post('/TS/p_1/save',(req,res)=>{
    //console.log(req.body)
    Save_TS_P1(req.body,(err,result)=>{
        if(err){
            //console.log(err)
            return res.json({ success: false, message: 'An error occurred while saving the data.' });
        }
       //console.log(result)
        return res.json({ success: true, message: 'Data saved successfully.',insert_id: result.insertId, updated_data: result.updated_data });
    })
})

router.post('/TS/get/p_1',(req,res)=>{
    //try
    //console.log('Received request for P1 data:', req.body);
    //
    TS_Get_P1(req.body,(err,result)=>{
        if(err){
            //try
            console.error('Error fetching P1 data:', err);
            //
            return res.status(500).json({ success: false, message: 'An error occurred while fetching the data.' })
        }
        //try
        //console.log('Returning P1 data:', result);
        //
        return res.status(200).json({ success: true, message: 'P_1 Data fetched successfully.', data: result });
    })
})
router.post('/TS/p_2/save',(req,res)=>{
    //console.log(req.body)
    Save_TS_P2(req.body,(err,result)=>{
        if(err){
            //console.log(err)
            return res.json({ success: false, message: 'An error occurred while saving the data.' });
        }
       //console.log(result)
        return res.json({ success: true, message: 'Data saved successfully.',insert_id: result.insertId, updated_data: result.updated_data });
    })
})

router.post('/TS/get/p_2',(req,res)=>{
    TS_Get_P2(req.body,(err,result)=>{
        if(err){
            return res.status(500).json({ success: false, message: 'An error occurred while fetching the data.' })
        }
        return res.status(200).json({ success: true, message: 'P_2 Data fetched successfully.', data: result });
    })
})

router.post('/TS/p_3/save',(req,res)=>{
    //console.log(req.body)
    Save_TS_P3(req.body,(err,result)=>{
        if(err){
            //console.log(err)
            return res.json({ success: false, message: 'An error occurred while saving the data.' });
        }
       //console.log(result)
        return res.json({ success: true, message: 'Data saved successfully.',insert_id: result.insertId, updated_data: result.updated_data });
    })
})

router.post('/TS/get/p_3',(req,res)=>{
    TS_Get_P3(req.body,(err,result)=>{
        if(err){
            return res.status(500).json({ success: false, message: 'An error occurred while fetching the data.' })
        }
        return res.status(200).json({ success: true, message: 'P_3 Data fetched successfully.', data: result });
    })
})

router.post('/TS/p_4/save',(req,res)=>{
    //console.log(req.body)
    Save_TS_P4(req.body,(err,result)=>{
        if(err){
            //console.log(err)
            return res.json({ success: false, message: 'An error occurred while saving the data.' });
        }
       //console.log(result)
        return res.json({ success: true, message: 'Data saved successfully.',insert_id: result.insertId, updated_data: result.updated_data });
    })
})

router.post('/TS/get/p_4',(req,res)=>{
    TS_Get_P4(req.body,(err,result)=>{
        if(err){
            return res.status(500).json({ success: false, message: 'An error occurred while fetching the data.' })
        }
        return res.status(200).json({ success: true, message: 'P_3 Data fetched successfully.', data: result });
    })
})

router.post('/TS/p_5/save',(req,res)=>{
    //console.log(req.body)
    Save_TS_P5(req.body,(err,result)=>{
        if(err){
            //console.log(err)
            return res.json({ success: false, message: 'An error occurred while saving the data.' });
        }
       //console.log(result)
        return res.json({ success: true, message: 'Data saved successfully.',insert_id: result.insertId, updated_data: result.updated_data });
    })
})

router.post('/TS/get/p_5',(req,res)=>{
    TS_Get_P5(req.body,(err,result)=>{
        if(err){
            return res.status(500).json({ success: false, message: 'An error occurred while fetching the data.' })
        }
        return res.status(200).json({ success: true, message: 'P_3 Data fetched successfully.', data: result });
    })
})

router.post('/TS/p_6/save',(req,res)=>{
    //console.log(req.body)
    Save_TS_P6(req.body,(err,result)=>{
        if(err){
            //console.log(err)
            return res.json({ success: false, message: 'An error occurred while saving the data.' });
        }
       //console.log(result)
        return res.json({ success: true, message: 'Data saved successfully.',insert_id: result.insertId, updated_data: result.updated_data });
    })
})

router.post('/TS/get/p_6',(req,res)=>{
    TS_Get_P6(req.body,(err,result)=>{
        if(err){
            return res.status(500).json({ success: false, message: 'An error occurred while fetching the data.' })
        }
        return res.status(200).json({ success: true, message: 'P_3 Data fetched successfully.', data: result });
    })
})

router.post('/TS/p_7/save',(req,res)=>{
    //console.log(req.body)
    Save_TS_P7(req.body,(err,result)=>{
        if(err){
            //console.log(err)
            return res.json({ success: false, message: 'An error occurred while saving the data.' });
        }
       //console.log(result)
        return res.json({ success: true, message: 'Data saved successfully.',insert_id: result.insertId, updated_data: result.updated_data });
    })
})

router.post('/TS/get/p_7',(req,res)=>{
    TS_Get_P7(req.body,(err,result)=>{
        if(err){
            return res.status(500).json({ success: false, message: 'An error occurred while fetching the data.' })
        }
        return res.status(200).json({ success: true, message: 'P_3 Data fetched successfully.', data: result });
    })
})
//end of 1st try by Aris
module.exports = router;