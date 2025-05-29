const express = require('express')
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const router = express.Router()
const GetProjects = require('../models/Head/Get_project')
const GetPlTimelines = require('../models/GetPLTimelines')
const GetDataTimeline = require('../models/GetDataTimeline')
const ConsiderStatus = require('../models/Head/ConsiderStatus')

router.post('/consider/status', (req, res) => {
    ConsiderStatus(req.body, (err, result) => {
        if (err) {
            console.error('Error:', err);
            return res.status(500).json({ success: false, message: 'เกิดข้อผิดพลาดในการอัปเดตสถานะ' });
        }

        return res.status(200).json(result);
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
    GetProjects(req.body,(err,results)=>{
        if(err){
            return res.status(500).json({ success: false, message: 'An error occurred while fetching the data.' })
        }
        return res.status(200).json({ success: true, message: 'Data fetched successfully.',data: results });
    })
})

module.exports = router;