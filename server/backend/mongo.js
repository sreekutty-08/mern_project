const mongoose = require("mongoose")
const newSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    username:{
        type:String,
        
    },
    firstname:{
        type:String,
       
    },
    middlename:{
        type:String,
        
    },
    lastname:{
        type:String,
        
    },
    confirm:{
        type:String,
      
    },
})

const data = mongoose.model("datas",newSchema)

module.exports=data