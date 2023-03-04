
//getting express and router library..
const express = require('express');
const router = express.Router();
const passport=require('passport')
//with this we can access all the actions exported in the controllers file
const postController=require('../controllers/postsController');  //be careful not to give spaces in the file name also..
//post is used since we are posting the form,and we used method also as post

// here passport is took from the above and checkAuthentication is the function created in the config folder ,passportlocal file
router.post('/create',passport.checkAuthentication, postController.create);

//finally exporting this router
module.exports=router;