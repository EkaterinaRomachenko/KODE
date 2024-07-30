import React from 'react';
import styles from './search.module.css';
import searchIcon from '../../image/search.svg';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../redux/slice/filterSlice';

function Search({ searchValue, setIsOpen }) {
  const dispatch = useDispatch();

  function onChange(e) {
    dispatch(setSearchValue(e.target.value));
    console.log(e);
  }

  return (
    <form className={styles.search}>
      <img className={styles.searchIcon} src={searchIcon} alt="Иконка поиска" />
      <input
        type="text"
        value={searchValue}
        className={styles.searchInput}
        placeholder="Введи имя,тег,почту..."
        autoComplete="off"
        minLength="2"
        maxLength="200"
        onChange={onChange}
      />
      <button
        type="button"
        className={styles.searchIconList}
        onClick={() => setIsOpen(true)}
      ></button>
    </form>
  );
}

export default Search;
