import React from 'react'
import SoftwareImg from '/src/assets/img/software.jpg'
import HardwareImg from '/src/assets/img/hardware.jpg'
import ConsultoriaImg from '/src/assets/img/consultoria.jpg'





const Service =()=>{

  return (

    <div>


 {/* Header  */}
    <header id="header" class="ex-header">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1>Services</h1>
                </div>    {/* end of col  */}
            </div>{/* end of row  */}
        </div>  {/* end of container */}
    </header> 
    {/* end of ex-header */}
     {/* end of header */}

{/* Services  */}
    <div id="services" class="cards-2">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title">CATALOGO</div>
                    <h2>Encuentra aquí lo que buscas<br/></h2>
                </div> 
                {/* end of col */}
            </div> 
            {/* end of row  */}
            <div class="row">
                <div class="col-lg-12">
                    
                     {/* Card  */}
                    <div class="card">
                        <div class="card-image">
                            <img class="img-fluid" src={SoftwareImg} alt="alternative"/>
                        </div>
                        <div class="card-body">
                            <h3 class="card-title">Software</h3>
                            <p>Aumenta eficiencia y productividad</p>
                            <ul class="list-unstyled li-space-lg">
                                <li class="media">
                                    <i class="fas fa-square"></i>
                                    <div class="media-body">CRM +plus</div>
                                </li>
                                <li class="media">
                                    <i class="fas fa-square"></i>
                                    <div class="media-body">Control de Inventario iflow</div>
                                </li>
                                 <li class="media">
                                    <i class="fas fa-square"></i>
                                    <div class="media-body">WMS OnTime</div>
                                </li>
                                    <li class="media">
                                    <i class="fas fa-square"></i>
                                    <div class="media-body">App Domicilios</div>
                                </li>
                            </ul>
                            <p class="price">Conoce <span> Más</span></p>
                        </div>
                        <div class="button-container">
                            <a class="btn-solid-reg page-scroll" href="#contact">CONTACTO</a>
                        </div> 
                        {/* end of button-container  */}
                    </div>
                     {/* end of card  */}

                    {/* Card  */}
                    <div class="card">
                        <div class="card-image">
                            <img class="img-fluid" src={HardwareImg} alt="alternative"/>
                        </div>
                        <div class="card-body">
                            <h3 class="card-title">Hardware</h3>
                            <p>Contamos con las mejores marcas en equipo informático</p>
                            <ul class="list-unstyled li-space-lg">
                                <li class="media">
                                    <i class="fas fa-square"></i>
                                    <div class="media-body">Computadoras</div>
                                </li>
                                <li class="media">
                                    <i class="fas fa-square"></i>
                                    <div class="media-body">Routers</div>
                                </li>
                                <li class="media">
                                    <i class="fas fa-square"></i>
                                    <div class="media-body">UPS</div>
                                </li>
                                <li class="media">
                                    <i class="fas fa-square"></i>
                                    <div class="media-body">Consumibles</div>
                                </li>
                            </ul>
                            <p class="price">Conoce <span>Más</span></p>
                        </div>
                        <div class="button-container">
                            <a class="btn-solid-reg page-scroll" href="#callMe">CONTACTO</a>
                        </div> 
                        {/* end of button-container  */}
                    </div>
                    {/* end of card  */}

                    {/* Card  */}
                    <div class="card">
                        <div class="card-image">
                            <img class="img-fluid" src={ConsultoriaImg} alt="alternative"/>
                        </div>
                        <div class="card-body">
                            <h3 class="card-title">Servicios</h3>
                            <p>Servicios profesionales de alto nivel</p>
                            <ul class="list-unstyled li-space-lg">
                                <li class="media">
                                    <i class="fas fa-square"></i>
                                    <div class="media-body">Coaching</div>
                                </li>
                                <li class="media">
                                    <i class="fas fa-square"></i>
                                    <div class="media-body">Asesoria</div>
                                </li>
                                <li class="media">
                                    <i class="fas fa-square"></i>
                                    <div class="media-body">Outsourcing</div>
                                </li>
                                <li class="media">
                                    <i class="fas fa-square"></i>
                                    <div class="media-body">Proyectos</div>
                                </li>
                            </ul>
                            <p class="price">Conoce <span>Más</span></p>
                        </div>
                        <div class="button-container">
                            <a class="btn-solid-reg page-scroll" href="#contact">CONTACTO</a>
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