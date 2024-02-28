import ReactDOM from 'react-dom';
import styles from './modal.module.css';
import ModalOverlay from './ModalOverlay/ModalOverlay';
import { useEffect } from 'react';

function Modal({ children, open, onClose }) {
  const modalRoot = document.getElementById('modals');
  // закрытие модального окна при клике на Esc
  useEffect(() => {
    const closeEscModal = (evt) => {
      if (evt.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', closeEscModal);
  });

  // если модальное окно не открыто, то возвращаем null
  if (!open) {
    return null;
  }

  return ReactDOM.createPortal(
    <>
      <ModalOverlay onClose={onClose} />
      <div className={styles.modal}>
        <span className={styles.iconClose} onClick={onClose}></span>
        <div>{children}</div>
      </div>
    </>,
    modalRoot,
  );
}

export default Modal;
