// import React, { useState } from 'react'
// import Header from '../../components/header/Header';

// const LoginPage = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleUsernameChange = (event) => {
//     setUsername(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
   
//     if (username === 'admin' && password === 'password') {
     
//       setError('');
//       console.log('Login successful!');
     
//     } else {
     
//       setError('Invalid username or password');
//     }
//   };
//   return (
//     <div>
//     <h2>Login</h2>
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="username">Username:</label>
//         <input
//           type="text"
//           id="username"
//           value={username}
//           onChange={handleUsernameChange}
//         />
//       </div>
//       <div>
//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           id="password"
//           value={password}
//           onChange={handlePasswordChange}
//         />
//       </div>
//       <button type="submit">Login</button>
//     </form>
//     {error && <p>{error}</p>}
//   </div>
//   )
// }

// export default LoginPage
import React, { useState } from "react"
import axios from "axios"
import './Login.css';



import { useNavigate, Link } from "react-router-dom"


const Login = () => {
  const history = useNavigate();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  let obj = {
      email: email,
      pass: password
  }

  async function submit(e) {
      e.preventDefault();

      try {

        await axios.post("http://localhost:6001/check", obj)
        .then((res) => {
            console.log(res.data);
            if(res.data){

                history('/model')
            }
            else{
                alert("check usernam or password")
            }
        })
        .catch(e => {
            // alert("wrong details")
            console.log(e);
        })

}
catch (e) {
    console.log(e);

}
           

  }



  return (
    <div className="login">
       <h1>LOGIN TO BUGATTI</h1>
            <div className="loginbox">

                <form action="POST">
                    <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" name="mail" /><br /><br />
                    <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" name="pass" /><br /><br />
                    <input type="submit"   onClick={submit} />

                </form>

                <br />
                <Link to="/ForgotPass">Forgot Password</Link><br/>
                <button onClick={()=>history("/signup")}>NEW ACCOUNT</button>
                <br />
                {/* <Link to="/signup">Create a New Account</Link> */}
            </div>


      
    </div>
  )
}

export default Login

