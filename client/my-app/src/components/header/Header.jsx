import React from 'react'
import {useNavigate}  from "react-router-dom"





const  Header = () => {

  let nav= useNavigate()

  return (
   
    
    <div >
        <nav className="navbar navbar-expand-lg bg-secondary" >
       
  <div className="container"  >
 
    <a className="navbar-brand" onClick={()=>nav("/model")} >MODELS</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">    
          <a className="nav-link active" aria-current="page" onClick={()=>nav("/brand")} >BRAND</a>
        </li>
        <li className="nav-item">
          <a className="nav-link"  onClick={()=>nav("/ownership")}>OWNERSHIP</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          ACCOUNT DETAILS
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item"  onClick={()=>nav("/login")}>LOGIN </a></li>
            <li><a className="dropdown-item"  onClick={()=>nav("/admin")}>ADMIN</a></li>
            
            <li><a className="dropdown-item"  onClick={()=>nav("/wishlist")}>WISHL LIST</a></li>
           
            
          </ul>
        </li>
        
      </ul> 
     
      
      
      
    </div>
  </div>
</nav>
        
      
    </div>
    
 
   
   
  )
}

export default Header
