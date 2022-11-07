import React, { FormEvent, useEffect } from 'react';
import { SearchProps } from './types';
import styles from './Search.module.scss';
import { selectHome, setSearchQueryString } from 'app/homeSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function Search({ setIsSearchClick }: SearchProps) {
  const { searchQueryString, searchResults } = useSelector(selectHome);
  const dispatch = useDispatch();

  function handleChange(e: FormEvent<HTMLInputElement>) {
    const { value } = e.target as HTMLInputElement;
    localStorage.setItem('searchQuery', value);
    dispatch(setSearchQueryString(value));
  }

  useEffect(() => {
    const searchQuery = localStorage.getItem('searchQuery') ?? '';

    if (searchQuery !== searchQueryString || (searchQuery === '' && !searchResults.length)) {
      if (setIsSearchClick) {
        setIsSearchClick(true);
      }

      dispatch(setSearchQueryString(searchQuery));
    }
  }, []);

  function handleSearch(e: FormEvent) {
    e.preventDefault();
    if (setIsSearchClick) {
      setIsSearchClick(true);
    }
  }

  return (
    <form className={styles.search} data-testid="search" onSubmit={handleSearch}>
      <input
        className={styles.search__input}
        data-testid="search-input"
        placeholder="Search..."
        type="search"
        value={searchQueryString}
        onChange={handleChange}
      />
      <button type="submit" className={styles.search__button} data-testid="search-button">
        🔎
      </button>
    </form>
  );
}
