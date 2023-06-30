const mongoose=require('mongoose');
require("dotenv").config();
mongoose.connect(`${process.env.MongoURL}/?retryWrites=true&w=majority`)
.then((db)=>{
    console.log('Database Connected...')
})
.catch((err)=>{
    console.log(('Database Not Connected...'));
    console.log(err);
})

const userSchema=mongoose.Schema({

    fullname:{
        type:String,
        required:false
    },
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    confirmpassword:{
        type:String,
        required:true
    },
    profileImage:{
        type:String,
        default:'hello'
    }
});

const userModel=mongoose.model('Users',userSchema);
module.exports=userModel;