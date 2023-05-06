import React from "react";
import { Link } from "react-router-dom";
import Perfil from "../login/Perfil";
import SignUp from "../login/SignUp";
import SignOut from "../login/SignOut";
import Register from "../login/Register";

const Navbar = ()=>{

    return(

        <div>
<header className="nav_main ">
    <nav className="nav ">


<ul className="nav-menu nav-menu_visible ">



<li className="nav-menu-item"><Link className="nav-menu-link nav-link" to='/'>Home</Link></li>
<li className="nav-menu-item"><Link className="nav-menu-link nav-link" to='/books'>Books</Link></li>
<li className="nav-menu-item"><Link className="nav-menu-link nav-link" to='/Contact'>Contact Us</Link></li>



{/* <Register/> */}
   

</ul>





    </nav>



    </header>


        </div>
    )
}

 export default Navbar
