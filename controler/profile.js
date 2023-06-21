const userModel = require('../models/userModel');
const multer = require('multer');
const path = require('path');

const jwt = require('jsonwebtoken');
const sec_key = 'ndsuehuhsduhedehdhdunjndhuu';

module.exports.getuserpage = async function getuserpage(req, res) {
    let userId = req.params.id;
    let user = await userModel.findOne({ _id: userId })
    res.render('user', { profile_pic: user.profileImage, name: user.fullname, username: user.username, email: user.email, id: user._id })
}
module.exports.updateUser = async function updateUser(req, res) {
    para = req.params.id
    let data = req.body

    let objForUpdate = {};
    for (var key in data) {
        if (req.body.key !== null && req.body[key] !== "" && key !== '_id') {
            objForUpdate[key]=req.body[key];
        }
    }

    let user = await userModel.findById(para);

    if (user) {
        let profile_img=req.file.filename;
        let updateruser=await userModel.findByIdAndUpdate(para,objForUpdate)
        updateruser=await userModel.findByIdAndUpdate(para,{profileImage:profile_img})
        console.log(updateruser);
        res.redirect(`/user/${para}`)
    }
    else {
        res.send("Error")
    }

}
const storage = multer.diskStorage({
    destination: (res, file, cb) => {
        cb(null, 'C:\\Users\\pradi\\Desktop\\Notefy\\public\\profilePictures')
    },
    filename: (res, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})
module.exports.upload = multer({ storage: storage }).single('profile_pic')
module.exports.loginProtect = async function loginProtect(req, res, next) {
    if (req.cookies.isLoggedin) {
        const key = jwt.verify(req.cookies.isLoggedin, sec_key)
        if (key) {
            next()
        }
        else {
            res.redirect(`/landing?success=true&message=Please login first`);
        }
    }
    else {
        res.redirect(`/landing?success=true&message=Please login first`);
    }
}

