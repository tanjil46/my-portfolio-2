import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roots from './components/Roots';
import Home from './components/Home';
import Aboutme from './components/Aboutme';
import Myprojets from './components/Myprojets';
import Contact from './components/Contact';
import Addprojects from './components/UPload/Addprojects';

const router=createBrowserRouter([

   {
    path:'/',
    element:<Roots></Roots>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/about',
        element:<Aboutme></Aboutme>
      },
      {
        path:'/mypro',
        element:<Myprojets></Myprojets>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      },
      {
        path:'/projects',
        element:<Addprojects></Addprojects>
      }
    ]
   }



])














ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="max-5xl bg-slate-900">
    <RouterProvider router={router}></RouterProvider>
    </div>
  
  </React.StrictMode>,
)
