const express=require('express');
const {updateUser,upload,getuserpage,loginProtect}=require('../controler/profile')
const app=express();
const profileRouter=express.Router();

profileRouter
.route('/user/:id')
.post(upload,updateUser)

profileRouter
.route('/user/:id')
.get(loginProtect,getuserpage)


module.exports=profileRouter;