const mongoose=require("mongoose")
// Creating a schema
const WordSchema=mongoose.Schema({
  name:{
    type:String,

  },
  meaning:{
    type:String,
    
  },
 explanition:{
    type:String,
 
  },
  englishWord:{
    type:String,

  },
  time : { type : Date, default: Date.now }
  
})
module.exports=mongoose.model("WorldList",WordSchema)
