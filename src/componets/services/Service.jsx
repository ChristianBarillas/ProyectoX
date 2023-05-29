import React from 'react'
import SoftwareImg from '/src/assets/img/software.jpg'
import HardwareImg from '/src/assets/img/hardware.jpg'
import ConsultoriaImg from '/src/assets/img/consultoria.jpg'
import IMG1 from '/src/assets/img/animation7.svg'
import IMG2 from '/src/assets/img/animation8.svg'
import IMG3 from '/src/assets/img/animation9.svg'
import { Link } from 'react-router-dom'





const Service =()=>{

  return (

    <div>


 {/* Header  */}
    <header id="header" className="ex-header ">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Servicios</h1>
                </div>    {/* end of col  */}
            </div>{/* end of row  */}
        </div>  {/* end of container */}
    </header> 
    {/* end of ex-header */}
     {/* end of header */}

{/* Services  */}
    <div id="services" className="cards-2 ">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title">CATALOGO</div>
                    <h2>Encuentra aquí lo que buscas<br/></h2>
                </div> 
                {/* end of col */}
            </div> 
            {/* end of row  */}
            <div className="row">
                <div className="col-lg-12">
                    
                     {/* Card  */}
                    <div className="card">
                        <div className="card-image">
                            <img className="img-fluid" src={SoftwareImg} alt="alternative"/>
                        </div>



                        <div className="card-body">
                            <h3 className="card-title">Software</h3>
                            <p>Aumenta eficiencia y productividad</p>
                            <ul className="list-unstyled li-space-lg">
                                <li className="media">
                                    <i className="fas fa-square"></i>
                                    <div className="media-body">CRM +plus</div>
                                </li>
                                <li className="media">
                                    <i className="fas fa-square"></i>
                                    <div className="media-body">Control de Inventario iflow</div>
                                </li>
                                 <li className="media">
                                    <i className="fas fa-square"></i>
                                    <div className="media-body">WMS OnTime</div>
                                </li>
                                    <li className="media">
                                    <i className="fas fa-square"></i>
                                    <div className="media-body">App Domicilios</div>
                                </li>

                                
                            </ul>
                            <p className="price">Conoce <span> Más</span></p>
                        </div>

{/* implementando imagenes que aparecen encima */}

                        <div className="card-image-hover">
                             <img src={IMG1} alt="Card image hover" className="card-image-hover-img" />
                        </div>
                       
                        <div className="button-container">
                            <Link className="btn-solid-reg page-scroll" to="/Contact" >CONTACTO</Link>
                        </div> {/* end of button-container  */}

                    </div>  {/* end of card  */}



                    {/* Card  */}
                    <div className="card">
                        <div className="card-image">
                            <img className="img-fluid" src={HardwareImg} alt="alternative"/>
                        </div>

  {/* implementacion de texto sobreexpuesto en imagenes con hover */}
                      

                        <div className="card-body">
                            <h3 className="card-title">Hardware</h3>
                            <p>Contamos con las mejores marcas en equipo informático</p>
                            <ul className="list-unstyled li-space-lg">
                                <li className="media">
                                    <i className="fas fa-square"></i>
                                    <div className="media-body">Computadoras</div>
                                </li>
                                <li className="media">
                                    <i className="fas fa-square"></i>
                                    <div className="media-body">Routers</div>
                                </li>
                                <li className="media">
                                    <i className="fas fa-square"></i>
                                    <div className="media-body">UPS</div>
                                </li>
                                <li className="media">
                                    <i className="fas fa-square"></i>
                                    <div className="media-body">Consumibles</div>
                                </li>
                            </ul>
                            <p className="price">Conoce <span>Más</span></p>
                        </div>

{/* implementando imagenes que aparecen encima */}
                        <div className="card-image-hover">
                             <img src={IMG2} alt="Card image hover" className="card-image-hover-img" />
                        </div>

                        <div className="button-container">
                            <Link className="btn-solid-reg page-scroll" to="/Contact">CONTACTO</Link>
                        </div> 
                        {/* end of button-container  */}
                    </div>
                    {/* end of card  */}




                    {/* Card  */}
                    <div className="card">
                        <div className="card-image">
                            <img className="img-fluid" src={ConsultoriaImg} alt="alternative"/>
                        </div>
                        
               
                        <div className="card-body">
                            <h3 className="card-title">Servicios</h3>
                            <p>Servicios profesionales de alto nivel</p>
                            <ul className="list-unstyled li-space-lg">
                                <li className="media">
                                    <i className="fas fa-square"></i>
                                    <div className="media-body">Coaching</div>
                                </li>
                                <li className="media">
                                    <i className="fas fa-square"></i>
                                    <div className="media-body">Asesoria</div>
                                </li>
                                <li className="media">
                                    <i className="fas fa-square"></i>
                                    <div className="media-body">Outsourcing</div>
                                </li>
                                <li className="media">
                                    <i className="fas fa-square"></i>
                                    <div className="media-body">Proyectos</div>
                                </li>
                            </ul>
                            <p className="price">Conoce <span>Más</span></p>
                        </div>


{/* implementando imagenes que aparecen encima */}

                        <div className="card-image-hover">
                             <img src={IMG3} alt="Card image hover" className="card-image-hover-img" />
                        </div>

                        <div className="button-container">
                            <Link className="btn-solid-reg page-scroll" to="/Contact" >CONTACTO</Link>
                        </div> 
                         {/* end of button-container  */}
                    </div>
                    {/* end of card  */}

                </div> 
                {/* end of col  */}
            </div> 
             {/* end of row  */}
        </div> 
        {/* end of container  */}
    </div> 
    {/* end of cards-2 */}

    



    </div>
  )
}
export default Service