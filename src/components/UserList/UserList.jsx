import styles from './userList.module.css';
import { Link } from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/ru';

function UserList({ avatarUrl, firstName, lastName, userTag, position, birthday, id }) {
  return (
    <>
      <li className={styles.list}>
        <Link to={`/profile/${id}`}>
          <img className={styles.avatar} src={avatarUrl} alt="Аватарка пользователя" />
        </Link>
        <div className={styles.wrapper}>
          <div>
            <h2 className={styles.title}>
              {firstName} {lastName}
              <span className={styles.tag}>{userTag}</span>
            </h2>
            <p className={styles.subtitle}>{position}</p>
          </div>
          <p className={styles.birthday}>{moment(birthday).format('DD MMM')}</p>
        </div>
      </li>
      {/* <div className={styles.underline}>
        <div className={styles.underline__line}/>
        <p className={styles.underline__year}>2020</p>
        <div className={styles.underline__line} />
      </div> */}
    </>
  );
}

export default UserList;
