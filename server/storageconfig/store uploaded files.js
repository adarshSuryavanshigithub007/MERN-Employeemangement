const express = require('express')
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
   destination:(req,file,cb)=>{
    cb(null,'public/Images')
   },
   filename:(req,file,cb)=>{
    cb(null,file,filename+"_"+Date.now()+path.extname(file.originalname))
   }
})



module.exports = upload = multer({
    storage:storage
})
