import React from "react";
import { Link,NavLink } from "react-router-dom";
import logo from "/src/assets/img/logo.png"


const Navbar = ()=>{

    return(

        <div>
<header className="nav_main ">
  
  

    <nav className="navbar navbar-expand-md navbar-dark navbar-custom fixed-top">
     
      

        
        <Link className="navbar-brand logo-image" to="/"><img src={logo} alt="alternative" height= "100px" width="100px"/></Link>
        
       
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-awesome fas fa-bars"></span>
            <span className="navbar-toggler-awesome fas fa-times"></span>
        </button>
  

        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <NavLink className="nav-link page-scroll" to="/">HOME <span className="sr-only"></span></NavLink>
                </li>
             
                <li className="nav-item">
                    <NavLink className="nav-link page-scroll" to="/services">CATALOGO</NavLink>
              
                </li>
                 <li className="nav-item">
                    <NavLink className="nav-link page-scroll" to="/about">SOMOS</NavLink>
                </li>
       
                <li className="nav-item dropdown">
                    <NavLink className="nav-link dropdown-toggle page-scroll" to="/contact" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">CONTACTO</NavLink>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <NavLink className="dropdown-item" to="/terms-conditions"><span className="item-text">CONDICIONES</span></NavLink>
                        <div className="dropdown-items-divide-hr"></div>
                        <NavLink className="dropdown-item" to="/privacy-policy"><span className="item-text">POLITICA</span></NavLink>
                    </div>
                </li>
          

               
            </ul>
            {/* <span className="nav-item social-icons"> <span className="fa-stack">  <a href="https://www.facebook.com/gosensv" target="_blank" rel="noopener" > <span className="hexagon"></span><FontAwesomeIcon icon={faCoffee} /> </a> </span>  <span className="fa-stack"> <a href="https://twitter.com/gosensv" target="_blank" rel="noopener">  <FontAwesomeIcon icon={faCoffee} />  </a> </span> </span></div>  */}




            <span className="nav-item social-icons"> <span className="fa-stack"> <a href="https://www.facebook.com/gosensv" target="_blank" rel="noopener"> <span className="hexagon"></span> <em className="fab fa-facebook-f fa-stack-1x"></em> </a> </span>  <span className="fa-stack"> <a href="https://twitter.com/gosensv" target="_blank" rel="noopener">  <em className="fab fa-twitter fa-stack-1x"></em> </a> </span> </span></div> 
    </nav> 
 


    </header>


        </div>
    )
}

 export default Navbar
