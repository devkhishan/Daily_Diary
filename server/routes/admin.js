const express = require('express') 
const router = express.Router()
const Post = require('../models/Post')
const User = require('../models/User')
const adminLayout = '../views/layouts/admin'

router.get('/admin', (req,res) => {
    try{
        res.render('admin/index', {layout: adminLayout})
    }catch(e){
        console.log(e);
    }

})



router.post('/admin', (req,res) => {
    try{
        const {username, password} = req.body;
        console.log(req.body); 
        res.redirect('/admin');
    }catch(e){
        console.log(e);
    }
})
module.exports = router;