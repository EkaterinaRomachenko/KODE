import styles from './sort.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setCheckedSort } from '../../redux/slice/filterSlice';

function Sort({setIsOpen}) {
  const sort = useSelector((state) => state.filter.checkedSort);
  const dispatch = useDispatch();
  const chengeSortValue = (e) => {
    dispatch(setCheckedSort(e.target.value));
    setIsOpen(false)
  };

  return (
    <>
      <h2 className={styles.title}>Cортировка</h2>
      <div className={styles.form}>
        <label className={styles.content} htmlFor="alphabet">
          <input
            type="radio"
            id="alphabet"
            className={styles.input}
            name="sort"
            value="alphabet"
            onChange={chengeSortValue}
            checked={sort === 'alphabet'}
          />
          <span
            className={` ${sort === 'alphabet' ? `${styles.icon_active}` : `${styles.icon}`}`}
          ></span>
          <span className={styles.text}>По алфавиту</span>
        </label>
        <label className={styles.content} htmlFor="data-birth">
          <input
            type="radio"
            id="data-birth"
            className={styles.input}
            name="sort"
            value="data-birth"
            onChange={chengeSortValue}
            checked={sort === 'data-birth'}
          />
          <span
            className={`${styles.icon} ${
              sort === 'data-birth' ? `${styles.icon_active}` : `${styles.icon}`
            }`}
          ></span>
          <span className={styles.text}>По дню рождения</span>
        </label>
      </div>
    </>
  );
}

export default Sort;
