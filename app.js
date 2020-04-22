const express= require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const session = require('express-session');

require("dotenv").config({path:'./config/keys.env'});

const userRoutes = require("./controllers/User");
const taskRoutes = require("./controllers/Task");
const generalRoutes = require("./controllers/General");
// const roomRoutes = require("./controllers/product");

const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static("public"));

app.engine("handlebars",exphbs());
app.set("view engine","handlebars");

app.use((req,res,next)=>{

    if(req.query.method=="PUT")
    {
        req.method="PUT"
    }

    else if(req.query.method=="DELETE")
    {
        req.method="DELETE"
    }

    next();
})

app.use(fileUpload());

app.use(session({
    secret: `${process.env.SECRET_KEY}`,
    resave: false,
    saveUninitialized: true
  }))

app.use((req,res,next)=>{

  
    res.locals.user= req.session.userInfo;

    next();
})

app.use("/",generalRoutes);
app.use("/user",userRoutes);
app.use("/task",taskRoutes);
// app.use("General/about", roomRoutes);
app.use("/",(req,res)=>{
    res.render("General/404");
});


mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log(`Connected to MongoDB Database`);
})
.catch(err=>console.log(`Error occured when connecting to database ${err}`));



const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Your Web Server has been connected`);
    
});



