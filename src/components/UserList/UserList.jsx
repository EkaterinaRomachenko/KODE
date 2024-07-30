import styles from './userList.module.css';
import { Link } from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/ru';
import { useSelector } from 'react-redux';

function UserList({ avatarUrl, firstName, lastName, userTag, position, birthday, id }) {
  const sort = useSelector((state) => state.filter.checkedSort);

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
          {sort === 'data-birth' && (
            <p className={styles.birthday}>{moment(birthday).format('DD MMM')}</p>
          )}
        </div>
      </li>
    </>
  );
}

export default UserList;
