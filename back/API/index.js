const express = require('express')
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const router = express.Router();
const googleAuth = require('../models/_Auth')
const UserAccess = require('../models/UserAccess')

const getAffiliations = require('../models/GetAffiliations')
router.get('/hello',(req,res)=>{
    res.status(200).json({'text':"Hello World"})
})



router.post('/auth/google', (req, res) => {
    //console.log('API Login worked')
    if(!req.body.headers) {
        return res.send(req.body.headers)
    }
    //console.log(req.body.headers)
    googleAuth(req.body.headers, (err, results) => {
        if (err) {
            //console.log(err.message)
            if(err.message){
                return res.status(403).json({ success: false, message: `${err.message}` });
            }
            return res.status(500).json({ success: false, message: `${err.message}` })
        } else  {
            //console.log('API Login work2')
            res.status(201).json({ success: true, message: 'User login successful', token: results });
        } 
    })
})

router.post('/user/permission', (req, res) => {
    UserAccess(req.body,(err, results) => {
        if (err) {
            res.json({ success: false, message: 'An error occurred' });
        } else {
            // res.json({ success: true, Data: results ? results : {} });
            res.json({success: true, result : results})
        }
    })
})

router.get('/affiliations',(req,res)=>{
    getAffiliations((err,result)=>{
        if(err){
           return  res.json({ success: false, message: 'An error occurred' });
        }
        res.json({success: true, result : result})
    })
})



module.exports = router;