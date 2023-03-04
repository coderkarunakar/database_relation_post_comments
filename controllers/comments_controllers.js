const Comment=require('../models/comments')
const Post=require('../models/post')
//here action is create since we are creating ..
module.exports.create=function(req,res){
    // we need to create a comment over a post,(i.e we need to find wheather that post exist or not )


    //steps....
    //1.creating a comments and2. adding post id to the comment 3. adding comment to the post
    Post.findById(req.body.post,function(err,post){
        if(post){
            Comment.create({
                content:req.body.content,
                post:req.body.post,
                user:req.user._id
            },function(err,comment){
                if(err){console.log('the error is raised in the comments')}

//this was given by mongodb,here comment is pushed to mongodb
                post.comments.push(comment);
                //whenever we are updating something we need to save it also..since if we call save it get saved in the database ,previously it was in the ram memory..
                post.save();

                res.redirect('/');
            

            })
        }
    }); //since name of the input is post ,so we took req.body.post,we did in home .ejs ,name is post
}