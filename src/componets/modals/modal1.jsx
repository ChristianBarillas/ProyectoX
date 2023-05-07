import React from 'react'
import { useState } from 'react'

const Modal1 = ()=>{
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal =()=> {

        setShowModal(true);
    }

    const handleCloseModal =()=>{
        setShowModal(false);
    }

    return (
        <div>
          <button onClick={handleOpenModal}>Abrir modal</button>
    
          {showModal && (
            <section className="modal">
              <div className="modal__container">
                <img src="https://creaelsalvador.com/wp-content/uploads/2023/05/java.png" className="modal__img"/>
                <h2 className="modal__title">¡Bienvenido al sitio!</h2>
                <p className="modal__paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nobis nisi quibusdam doloremque expedita quae ipsam accusamus quisquam quas, culpa tempora. Veniam consectetur deleniti maxime.</p>
                <a href="#" className="modal__close" onClick={handleCloseModal}>Entendido!</a>
              </div>
            </section>
          )}
        </div>
      );
}






export default Modal1
