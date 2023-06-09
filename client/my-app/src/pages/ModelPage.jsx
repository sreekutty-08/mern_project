// import React from 'react'
// import Header from '../components/header/Header'

// function ModelPage() {
//   return (
//     <div>
//       <Header/>
      
//       <h1 className='text-center'>BUGATTI MODELS</h1>
//       <div className="container ">
//       <div className='row'>
//         <div className='col-sm-6 ' >
//           <img src='https://www.bugatti.com/fileadmin/_processed_/sei/p1/se-image-b775ae141ae4d7bf90fce20ac614840d.webp'></img>
//           <h4> W16 MISTRAL</h4>
          
        


//         </div>
//         <div className='col-sm-6 '>
//           <img src='https://www.bugatti.com/fileadmin/_processed_/sei/p1/se-image-a286eb70a6c011d0a9d0cea76330ace0.webp '></img>
//           <h5>ONE OFF MODELS</h5> 
          

          
//         </div>


//         <div className='col-sm-6 '>
//         <img src='https://www.bugatti.com/fileadmin/_processed_/sei/p1/se-image-b9ac49a08e59b99015672f02c9012fa5.webp'></img>
          
//           <h5>CHIRON MODELS</h5>
          
         
//         </div>
//         <div className='col-sm-5'>
//           <img src='https://www.bugatti.com/fileadmin/_processed_/sei/p1/se-image-5f2e1d15ce568a73feb1001bcf413519.webp'></img>
//           <h5>CONCEPT CARS</h5>
        
         
   
        
//         </div>
//       </div>
      
      
//     </div>
//     </div>
    
//   )
// }

// export default ModelPage

// import React from 'react'
// import App from '../App'

// const ModelPage = () => {
//   return (
//     <div>
//       <App/> 
      
//     </div>
//   )
// }

// export default ModelPage
// import React from 'react'


// import React, { useState, useEffect } from 'react';

// const ModelPage = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     // Fetch Bugatti car data from an API or database
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch('api/bugatti-cars');
//         const data = await response.json();
//         setProducts(data);
//       } catch (error) {
//         console.error('Error fetching Bugatti car data:', error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div>
//       <h1>Bugatti Cars</h1>
//       {products.map((product) => (
//         <div key={product.id}>
//           <h2>{product.name}</h2>
//           <p>{product.description}</p>
//           <p>Price: ${product.price}</p>
//           <img src={product.image} alt={product.name} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ModelPage
     
      


