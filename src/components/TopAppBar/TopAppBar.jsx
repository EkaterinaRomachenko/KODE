import styles from './topAppBar.module.css';
import searchIcon from '../../image/search.svg';
import Modal from '../Modal/Modal';
import { useState } from 'react';
import Sort from '../Sort/Sort';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId, setSearchValue } from '../../redux/slice/filterSlice';

function TopAppBar({ searchValue }) {
  // для видимости модального окна
  const [isOpen, setIsOpen] = useState(false);
  // фильтрация категорий
  const categoryId = useSelector((state) => state.filter.categoryId);
  const dispatch = useDispatch();
  const onClickCategory = (value) => {
    dispatch(setCategoryId(value));
  };

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

  function onChange(e) {
    dispatch(setSearchValue(e.target.value));
    console.log(e)
  }

  return (
    <nav className={styles.navigation}>
      <h1 className={styles.title}>Поиск</h1>
      <form className={styles.search}>
        <img className={styles.searchIcon} src={searchIcon} alt="Иконка поиска" />
        <input
          type="text"
          value={searchValue}
          className={styles.input}
          placeholder="Введи имя,тег,почту..."
          autoComplete="off"
          minLength="2"
          maxLength="200"
          onChange={onChange}
        />
        <button type="button" className={styles.iconList} onClick={() => setIsOpen(true)}></button>
      </form>
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
