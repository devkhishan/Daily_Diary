const express = require('express') 
const router = express.Router()
const Post = require('../models/Post')


router.get('', async (req,res) => {

    try{
        const page = req.query.page || 1
        const perPage = 1

        const data = await Post.aggregate([ {$sort: {createdAt : -1}} ])
        .skip(perPage * page - perPage)
        .limit(perPage)
        .exec()

        const count = await Post.countDocuments();
        const nextPage = parseInt(page)+1;
        const hasNextPage = nextPage <= Math.ceil(count/perPage);
        
        res.render('index', { 
            data,
            current: page, 
            nextPage: hasNextPage ? nextPage : null
         })
    }catch (e){
        console.log(e);
    }
})

router.get('/post/:id', async (req,res) => {
    try{
        let iden = req.params.id;
        const data = await Post.findById({_id: iden});

        res.render('post',{data})
    }
    catch (e){
        console.log(e);
    }
})


router.post('/search', async (req,res) => {
    try{

        let searchTerm = req.body.searchTerm
        const noSpecialChar = searchTerm.replace(/[^a-zA-Z0-9]/g,"")
        
        const data = await Post.find({
            $or : [
                {title: {$regex: new RegExp(noSpecialChar, 'i')}},
                {body: {$regex: new RegExp(noSpecialChar, 'i')}}
            ]
        })

        res.render('search', { data })
    }catch(e){
        console.log(e);
    }
})





router.get('/about', (req,res) => {
    res.render('about')
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


module.exports = router