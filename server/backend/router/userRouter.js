// const express = require("express")
// const router = express.Router()


// const UserCredential = require("../model/userModal");

 

// router.get("/signup",function (req,res){
//     console.log(req);
//     res.send("signup")
// })  
// router.post("/signup",function (req,res){
//     console.log(req.body);
//     let {name,email,pass}=req.body
//     const newUser = new UserCredential({
//         name,
//         email,
//         password:pass
//     })
//     newUser.save()
//     res.send("signup")
// })  
// router.get("/getUser",async function (req,res){
//     // console.log(req);

//     const user = await UserCredential.find()
//     res.json(user)
// }) 

// module.exports = router
const express = require('express');
const router = express.Router();
const collection = require("../mongo");
const UserCredential = require('../mongo');
// const { default: Login } = require('../../../client/my-app/src/pages/accounts/users/Login');


router.post("/signup",async(req,res)=>{
    console.log("hi");
    console.log(req.body);
    const {email,password,username,confirm,firstname,middlename,lastname}=req.body
    console.log("k");
    let newUser=new UserCredential({
        email,
        password,
        firstname,
        username,
        middlename,
        lastname,
        confirm,

        
    })
    console.log("db",newUser);
    newUser.save()
    res.send(true)
    // var{firstname,middlename,lastname}=req.body
    // const data={
    //     email:email,
    //     password:password,
    //     username:username,
    //     confirm:confirm,
    //     firstname:firstname,
    //     middlename:middlename,
    //     lastname:lastname
    // }   

    // try{
    //     const check=await datas.findOne({email:email})
    //     console.log(check);

    //     if(check){
    //         res.send("exist")
    //     }
    //     else{
    //         res.send("notexist")
    //         // await datas.insertMany([data])
    //     }

    // }
    // catch(e){
    //     res.send("fail")
    // }

})
router.get("/getuser",async(req,res)=>{
    console.log("hhh");
    let users=await UserCredential.find({email:"hhhh"})
    console.log(users)
    res.json(users)
})

router.post("/check",async(req,res)=>{
    console.log(req.body);
    let email=req.body.email
    let pass = req.body.pass
    
    // let {email,password}=req.body
    let user =await UserCredential.findOne({email:email})
    console.log(user);
    // res.send(user)
    console.log("post pass=",pass);
    if(user){
        if(pass==user.password){
             res.send(true)
         }
         else{
             res.send(false)
         }       
     }
     else{
         res.send(false)
         
     }
 

   
})

// router.get("/getuser",async (req,res)=>{
//     console.log("hii");
//     res.send("hi")
// })



module.exports = router;