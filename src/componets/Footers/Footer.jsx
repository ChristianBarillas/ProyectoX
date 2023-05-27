import React from 'react'

const Footer = () =>{

    return(


        <div>

{/* Footer  */}
    <div className="footer">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="text-container about">
                        <h4>Gosén S&T</h4>
                        <p className="white">Un gran equipo de profesionales y las mejores marcas de fabricantes de tecnología a tu alcance, todo en el mismo lugar.</p>
                    </div> 
                    {/* end of text-container  */}
                </div>
                 {/* end of col  */}
               
                <div className="col-md-2">
                    <div className="text-container">
                        <h4>De Interés</h4>
                        <ul className="list-unstyled li-space-lg">
                            <li>
                                <a className="white" href="https://www.insaforp.org.sv/" target="_blank" rel="noopener">Insaforp</a>
                            </li>
                            <li>
                               <a className="white" href="https://learndigital.withgoogle.com/activate/courses"target="_blank" rel="noopener">Actívate</a>
                            </li>
                            <li className="media">
                                <a className="white" href="https://aprende.org/listado-cursos" target="_blank" rel="noopener">Aprende</a>
                            </li>
                        </ul>
                    </div> 
                     {/* end of text-container  */}
                </div>
                 {/* end of col  */}
                <div className="col-md-2">
                    <div className="text-container">
                        <h4>Partners</h4>
                        <ul className="list-unstyled li-space-lg">
                            <li>
                                <a className="white" href="https://www.mclogistica.com/" target="_blank" rel="noopener">MC Logística.com</a>
                            </li>
                            <li>
                                <a className="white" href="https://www.alianzamayorista.com" target="_blank" rel="noopener">AMSA</a>
                            </li>
                            <li>
                                <a className="white" href="https://www.soti.net/"target="_blank" rel="noopener" >SOTI</a>
                            </li>
                        </ul>
                    </div>  {/* end of text-container */}
                </div> {/* end of col  */}
            </div>   {/* end of row  */}
        </div>  {/* end of container  */}
    </div> {/* end of footer  */}
     {/* end of footer  */}


     {/* Copyright  */}
    <div className="copyright">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <p className="p-small">Copyright © 2022 
                    
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
