import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ModelPage from './pages/ModelPage';


import {
  createBrowserRouter,
  RouterProvider,
   Router,
} from "react-router-dom";

import OwnershipPage from './pages/OwnershipPage';
import BrandPage from './pages/BrandPage';
import LoginPage from './pages/accounts/users/Login';
import SignupPage from './pages/accounts/users/Signup';
// import Home from './components/home/Home';
// import Admin from './pages/accounts/Admin/AdminPage';
import AdminPage from './pages/accounts/Admin/AdminPage';





const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
  },
  {
    path: "/model",
    element: <ModelPage/>,
  },
 
  {
    path: "/brand",
    element: <BrandPage/>,
  },
  {
    path: "/ownership",
    element: <OwnershipPage/>,
  },
  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: "/signup",
    element: <SignupPage/>,
  },
  {
    path: "/admin",
    element: <AdminPage/>,
  },

  
 



 
 
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
 
   
 
);


