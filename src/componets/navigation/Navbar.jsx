import React from "react";
import { Link } from "react-router-dom";
import Perfil from "../login/Perfil";
import SignUp from "../login/SignUp";
import SignOut from "../login/SignOut";
import Register from "../login/Register";
import logo from "/src/assets/img/logo.png"

const Navbar = ()=>{

    return(

        <div>
<header classNameName="nav_main ">
  
  

    <nav className="navbar navbar-expand-md navbar-dark navbar-custom fixed-top">
     
      

        
        <a className="navbar-brand logo-image" href="index.html"><img src={logo} alt="alternative" height= "100px" width="100px"/></a>
        
       
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-awesome fas fa-bars"></span>
            <span className="navbar-toggler-awesome fas fa-times"></span>
        </button>
  

        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link page-scroll" to="/">HOME <span className="sr-only">(current)</span></Link>
                </li>
             
                <li className="nav-item">
                    <Link className="nav-link page-scroll" to="/services">CATALOGO</Link>
              
                </li>
                 <li className="nav-item">
                    <Link className="nav-link page-scroll" to="/about">SOMOS</Link>
                </li>
       
                <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle page-scroll" to="/contact" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">CONTACTO</Link>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link className="dropdown-item" to="/terms-conditions"><span className="item-text">CONDICIONES</span></Link>
                        <div className="dropdown-items-divide-hr"></div>
                        <Link className="dropdown-item" to="/privacy-policy"><span className="item-text">POLITICA</span></Link>
                    </div>
                </li>
          

               
            </ul>
            <span className="nav-item social-icons"> <span className="fa-stack"> <a href="https://www.facebook.com/gosensv"> <span className="hexagon"></span> <em className="fab fa-facebook-f fa-stack-1x"></em> </a> </span>  <span className="fa-stack"> <a href="https://twitter.com/gosensv"> <span className="hexagon"></span> <em className="fab fa-twitter fa-stack-1x"></em> </a> </span> </span></div> 
    </nav> 
 


    </header>


        </div>
    )
}

 export default Navbar
