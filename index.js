require('dotenv').config()
const express=require ("express");
const cors = require('cors')
const mongoose=require("mongoose")
const WordSchema = require("./models/wordSchema.js")
const path = require("path")


const app=express()
app.use(express.json())
app.use(cors())

app.use(express.static(path.join(__dirname,"build")))
app.get("/",(req,res)=>{
  res.sendFile(path.join(__dirname,"build","index.html"))
})


// Get back all the Posts
app.get("/words",async (req,res)=>{
    try{
  const words= await WordSchema.find()
  res.json(words)
    }catch(err){
      res.json({Message:err})
    }
  })
  // Submits a post
  
  app.post("/words",async (req,res)=>{
    // console.log(req.body);
    const word=new WordSchema({
      name:req.body.name,
      meaning:req.body.meaning,
      explanition:req.body.explanition
    });
    try{
  console.log(word);
     await word.save()
     res.send(word)
    } catch(err){
      res.json({message:err})
    }
  
  })


// Add headers
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', "*");

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});








// Connect to DB
mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true ,useUnifiedTopology: true } ,()=>{
    console.log("Connected to DB");
  })

app.get("/players",(req,res)=>{
    res.send(importData);
})


const port =process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`Server started on Port ${port}`);
})