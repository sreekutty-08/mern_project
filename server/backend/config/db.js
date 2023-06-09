const mongoose=require("mongoose")

const db = async()=>{
    try {
        const datas= await mongoose.connect("mongodb://0.0.0.0:27017/datas",{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log(`mongodb connected succesfully`);
    } catch (error) {
        console.log("mongodb connection failed = ",error);
    }
   
}

module.exports = db