import React, { FormEvent, useContext, useEffect } from 'react';
import { SearchProps } from './types';
import styles from './Search.module.scss';
import { AppContext } from 'appState/appContext';

export default function Search(props: SearchProps) {
  const { setSearchQueryString, searchQueryString, searchResults } = useContext(AppContext);

  function handleChange(e: FormEvent<HTMLInputElement>) {
    const { value } = e.target as HTMLInputElement;
    localStorage.setItem('searchQuery', value);
    setSearchQueryString(value);
  }

  useEffect(() => {
    const searchQuery = localStorage.getItem('searchQuery') ?? '';

    if (searchQuery !== searchQueryString || (searchQuery === '' && !searchResults.length)) {
      if (props.setIsSearchClick) {
        props.setIsSearchClick(true);
      }

      setSearchQueryString(searchQuery);
    }
  }, []);

  function handleSearch(e: FormEvent) {
    e.preventDefault();
    if (props.setIsSearchClick) {
      props.setIsSearchClick(true);
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
