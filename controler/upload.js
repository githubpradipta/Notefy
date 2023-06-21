const userModel = require('../models/userModel');
const multer = require('multer');
const path = require('path');

module.exports.getUploadPage =async function getUploadPage(req, res) {
    let userId = req.params.id;
    let user = await userModel.findOne({ _id: userId })
    res.render('uploadNotes', { profile_pic:user.profileImage,name: user.fullname, username: user.username, id: user._id })
}

const storage = multer.diskStorage({
    destination: (res, file, cb) => {
        cb(null, 'C:\\Users\\pradi\\Desktop\\Notefy\\public\\uplodedNotes')
    },
    filename: (res, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})
module.exports.upload = multer({ storage: storage }).single('upload_files')
module.exports.postUploadPage = function postUploadPage(req, res) {
    console.log(req.body)
    let profile_img=req.file.filename;
    console.log(profile_img);
    res.redirect('/landing')
}