const userModel = require('../models/userModel');


const jwt = require('jsonwebtoken');
const sec_key = 'ndsuehuhsduhedehdhdunjndhuu';

module.exports.getlanding = function getlanding(req, res) {
    if(req.cookies.isLoggedin){
        const key = jwt.verify(req.cookies.isLoggedin, sec_key)
        if(key){
            res.redirect(`/notes/${key.id}`);
        }
        else{
            res.render('landing');
        }
    }
    else{

        res.render('landing');
    }
}

module.exports.getMainpage = async function getMainpage(req, res) {
    let userId = req.params.id;
    let user = await userModel.findOne({ _id: userId })
    res.render('notes', { profile_pic:user.profileImage,name: user.fullname, username: user.username, id: user._id })
}

module.exports.postRegister = async function postRegister(req, res) {
    let userData = req.body;
    user = await userModel.create(userData);
    console.log(user);
    res.redirect('/landing?success=true&message=Registration Successful')
}

module.exports.postLogin = async function postLogin(req, res) {
    let data = req.body;
    let user = await userModel.findOne({ username: data.username });

    if (user) {
        if (user.password == data.password) {
            let token = jwt.sign({ id: user._id }, sec_key)
            res.cookie('isLoggedin', token)
            res.redirect(`/notes/${user._id}?success=true&message=Successfully loged in`);
        }
        else {
            res.redirect('/landing?success=true&message=Wrong PassWord')
        }
    }
    else {
        res.redirect('/landing?success=true&message=User Not Found')
    }
}
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

module.exports.logout = async function logout(req, res) {
    res.cookie('isLoggedin',' ',{maxAge:1})
    res.redirect('/landing?success=true&message=Successfully Logged Out');
}
module.exports.getUsers = async function getUsers(req, res) {
    let users=await userModel.find();
    if(users){
        res.json(users)
    }
    else{
        res.send("No users")
    }
    
}

