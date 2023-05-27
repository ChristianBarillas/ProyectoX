import React from 'react'
import AnimatedText from '../animations/Animation'
import Modal from '../modals/Modal'


const HeadInfo=()=> {
  return (
    <div>


    <header id="header" className="header">
        <div className="header-content">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text-container">
                            <h1>BUSINESS  <AnimatedText/></h1>
                            <p className="p-heading p-large">Somos el aliado perfecto para el crecimiento de tu negocio, servicios profesionales, tecnología y más...</p>
                           <Modal/>
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