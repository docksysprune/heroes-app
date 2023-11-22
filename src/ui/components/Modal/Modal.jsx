import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import modalStyles from './Modal.module.css';

const Modal = ({ isOpen, onClose }) => {
  const modalRoot = document.getElementById('modal-root');

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Evitar scroll en el body cuando el modal está abierto
      document.addEventListener('keydown', handleEscape);
    } else {
      document.body.style.overflow = ''; // Restaurar scroll en el body cuando el modal se cierra
      document.removeEventListener('keydown', handleEscape);
    }

    return () => {
      document.body.style.overflow = ''; // Asegurar que el scroll se restaure si el componente se desmonta
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      console.log('Modal is opened');
    } else {
      console.log('Modal is closed');
    }
  }, [isOpen]);

  const modalClassName = isOpen ? `${modalStyles.modalOverlay} ${modalStyles.open}` : modalStyles.modalOverlay;

  return isOpen
    ? ReactDOM.createPortal(
        <div className={modalClassName} onClick={onClose}>
          <div className={modalStyles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={modalStyles.closeButton} onClick={onClose}>
              x
            </button>
            <h2>What is heroes app?</h2>
            <p>This is the app for visualizing your favorite DC & Marvel characters.</p>
          </div>
        </div>,
        modalRoot
      )
    : null;
};

export default Modal;
