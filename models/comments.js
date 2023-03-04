//creating a schema for the comments

const mongoose=require('mongoose');
const commentSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    //comments belongs to a user
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Post'
        
    },
},{
    
        timestamps:true 
});


//finally export this ,and tell mongoose that this is an collection
const Comment= mongoose.model('Comment',commentSchema);
module.exports=Comment;