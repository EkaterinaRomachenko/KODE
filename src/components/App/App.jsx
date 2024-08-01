import styles from './app.module.css';
import '../../vendor/normalize.css';
import Home from '../../Pages/Home';
import ProfileUser from '../ProfileUser/ProfileUser';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../../redux/slice/usersSlice';
import useNavigatorOnline from 'use-navigator-online';

function App() {
  const categoryId = useSelector((state) => state.filter.categoryId);
  const dispatch = useDispatch();
  const isOnline = useNavigatorOnline();
  const [isLoading, setIsLoading] = useState(false); 

  useEffect(() => {
    const category = categoryId ? `${categoryId}` : 'all';
    const options = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', Prefer: `code=200, example=${category} ` },
    };

    const getFetchUsers = async () => {
      dispatch(fetchUsers({ options }));
    };

    if (isOnline) {
      setIsLoading(true);
      getFetchUsers();
      setIsLoading(false);
    }
  }, [categoryId, dispatch, isOnline]);

  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<Home isOnline={isOnline} isLoading={isLoading} />} />
        <Route path="/profile/:idUser" element={<ProfileUser />} />
      </Routes>
    </div>
  );
}

export default App;
