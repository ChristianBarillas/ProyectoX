// ESSENTIAL COMPONENT ABOUT REACT
import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "../navigation/Navbar";

// LOGIN
import SignUp from "../login/SignUp";

//PAGES 
import Home from "../../pages/Home";
import Intro from "../../pages/Intro";
import Catalogue from "../../pages/Catalogue";
import Somos from "../../pages/Somos";
import Contact from "../../pages/Contact";



const Dashboard = () => {


    return(
        <div>

<BrowserRouter>
<Navbar/>

<Routes>
  

  <Route path="/" element={<Home/>}/>
  <Route path="/services" element={<Catalogue/>}/>
  <Route path="/about" element={<Somos/>}/>
  <Route path="/Contact" element={<Contact/>}/>
  <Route path="/register" element={<SignUp/>}/>
  

</Routes>

</BrowserRouter>



        </div>
    )
}

export default Dashboard


