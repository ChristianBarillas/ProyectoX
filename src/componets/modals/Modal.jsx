import React from 'react'
import { useState } from 'react'
import ImgModal from '/src/assets/img/details-2-background2.jpg'
import { motion } from 'framer-motion'

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
        <motion.button
        whileHover={{scale:1.1}}
        whileTap={{scale:0.9}}
        className=' btn-solid-lg '
        onClick={handleOpenModal}

        >
          Descubre
        </motion.button>
          
          <section className={showModal ? 'modal modal--show' : 'modal'}>
            <div className="modal__container">
              <img src={ImgModal} className="modal__img"/>
              <h2 className="modal__title">Disfruta nuestros beneficios!</h2>
              <p className="modal__paragraph">¿Necesitas desarrollo de software a medida?
✔ Contactanos a nuestro Whatsapp (503) 7785 2155.</p>

<motion.button
        whileHover={{scale:1.1}}
        whileTap={{scale:0.9}}
        className='save-button btn-solid-lg page-scroll'
        onClick={handleCloseModal}

        >
          Entendido!
        </motion.button>
            </div>
          </section>
        </div>
      );
}






export default Modal
