const express = require('express')
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const router = express.Router();
const AllPermissions = require('../models/Admin/AllPermissions')
const AdminGetUser = require('../models/Admin/AdminGetUser')
const AdminActiveRole = require('../models/Admin/AdminActiveRole')
const AdminInActiveRole = require('../models/Admin/AdminInActiveRole')
const AdminDeleteRole = require('../models/Admin/AdminDeleteRole');
const AdminAddPermission = require('../models/Admin/AdminAddPermission');
const AdminAddAccount = require('../models/Admin/AdminAddAccount')
const AdminDeleteAccount = require('../models/Admin/AdminDeleteAccount')
const AdminDeleteAllRole = require('../models/Admin/AdminDeleteAllRole')
const GetProjects = require('../models/Admin/Get_project')
const ConsiderStatus = require('../models/Admin/ConsiderStatus')
const toggleState = require('../models/Admin/ToggleProposal')
const GetStatus = require('../models/Admin/Get_status')

router.get('/status',(req,res)=>{
    GetStatus((err,results)=>{
        if (err) {
            console.error('Error:', err);
            return res.status(500).json({ success: false, message: 'เกิดข้อผิดพลาดในการดึงข้อมูลสถานะการอนุมัติ' });
        }

        return res.status(200).json({ success: true, message: 'สำเร็จ',results: results });
    })
})

router.post('/toggle/proposal_state',(req,res)=>{
    //console.log(req.body)
    toggleState(req.body,(err,result)=>{
        if (err) {
            console.error('Error:', err);
            return res.status(500).json({ success: false, message: 'เกิดข้อผิดพลาดในการอัปเดตสถานะ' });
        }

        return res.status(200).json({ success: true, message: 'อัพเดทสถานะสำเร็จ' });
    })
})

router.post('/consider/status', (req, res) => {
    ConsiderStatus(req.body, (err, result) => {
        if (err) {
            console.error('Error:', err);
            return res.status(500).json({ success: false, message: 'เกิดข้อผิดพลาดในการอัปเดตสถานะ' });
        }

        return res.status(200).json(result);
    });
});

router.post('/projects',(req,res)=>{
    GetProjects(req.body,(err,results)=>{
        if(err){
            return res.status(500).json({ success: false, message: 'An error occurred while fetching the data.' })
        }
        return res.status(200).json({ success: true, message: 'Data fetched successfully.',data: results });
    })
})


router.post('/add/account', (req, res) => {
    //console.log(req.body)
    AdminAddAccount(req.body, (err, result) => {
        if (err) {
            return res.status(400).json({ success: false, message: err.message })
        } else {
            return res.json({ success: true, message: result.message })
        }
    })
})

router.post('/delete/account', (req,res)=>{
    AdminDeleteAllRole(req.body,(err,result)=>{
        if(err){
            return res.status(500).json({ success: false, message: 'An error occurred when delete permissions' })
        }
        //console.log(result)
        AdminDeleteAccount(req.body, (err,results)=>{
            if(err){
                return res.status(500).json({ success: false, message: 'An error occurred when delete account' })
            }
            if(results.affectedRows > 0){
                return res.status(200).json({ success: true})
            }
            
        })
    })
})

router.post('/users/permissions', (req, res) => {
    AllPermissions(req.body,(err, results) => {
        console.log(req.body)
        if (err) {
            res.json({ success: false, message: 'An error occurred' });
        } else {
            // res.json({ success: true, Data: results ? results : {} });
            res.json({success: true, result : results})
        }
    });
})


router.post('/access/user', (req, res) => {
    //console.log(req.body)
    AdminGetUser(req.body,(err, results) => {
        if (err) {
            res.json({ success: false, message: 'An error occurred' });
        } else {
            // res.json({ success: true, Data: results ? results : {} });
            res.json({success: true, result : results})
        }
    });
})

router.post('/active/role',(req,res)=>{
    AdminActiveRole(req.body,(err,result)=>{
        if (err) {
            res.json({ success: false, message: 'An error occurred' });
        } else {
            // res.json({ success: true, Data: results ? results : {} });
            res.json({success: true, message: 'เปิดใช้สิทธิ์เสร็จสมบูรณ์'})
        }
    })
})

router.post('/in-active/role',(req,res)=>{
    if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({ success: false, message: 'No data provided' });
    }
    AdminInActiveRole(req.body,(err,result)=>{
        if (err) {
            res.json({ success: false, message: 'An error occurred' });
        } else {
            // res.json({ success: true, Data: results ? results : {} });
            res.json({success: true, message: 'ยกเลิกสิทธิ์ผู้ใช้เสร็จสมบูรณ์'})
        }
    })
})

router.post('/delete/role',(req,res)=>{
    AdminDeleteRole(req.body,(err,result)=>{
        if (err) {
            res.json({ success: false, message: 'An error occurred' });
        } else {
            // res.json({ success: true, Data: results ? results : {} });
            res.json({success: true, message: 'ลบสิทธิ์ใช้งานเสร็จสมบูรณ์'})
        }
    })

})
router.post('/add/permission', (req, res) => {
    AdminAddPermission(req.body, (err, results) => {
        if (err) {
            return res.status(500).json({ success: false, message: 'An error occurred' });
        }

        //console.log(results);

        // Check if the permission already exists
        if (results.success === false) {
            return res.status(409).json({ success: false, message: results.message });
        }

        // Check if the permission was successfully added
        if (results.data.affectedRows > 0) {
            return res.status(200).json({ success: true, message: 'Permission added successfully.' });
        } else {
            return res.status(400).json({ success: false, message: 'No permission was added.' });
        }
    });
});

module.exports = router;