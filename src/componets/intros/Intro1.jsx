import React from 'react'
import negocioImg from '/src/assets/img/consultoria.jpg'





const Intro1 =()=>{

  return (

    <div className='scroll-hidden'>
 <div id="intro" className="basic-1 ">
        <div className="container">
            <div className="row">
                <div className="col-lg-5">
                    <div className="text-container">
                        <div className="section-title">INTRO</div>
                        <h2>LLEVA TU NEGOCIO AL SIGUIENTE NIVEL</h2>
                        <p>Marca la diferencia en la relación con tus clientes.
                        Aumenta la productividad, ventas o mejora tus servicios.</p>
                        <p className="testimonial-text">"Seremos el aliado ideal que necesitas. Tecnología y servicios profesionales especialmente diseñados para acompañar tus planes de mejora contínua."</p>
                        <div className="testimonial-author">Javier Ramírez - CEO</div>
                    </div> 
                </div> 
                <div className="col-lg-7">
                    <div className="image-container">
                        <img className="img-fluid" src={negocioImg} alt=""/>
                    </div> 
                </div> 
            </div> 
        </div> 
    </div> 
   



    </div>
  )
}
export default Intro1