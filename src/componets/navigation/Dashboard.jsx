// ESSENTIAL COMPONENT ABOUT REACT
import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "../navigation/Navbar";

// LOGIN
import SignUp from "../login/SignUp";

//PAGES 
import Home from "../../pages/Home";
import Catalogue from "../../pages/Catalogue";
import Somos from "../../pages/Somos";
import Contact from "../../pages/Contact";
import TermsConditions from "../../pages/TermsConditions";
import PrivacyPolicy from "../../pages/PrivacyPolicy";
import NavbarScroll from "../scroll/NavbarScroll";



const Dashboard = () => {


    return(
        <div>

<BrowserRouter>
<Navbar/>
<NavbarScroll/>

<Routes>
  

  <Route path="/" element={<Home/>}/>
  <Route path="/services" element={<Catalogue/>}/>
  <Route path="/about" element={<Somos/>}/>
  <Route path="/Contact" element={<Contact/>}/>

  <Route path="/register" element={<SignUp/>}/>


  <Route path="/terms-conditions" element={<TermsConditions/>}/>
  <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
  

</Routes>

</BrowserRouter>



        </div>
    )
}

export default Dashboard


