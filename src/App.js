
import React from 'react'
import Header from './Components/Header'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Packages from './Pages/Packages'
import Contact from './Pages/Contact'
import Admin from './Pages/Admin'
import About_US from './Pages/About_Us'
import ViewPackage from './Pages/ViewPackage'
import TourPlanner from './Pages/TourPlanner'

export default function App() {
  return (
    <BrowserRouter>
     <Header/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/Package" element={<Packages/>}/>
      <Route path="/About_US" element={<About_US/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/Admin" element={<Admin/>}/>
      <Route path="/View/:id" element={<ViewPackage/>}/>
      <Route path="/TourPlanner" element={<TourPlanner/>}/>
     </Routes>
    </BrowserRouter>
  
  )

}
