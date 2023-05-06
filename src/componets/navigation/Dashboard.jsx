import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "../navigation/Navbar";
import Home from "../../pages/Home";
import About from "../../pages/About";
import SignUp from "../login/SignUp";
import Books from "../../pages/Books";
import ContactU from "../../pages/ContactUs";



const Dashboard = () => {


    return(
        <div>

<BrowserRouter>
<Navbar/>

<Routes>
  

  <Route path="/" element={<Home/>}/>
  <Route path="/intro" element={<Intro/>}/>
  <Route path="/Contact" element={<ContactU/>}/>
  <Route path="/about" element={<SignUp/>}/>
  

</Routes>

</BrowserRouter>



        </div>
    )
}

export default Dashboard


