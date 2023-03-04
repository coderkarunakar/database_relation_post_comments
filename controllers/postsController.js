// here we are creating a post so we need to require it's schema
const Post = require('../models/post')

module.exports.create=function(req,res){
//here we are creating a new post,from the data in the form so we took it as create
    Post.create({
        //here content is took from the home.ejs file at (text-area) and model post schema at (fields)
        
        content:req.body.content,
        
        user: req.user._id  //here we are just creating the user and this can be found by using post.find({user:user_id},funcition(err,post){})

    },function(err,post){
        if(err){console.log('error in creating a post');return ;}
        return res.redirect('back');
    });
}




