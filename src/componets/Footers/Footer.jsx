import React from 'react'
import { Link, NavLink } from "react-router-dom";





const Footer = () =>{

    return(


        <div>

{/* Footer  */}
    <div class="footer">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="text-container about">
                        <h4>Gosén S&T</h4>
                        <p class="white">Un gran equipo de profesionales y las mejores marcas de fabricantes de tecnología a tu alcance, todo en el mismo lugar.</p>
                    </div> 
                    {/* end of text-container  */}
                </div>
                 {/* end of col  */}
                <div class="col-md-2">
                    <div class="text-container">
                        <h4>Links</h4>
                        <ul class="list-unstyled li-space-lg white">
                            <li>
                                <a class="white" href="#header">Home</a>
                            </li>
                            <li>
                                <a class="white" href="terms-conditions.html">Condiciones</a>
                            </li>
                            <li>
                                <a class="white" href="privacy-policy.html">Políticas</a>
                            </li>
                        </ul>
                    </div> 
                     {/* end of text-container  */}
                </div> 
                {/* end of col */}
                <div class="col-md-2">
                    <div class="text-container">
                        <h4>De Interés</h4>
                        <ul class="list-unstyled li-space-lg">
                            <li>
                                <a class="white" href="https://www.insaforp.org.sv/" target="_blank" rel="noopener">Insaforp</a>
                            </li>
                            <li>
                               <a class="white" href="https://learndigital.withgoogle.com/activate/courses"target="_blank" rel="noopener">Actívate</a>
                            </li>
                            <li class="media">
                                <a class="white" href="https://aprende.org/listado-cursos" target="_blank" rel="noopener">Aprende</a>
                            </li>
                        </ul>
                    </div> 
                     {/* end of text-container  */}
                </div>
                 {/* end of col  */}
                <div class="col-md-2">
                    <div class="text-container">
                        <h4>Partners</h4>
                        <ul class="list-unstyled li-space-lg">
                            <li>
                                <a class="white" href="https://www.mclogistica.com/" target="_blank" rel="noopener">MC Logística.com</a>
                            </li>
                            <li>
                                <a class="white" href="https://www.alianzamayorista.com" target="_blank" rel="noopener">AMSA</a>
                            </li>
                            <li>
                                <a class="white" href="https://www.soti.net/"target="_blank" rel="noopener" >SOTI</a>
                            </li>
                        </ul>
                    </div>  {/* end of text-container */}
                </div> {/* end of col  */}
            </div>   {/* end of row  */}
        </div>  {/* end of container  */}
    </div> {/* end of footer  */}
     {/* end of footer  */}


     {/* Copyright  */}
    <div class="copyright">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <p class="p-small">Copyright © 2022 
                    
                    Gosén S&T
                    
                    </p>
                </div>  {/* end of col  */}
            </div>  {/* enf of row  */}
        </div>  {/* end of container  */}
    </div>   {/* end of copyright  */}
    {/* end of copyright  */}
    

        </div>
    )
}


export default Footer
