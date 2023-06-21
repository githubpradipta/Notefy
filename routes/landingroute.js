const express=require('express');
const {postRegister,getlanding,postLogin,getMainpage,getUsers,loginProtect,logout}=require('../controler/auth')
const app=express();
const authrouter=express.Router();


authrouter
.route('/register')
.post(postRegister)

authrouter
.route('/login')
.post(postLogin)

authrouter
.route('/landing')
.get(getlanding)

authrouter
.route('/notes/:id')
.get(loginProtect,getMainpage)


authrouter
.route('/logout')
.get(logout)

authrouter
.route('/api/getallUsers')
.get(getUsers)




// function postregister(req,res){
//     console.log(req.body);
//     res.redirect('/landing');
// }
// function getlanding(req,res){
//     res.render('landing')
// }


module.exports=authrouter;