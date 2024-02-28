import styles from './modalOverlay.module.css';

function ModalOverlay({ onClose }) {
  return <div className={styles.overlay} onClick={onClose}></div>;
}
export default ModalOverlay;
