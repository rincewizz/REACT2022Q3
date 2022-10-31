import React, { useContext, useEffect, useState } from 'react';
import styles from './Sort.module.scss';
import { AppContext } from 'appState/appContext';
import { SortType } from 'appState/types';
import { SortProps } from './types';

export function Sort(props: SortProps) {
  const { setSortType, sortType, setSortOrder, sortOrder } = useContext(AppContext);

  const [currentSortClass, setCurrentSortClass] = useState('');

  function clickHandle(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, value: SortType) {
    e.preventDefault();
    if (value === sortType) {
      setSortOrder(sortOrder !== 'asc' ? 'asc' : 'desc');
    } else {
      setSortOrder('asc');
    }
    setSortType(value);
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
