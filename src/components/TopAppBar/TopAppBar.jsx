import styles from './topAppBar.module.css';
import Modal from '../Modal/Modal';
import { useState } from 'react';
import Sort from '../Sort/Sort';
import Search from '../Search/Search';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId } from '../../redux/slice/filterSlice';
// import useNavigatorOnline from 'use-navigator-online';
import NetworkError from '../NetworkError/NetworkError';
import NetworkLoading from '../NetworkLoading/NetworkLoading';

const categories = {
  all: 'Все',
  android: 'Android',
  ios: 'iOS',
  design: 'Designers',
  management: 'Managers',
  qa: 'QA',
  back_office: 'Back Office',
  frontend: 'Frontend',
  hr: 'HR',
  pr: 'PR',
  backend: 'Backend',
  support: 'Техподдержка',
  analytics: 'Аналитика',
};

function TopAppBar({ searchValue, isLoading, isOnline }) {
  // для видимости модального окна
  const [isOpen, setIsOpen] = useState(false);
  // фильтрация категорий
  const categoryId = useSelector((state) => state.filter.categoryId);
  const dispatch = useDispatch();

  const onClickCategory = (value) => {
    dispatch(setCategoryId(value));
  };

  return (
    <nav className={styles.navigation}>
      {isLoading ? (
        <NetworkLoading />
      ) : !isOnline ? (
        <NetworkError />
      ) : (
        <>
          <h1 className={styles.title}>Поиск</h1>
          <Search searchValue={searchValue} setIsOpen={setIsOpen} />
        </>
      )}
      <div className={styles.categories}>
        <ul className={styles.list}>
          {Object.entries(categories).map(([key, category]) => (
            <li
              key={key}
              className={`${styles.item} ${categoryId === key ? `${styles.active}` : ` `}`}
              onClick={() => onClickCategory(key)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <Sort setIsOpen={setIsOpen} />
      </Modal>
    </nav>
  );
}

export default TopAppBar;
