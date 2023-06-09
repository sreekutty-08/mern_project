import React from 'react'
import Header from '../components/header/Header'

const BrandPage = () => {
  return (
    <div>
      <Header/>
     
      <header className='header'>
        <h1 className='text-center'>HISTORY</h1>
        <a href='/'>
          <img src='https://www.bugatti.com/fileadmin/_processed_/sei/p472/se-image-43156f2ff4c16c47070fb24cea9d6702.webp'></img>
        </a>
      
      </header>
      <h1 className='text-center'>BASED ON HISTORY</h1>
      
      <div className="container ">
      <div className='row'>
        <div className='col-sm-6 ' >
          <img src='https://www.bugatti.com/fileadmin/_processed_/sei/p472/se-image-093e75814bf41941c1c4712d10632bb9.webp'></img>
          
          <h4> CHRONICLES</h4>
          
        


        </div>
        <div className='col-sm-6 '>
          <img src='https://www.bugatti.com/fileadmin/_processed_/sei/p472/se-image-63db4da7a5ee4053d0d53f6d15fc11f4.webp'></img>
        
          <h5>MYTHS & ANECDOTES</h5> 
          

          
        </div>


        <div className='col-sm-6 '>
        <img src='https://www.bugatti.com/fileadmin/_processed_/sei/p472/se-image-5c20e080dbacfe24d93cd266e39b1102.webp'></img>
          <h5>HISTORIC MODELS</h5>
          
         
        </div>
        <div className='col-sm-5'>
          <img src='https://www.bugatti.com/fileadmin/_processed_/sei/p472/se-image-aa31f3b010787489edf0062baf8d5401.webp'></img>
          <h5>RACING</h5>
        
         
   
        
        </div>
      </div>
      
      
    </div>
      

    </div>
  )
}

export default BrandPage
