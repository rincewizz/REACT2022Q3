import React, { useContext, useEffect, useState } from 'react';
import styles from './Pagination.module.scss';
import { AppContext } from 'appState/appContext';
import { Link } from 'react-router-dom';
import { PaginationProps } from './types';

export function Pagination(props: PaginationProps) {
  const { setPage, setPageLimit, pageLimit } = useContext(AppContext);
  const { pageCount, current } = props;
  const [pagesArray, setPagesArray] = useState<string[]>([]);

  useEffect(() => {
    setPagesArray(generatePagesArray());
  }, [pageCount, current]);

  function generatePagesArray(): string[] {
    const showCount = 6;
    let fromPage;
    let toPage;

    if (current - showCount / 2 < 1) {
      fromPage = 1;
      toPage = 1 + showCount;
    } else if (current + showCount / 2 > pageCount) {
      fromPage = pageCount - showCount > 0 ? pageCount - showCount : 1;
      toPage = pageCount;
    } else {
      fromPage = current - showCount / 2;
      toPage = current + showCount / 2;
    }

    if (toPage > pageCount) {
      toPage = pageCount;
    }

    const pagesArray = [];

    if (fromPage !== 1) {
      pagesArray.push('1');
    }
    if (fromPage > 2) {
      pagesArray.push('dots1');
    }
    for (let i = fromPage; i <= toPage; i++) {
      pagesArray.push(String(i));
    }
    if (toPage < pageCount - 1) {
      pagesArray.push('dots2');
    }
    if (toPage !== pageCount) {
      pagesArray.push(String(pageCount));
    }

    return pagesArray;
  }

  function clickHandle(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, value: number) {
    e.preventDefault();
    setPage(value);
    props.setIsPageClick(true);
  }

  function onchangeLimitHandle(e: React.ChangeEvent<HTMLSelectElement>) {
    props.setIsPageClick(true);
    setPageLimit(Number(e.target.value));
    setPage(1);
  }

  return (
    <div className={styles.pagination}>
      <div className={styles.pagination__pages}>
        {pagesArray.map((page) => {
          if (String(current) === page) {
            return (
              <span className={`${styles.page} ${styles['page--current']}`} key={page}>
                {page}
              </span>
            );
          } else if (page === 'dots1' || page === 'dots2') {
            return (
              <span className={`${styles.page} ${styles['page--dots']}`} key={page}>
                {'...'}
              </span>
            );
          } else {
            return (
              <Link
                className={styles.page}
                key={page}
                to={`page/${page}`}
                onClick={(e) => clickHandle(e, Number(page))}
              >
                {page}
              </Link>
            );
          }
        })}
      </div>
      <div className={styles.pagination__limit}>
        Limit:{' '}
        <select
          name="limit"
          className={`${styles['pagination__limit-control']}`}
          value={String(pageLimit)}
          onChange={onchangeLimitHandle}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>
    </div>
  );
}
