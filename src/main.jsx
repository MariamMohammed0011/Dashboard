import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, createRoutesFromElements, Route,RouterProvider} from "react-router-dom"


const router=createBrowserRouter(
createRoutesFromElements(
  <Route path='/' element={<App/>}></Route>
)


)


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  
  </React.StrictMode>
);