const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser");
const db = require("./config/db")

const app = express()
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}));
app.use(cors())

// app.get("/aaa",(req,res)=>{
//     console.log("yes");
//     res.send("hi")
// })

const userRouter = require('./router/userRouter')
const port=6001
app.listen(port,()=>{
    console.log("server started in port",port);
})

db(()=>{
    try {
        console.log("database connected successfully");
    } catch (error) {
        console.log("db not connected = ", error);
    }
})


app.use('/',userRouter)
// app.use('/admin',adminRouter)

// const express = require("express")
// const collection = require("./mongo")
// const cors = require("cors")
// let bodyParser = require("body-parser")
// const app = express()
// // app.use(bodyparser())
// app.use(express.json());
// app.use(bodyParser.json());
// app.use(express.urlencoded({ extended: true }))
// app.use(cors())
// const userrouter = require('./routers/userRouter');
// // const adminrouter = require('./router/adminRouter');
// app.use('/',userrouter);
// // app.use('/admin',adminrouter);



// app.listen(4000,()=>{
//     console.log("port connected");
// })