import React from 'react'
import negocioImg from '/src/assets/img/consultoria.jpg'




const Intro1 =()=>{

  return (

    <div>
 <div id="intro" class="basic-1">
        <div class="container">
            <div class="row">
                <div class="col-lg-5">
                    <div class="text-container">
                        <div class="section-title">INTRO</div>
                        <h2>LLEVA TU NEGOCIO AL SIGUIENTE NIVEL</h2>
                        <p>Marca la diferencia en la relación con tus clientes.
                        Aumenta la productividad, ventas o mejora tus servicios.</p>
                        <p class="testimonial-text">"Seremos el aliado ideal que necesitas. Tecnología y servicios profesionales especialmente diseñados para acompañar tus planes de mejora contínua."</p>
                        <div class="testimonial-author">Javier Ramírez - CEO</div>
                    </div> 
                </div> 
                <div class="col-lg-7">
                    <div class="image-container">
                        <img class="img-fluid" src={negocioImg} alt=""/>
                    </div> 
                </div> 
            </div> 
        </div> 
    </div> 
   



    </div>
  )
}
export default Intro1