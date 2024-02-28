import { useParams } from 'react-router-dom';
import styles from './ProfileUser.module.css';
import favoriteIcon from '../../image/favorite.svg';
import phoneIcon from '../../image/phone-alt.svg';
import { useSelector } from 'react-redux';
import UsersNotFound from '../UsersNotFound/UsersNotFound';
import { Link } from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/ru';

function ProfileUser() {
  // предаем параметр из path
  const { idUser } = useParams();
  const items = useSelector((state) => state.users.items);
  console.log(items);
  const user = items.find((user) => user.id === idUser);
  if (!user) {
    return <UsersNotFound />;
  }

  const phoneNumber = user.phone;
  const formattedPhoneNumber = phoneNumber
    .replace(/[^\d]/g, '')
    .replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, '+$1 ($2) $3 $4 $5');

  return (
    <section className={styles.profile}>
      <div className={styles.profile__block}>
        <Link to={'/'}>
          <button type="button" className={styles.profile__button}></button>
        </Link>

        <div className={styles.profile__wrapper}>
          <img
            src={user.avatarUrl}
            alt="Аватарка пользователя"
            className={styles.profile__avatar}
          />
          <h2 className={styles.profile__title}>
            {user.firstName} {user.lastName}
            <span className={styles.profile__tag}>{user.userTag}</span>
          </h2>
          <p className={styles.profile__subtitle}>{user.position}</p>
        </div>
      </div>
      <div className={styles.profile__info}>
        <div className={styles.info__block}>
          <img className={styles.info__icon} src={favoriteIcon} alt="Иконка избранного" />
          <div className={styles.info__wrapper}>
            <p className={styles.info__birthday}>{moment(user.birthday).format('DD MMMM YYYY')}</p>
            <p className={styles.info__age}>{moment(user.birthday).fromNow(true)}</p>
          </div>
        </div>
        <div className={styles.info__line}></div>
        <div className={styles.info__block}>
          <img className={styles.info__icon} src={phoneIcon} alt="Иконка телефона" />
          <p>
            <a className={styles.info__phone} href="tel:+79999009090">
              {formattedPhoneNumber}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default ProfileUser;
