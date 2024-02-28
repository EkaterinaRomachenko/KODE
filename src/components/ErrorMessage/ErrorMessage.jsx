import styles from './errorMessage.module.css';
import error from '../../image/flying-saucer.jpg';

function ErrorMessage() {
  return (
    <div className={styles.error}>
      <img className={styles.error__img} src={error} alt="Эмоджи летающей тарелки" />
      <div className={styles.error__wrapper}>
        <h2 className={styles.error__title}>Какой-то сверхразум все сломал</h2>
        <p className={styles.error__subtitle}>Постараемся быстро починить</p>
        <button className={styles.error__button}>
          <span className={styles.error__text}>Попробовать снова</span>
        </button>
      </div>
    </div>
  );
}

export default ErrorMessage;
