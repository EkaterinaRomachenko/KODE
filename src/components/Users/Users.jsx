import { useSelector } from 'react-redux';
import UserList from '../UserList/UserList';
import styles from './users.module.css';
import Skeleton from '../Skeleton/Skeleton';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import UsersNotFound from '../UsersNotFound/UsersNotFound';
import { useMemo } from 'react';

// работники , у которых день рождения прошел
function pastBirthdays(items) {
  const today = new Date();

  return items.filter((user) => {
    const userBirthday = new Date(user.birthday);
    // Сравниваем текущий год с годом рождения
    userBirthday.setFullYear(today.getFullYear());

    return userBirthday < today;
  });
}

// работники , у которых день рождения еще не прошел
function upcomingBirthdays(items) {
  const today = new Date();

  return items.filter((user) => {
    const userBirthday = new Date(user.birthday);
    userBirthday.setFullYear(today.getFullYear());

    return userBirthday >= today;
  });
}

function Users({ items }) {
  const { status } = useSelector((state) => state.users.status);
  const sort = useSelector((state) => state.filter.checkedSort);
  const currentYear = new Date().getFullYear();

  // чтобы не было повторной переработки при каждом рендере
  const upcoming = useMemo(() => upcomingBirthdays(items), [items]);
  const past = useMemo(() => pastBirthdays(items), [items]);

  if (status === 'error') {
    return <ErrorMessage />;
  }

  if (status === 'loading') {
    return [...new Array(12)].map((_, index) => <Skeleton key={index} />);
  }

  return (
    <div className={styles.users}>
      {sort === 'alphabet' ? (
        <ul>
          {items.length === 0 && <UsersNotFound />}
          {items.map((user) => (
            <UserList key={user.id} {...user} />
          ))}
        </ul>
      ) : (
        <>
          <ul>
            {upcoming.length === 0 && <UsersNotFound />}
            {upcoming.map((user) => (
              <UserList key={user.id} {...user} />
            ))}
          </ul>
          {past.length > 0 && (
            <div className={styles.underline__wrapper}>
              <div className={styles.underline}>
                <div className={styles.underline__line} />
                <p className={styles.underline__year}>{currentYear + 1}</p>
                <div className={styles.underline__line} />
              </div>
              <ul>
                {past.map((user) => (
                  <UserList key={user.id} {...user} />
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Users;
