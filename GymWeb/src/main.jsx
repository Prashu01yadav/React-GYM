import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,
  RouterProvider,}
  from "react-router-dom";
import App from './App.jsx'
import './index.css'
// import Bgimage from './Components/Bgimage.jsx'
import Blog from './Components/Blog.jsx'
import Registration from './Components/Registration.jsx'
import Offers from './Components/Offers.jsx'
import Gallery from './Components/Gallery.jsx'
import Membership from './Components/Membership.jsx'
import Bgimage from './Components/Bgimage.jsx';

const router= createBrowserRouter([
  {
    path:"",
    element:<App/>,
    children:[
      {
        path:"Blog",
        element:<Blog/>
        
      },
      {
        path:"/",
        element:<Bgimage/>
        
      },
      {
        path:"Gallery",
        element:<Gallery/>
        
      },
      {
        path:"Registration",
        element:<Registration/>
        
      },
      {
        path:"Offers",
        element:<Offers/>
        
      },
      {
        path:"Membership",
        element:<Membership/>
        
      },
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
