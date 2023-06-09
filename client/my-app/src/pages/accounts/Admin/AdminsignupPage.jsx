import React, {useState } from "react";
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"

import './AdminsignupPage.css'


const AdminsignupPage = () => {
    const history=useNavigate();

    var [firstname,setFirstname]=useState('')
    var [middlename,setMiddlename]=useState('')
    var [lastname,setLastname]=useState('')
    const[username,setUsername]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const[confirm,setConfirm]=useState('')
    let obj = {
        email,
        password,
        username,
        firstname,
        middlename,
        lastname,
        confirm

    }
     function submit(e){
        console.log(obj);
        console.log(axios); 
        e.preventDefault();

        try{

             axios.post("http://localhost:6001/signup", obj )
            .then(res=>{
                history('/ownershipl')
                console.log("true");
            })
            .catch(e=>{
                // alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }


  
        
  return (
    
        <div className="signup">

            <h1>Hello,Signup</h1>
            <div className="signupbox">

            <form action="POST">
                <input type="firstname" onChange={(e) => { setFirstname(e.target.value) }} placeholder="First Name"  />
                <br/><br/>
                <input type="middlename" onChange={(e) => { setMiddlename(e.target.value) }} placeholder="Middle Name"  />
                <br/><br/>
                <input type="lastname" onChange={(e) => { setLastname(e.target.value) }} placeholder="Last Name"  />
                <br/><br/>
                <input type="username" onChange={(e) => { setUsername(e.target.value) }} placeholder="User Name"  />
                <br/><br/>
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
                <br/><br/>
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                <br/><br/>
                <input type="confirm" onChange={(e) => { setConfirm(e.target.value) }} placeholder="Confirm Password"  />
                <br/><br/>
                <input type="submit" onClick={submit} />

            </form>

            <br />
            <Link to="/Login">Login</Link>
            
            </div>
        </div>

   
  )
}

export default AdminsignupPage

