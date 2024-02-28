import styles from './app.module.css';
import '../../vendor/normalize.css';
import Home from '../../Pages/Home';
import ProfileUser from '../ProfileUser/ProfileUser';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../../redux/slice/usersSlice';

function App() {
  
  const categoryId = useSelector((state) => state.filter.categoryId);
  const dispatch = useDispatch();

  useEffect(() => {
    const category = categoryId ? `${categoryId}` : 'all';
    const options = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', Prefer: `code=200, example=${category} ` },
    };
    const getFetchUsers = async () => {
      dispatch(fetchUsers({ options }));
    };
    getFetchUsers();
  }, [categoryId, dispatch]);

  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:idUser" element={<ProfileUser/>} />
      </Routes>
    </div>
  );
}

export default App;
