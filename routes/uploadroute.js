const express=require('express');
const {getUploadPage,postUploadPage,upload}=require('../controler/upload')
const app=express();
const uploadRouter=express.Router();

uploadRouter
.route('/:id')
.get(getUploadPage)
.post(upload,postUploadPage)

module.exports=uploadRouter;