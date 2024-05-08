const express = require('express') 
const router = express.Router()
const Post = require('../models/Post')


router.get('', (req,res) => {
    res.render('index')
})



// function insertMore(){
//     Post.insertMany([
//         {
//             title: "Everthing is Perspective",
//             body: "Nevermind because this kind of view is also a perspective"
//         },
//         {
//             title: "Whole life is a lie",
//             body: "Make sure whether you are living inside a matrix or in your own world"
//         },
//         {
//             title: "Loneliness vs Solitude",
//             body: "Sometimes being alone can lead you to achieve tranquility make sure to say strong in the process"
//         }
//     ])
// }

// insertMore();


router.get('/about', (req,res) => {
    res.render('about')
})

module.exports = router