import React from 'react'
import { useState } from 'react'
import ImgModal from '/src/assets/img/details-2-background2.jpg'

const Modal = ()=>{
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal =()=> {

        setShowModal(true);
    }

    const handleCloseModal =()=>{
        setShowModal(false);
    }

    return (
      <div>
          <button className='btn-solid-lg page-scroll' onClick={handleOpenModal}>Descubre</button>
    
          <section className={showModal ? 'modal modal--show' : 'modal'}>
            <div className="modal__container">
              <img src={ImgModal} className="modal__img"/>
              <h2 className="modal__title">Disfruta nuestros beneficios!</h2>
              <p className="modal__paragraph">¿Necesitas desarrollo de software a medida?
✔ Contactanos a nuestro Whatsapp (503) 7785 2155.</p>
              <a href="#" className="modal__close" onClick={handleCloseModal}>Entendido!</a>
            </div>
          </section>
        </div>
      );
}






export default Modal
