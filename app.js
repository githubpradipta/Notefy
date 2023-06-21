const express=require('express');
const ejs=require('ejs');
const path=require('path');
const cookie=require('cookie-parser');

const authrouter=require('./routes/landingroute')
const profileRouter=require('./routes/profileRoute')
const uploadRouter=require('./routes/uploadroute')
const { url } = require('inspector');
const { urlencoded } = require('express');

const app=express();
app.use(cookie());
app.use(express.json())
app.listen(3000);

app.use(urlencoded());
app.set('view engine','ejs')
app.use(express.static(path.join(__dirname,'public')));

app.use('/',authrouter);
app.use('/',profileRouter);
app.use('/uploadnotes',uploadRouter);
