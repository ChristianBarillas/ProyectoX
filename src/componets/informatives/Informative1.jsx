import React from 'react'
import aboutImg from '/src/assets/img/about1.jpg'





const Informative1 = () =>{

    return(


        <div>


 {/* Header  */}
 <header id="header" class="ex-header">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1>Conoce Nuestro Trabajo</h1>
                </div>    {/* end of col  */}
            </div>{/* end of row  */}
        </div>  {/* end of container */}
    </header> 
    {/* end of ex-header */}
     {/* end of header */}

 {/* About  */}
    <div id="about" class="counter">
        <div class="container">
            <div class="row">
                <div class="col-lg-5 col-xl-6">
                    <div class="image-container">
                        <img class="img-fluid" src={aboutImg} alt="alternative"/>
                    </div> 
                     {/* end of image-container  */}
                </div> 
                {/* end of col  */}
                <div class="col-lg-7 col-xl-6">
                    <div class="text-container">
                        <div class="section-title">SOMOS</div>
                        <h2>Apasionados en lo que hacemos</h2>
                        <p>Nuestro objetivo es proporcionarte productos y servicios de calidad, en el momento justo y acorde a tus metas de crecimiento.</p>
                        <ul class="list-unstyled li-space-lg">
                            <li class="media">
                                <i class="fas fa-square"></i>
                                <div class="media-body">Creamos impactos positivos en tus proyectos</div>
                            </li>
                            <li class="media">
                                <i class="fas fa-square"></i>
                                <div class="media-body">Seremos el aliado perfecto de tu empresa</div>
                            </li>
                        </ul>

                         {/* Counter  */}
                        <div id="counter">
                            <div class="cell">
                                <div class="counter-value number-count" data-count="24">1</div>
                                <div class="counter-info">Horas<br/>al día</div>
                            </div>
                            <div class="cell">
                                <div class="counter-value number-count" data-count="7">1</div>
                                <div class="counter-info">Días<br/>por semana</div>
                            </div>
                            <div class="cell">
                                <div class="counter-value number-count" data-count="365">1</div>
                                <div class="counter-info">Días<br/>al año</div>
                            </div>
                        </div>
                         {/* end of counter  */}

                    </div>  {/* end of text-container    */}
                </div>  {/* end of col  */}
            </div>   {/* end of row  */}
        </div>   {/* end of container  */}
    </div> {/* end of counter  */}
     {/* end of about  */}

                </div>
    )
}


export default Informative1
