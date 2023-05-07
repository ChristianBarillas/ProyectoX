import React from 'react'
import AnimatedText from '../animations/Animation'
import Modal1 from '../modals/modal1'

const HeadInfo=()=> {
  return (
    <div>


    <header id="header" class="header">
        <div class="header-content">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="text-container">
                            <h1>BUSINESS  <AnimatedText/></h1>
                            <p class="p-heading p-large">Somos el aliado perfecto para el crecimiento de tu negocio, servicios profesionales, tecnología y más...</p>
                            <button class="btn-solid-lg page-scroll " >Descubre</button>
                            <Modal1/>
                        </div>
                    </div> 
                </div> 
            </div> 
        </div> 
    </header> 
 

    </div>
  )
}


export default HeadInfo