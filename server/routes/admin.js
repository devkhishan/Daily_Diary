const express = require('express') 
const router = express.Router()
const Post = require('../models/Post')

const adminLayout = '../views/layouts/admin'

router.get('/admin', (req,res) => {
    try{
        res.render('admin/index', {layout: adminLayout})
    }catch(e){
        console.log(e);
    }

})


module.exports = router;