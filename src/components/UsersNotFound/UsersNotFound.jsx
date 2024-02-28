import styles from './UsersNotFound.module.css';
import searchIconError from '../../image/search-erorr.svg';
function UsersNotFound() {
  return (
    <div className={styles.notFound}>
      <img src={searchIconError} alt="Иконка поиска" className={styles.notFound__img} />
      <h2 className={styles.notFound__title}>Мы никого не нашли</h2>
      <p className={styles.notFound__text}>Попробуй скорректировать запрос</p>
    </div>
  );
}

export default UsersNotFound;
