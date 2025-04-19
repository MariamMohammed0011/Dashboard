import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Dashboard from './page/dashboard/Dashboard.jsx'
import Team from './page/team/Team.jsx'
import Contacts from './page/contacts/Contacts.jsx'
import Invoices from './page/invoices/Invoices.jsx'
import Form from './page/form/Form.jsx'
import Calender from './page/calender/Calender.jsx'
import Faq from './page/faq/Faq.jsx'
import Bar from './page/bar/Bar.jsx'
import Pie from './page/pie/Pie.jsx'
import Line from './page/line/Line.jsx'
import Geography from './page/geography/Geography.jsx'
import {createBrowserRouter, createRoutesFromElements, Route,RouterProvider} from "react-router-dom"


const router=createBrowserRouter(
createRoutesFromElements(
  <Route path='/' element={<App/>}>

    <Route index element={<Dashboard/>}/>
    <Route path='team' element={<Team/>}/>
    <Route path='contacts' element={<Contacts/>}/>
    <Route path='invoices' element={<Invoices/>}/>
    <Route path='form' element={<Form/>}/>
    <Route path='calender' element={<Calender/>}/>
    <Route path='faq' element={<Faq/>}/>
    <Route path='bar' element={<Bar/>}/>
    <Route path='pie' element={<Pie/>}/>
    <Route path='line' element={<Line/>}/>
    <Route path='geography' element={<Geography/>}/>

  </Route>
)


)


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  
  </React.StrictMode>
);