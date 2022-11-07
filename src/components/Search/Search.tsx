import React, { FormEvent, useEffect, useRef } from 'react';
import { SearchProps } from './types';
import styles from './Search.module.scss';

export default function Search({ search }: SearchProps) {
  const searchInput = useRef<HTMLInputElement>(null);
  const searchForm = useRef<HTMLFormElement>(null);

  function handleChange(e: FormEvent<HTMLInputElement>) {
    const { value } = e.target as HTMLInputElement;
    localStorage.setItem('searchQuery', value);
  }

  useEffect(() => {
    if (searchInput.current) {
      const searchQuery = localStorage.getItem('searchQuery') ?? '';
      searchInput.current.value = searchQuery;
      search(searchQuery);
    }
  }, []);

  useEffect(() => {
    const instance = searchInput.current;
    return () => {
      if (instance) {
        localStorage.setItem('searchQuery', instance?.value ?? '');
      }
    };
  }, []);

  function handleSearch(e: FormEvent) {
    e.preventDefault();
    if (searchInput.current?.value) {
      search(searchInput.current.value);
    }
  }

  return (
    <form className={styles.search} data-testid="search" ref={searchForm} onSubmit={handleSearch}>
      <input
        className={styles.search__input}
        data-testid="search-input"
        placeholder="Search..."
        type="search"
        ref={searchInput}
        onChange={handleChange}
      />
      <button type="submit" className={styles.search__button} data-testid="search-button">
        🔎
      </button>
    </form>
  );
}
