import { useSelector } from 'react-redux';
import UserList from '../UserList/UserList';
import styles from './users.module.css';
import Skeleton from '../Skeleton/Skeleton';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import UsersNotFound from '../UsersNotFound/UsersNotFound';

function Users({ items }) {

  const { status } = useSelector((state) => state.users);
 
  return (
    <div className={styles.users}>
      {status === 'error' ? (
        <ErrorMessage />
      ) : status === 'loading' ? (
        [...new Array(12)].map((_, index) => <Skeleton key={index} />)
      ) : (
        <ul>
          {items.length === 0 && <UsersNotFound />}
          {items.map((users) => (
            <UserList key={users.id} {...users} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default Users;
