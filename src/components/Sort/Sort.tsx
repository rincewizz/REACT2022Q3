import React, { useEffect, useState } from 'react';
import styles from './Sort.module.scss';
import { SortType } from 'app/types';
import { SortProps } from './types';
import { useDispatch, useSelector } from 'react-redux';
import { selectHome, setSortType, setSortOrder } from 'app/homeSlice';

export function Sort(props: SortProps) {
  const { sortType, sortOrder } = useSelector(selectHome);
  const dispatch = useDispatch();

  const [currentSortClass, setCurrentSortClass] = useState('');

  function clickHandle(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, value: SortType) {
    e.preventDefault();
    if (value === sortType) {
      dispatch(setSortOrder(sortOrder !== 'asc' ? 'asc' : 'desc'));
    } else {
      dispatch(setSortOrder('asc'));
    }
    dispatch(setSortType(value));
    props.setIsSortClick(true);
  }

  useEffect(() => {
    setCurrentSortClass(`${styles['sort__link--current']} ${styles['sort__link--' + sortOrder]}`);
  }, [sortType, sortOrder]);

  return (
    <div className={styles.sort}>
      <span className={styles.sort__text}>Sort by:</span>
      <ul className={styles.sort__list}>
        {props.sortList.map((el) => (
          <li className={styles.sort__item} key={el}>
            <a
              href="#"
              className={`${styles.sort__link} ${sortType === el ? currentSortClass : ''}`}
              onClick={(e) => clickHandle(e, el)}
            >
              {el}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
