require('dotenv').config()
const express=require ("express");
const cors = require('cors')
const mongoose=require("mongoose")
const wordSchema = require("./models/wordSchema.js")
const path = require("path")



const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Get back all the Posts
app.get("/words",async (req,res)=>{
    try{
  const words= await wordSchema.find()
  res.json(words)
    }catch(err){
      res.json({Message:err})
    }
  })
  // Get Words
  app.get("/wordlist",async (req,res)=>{
    try{
  const words= await wordSchema.find()
  res.json(words)
    }catch(err){
      res.json({Message:err})
    }
  })




  // Submits a post

  app.post("/words",async(req,res)=>{
    console.log(req.body);
    const word = new wordSchema(req.body)
    word.save()
    
    res.status(201).json({
      status:"success",
      data:{
        word
      }
    })
  
  })




  // DB CONNECTION
  mongoose.connect(
    process.env.DB_CONNECTION,
    async(err)=>{
        if(err) throw err;
        console.log("conncted to db")
    }
)
  

  


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













if (process.env.NODE_ENV === "production") {
  
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
// Error Handling 
app.use((err,req,res,next)=>{
  res.status(err.status || 500).send({success:false,message:err.message})
})


const port =process.env.PORT || 5000

app.listen(port, () => {
  console.log("====================================");
  console.log("Server start with port: " + port);
  console.log("====================================");
});