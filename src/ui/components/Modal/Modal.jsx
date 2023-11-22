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
      document.body.style.overflow = 'hidden'; // Will avoid the scroll on the body if the modal is open
      document.addEventListener('keydown', handleEscape);
    } else {
      document.body.style.overflow = ''; // Will restore the scroll in the body once the modal is closed
      document.removeEventListener('keydown', handleEscape);
    }

    return () => {
      document.body.style.overflow = ''; // Will make sure that the scroll is restored if the component gets unmounted
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
            <p>This app will allows you to visualize your favorite Marvel and DC characters.</p>
          </div>
        </div>,
        modalRoot
      )
    : null;
};

export default Modal;
