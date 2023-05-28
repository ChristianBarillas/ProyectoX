import React from 'react';
import ImgModal from '/src/assets/img/animation-design2.svg';
import { motion } from 'framer-motion';

const Modal = ({ showModal, setShowModal }) => {
  const handleCloseModal = () => {
    setShowModal(false);
  };

  if (!showModal) {
    return null; // No mostrar el modal si showModal es false
  }

  return (
    <section className="modal modal--show">
      <div className="modal__container">
        <img src={ImgModal} className="modal__img" alt="Modal Image" />
        <h2 className="modal__title">Formulario enviado con éxito</h2>
        <p className="modal__paragraph">
          Nuestro equipo se pondrá en contacto lo más pronto posible!
        </p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="save-button btn-solid-lg page-scroll"
          onClick={handleCloseModal}
        >
          Entendido!
        </motion.button>
      </div>
    </section>
  );
};

export default Modal;
