import React, { FormEvent, useEffect, useRef } from 'react';
import { SearchProps } from './types';
import styles from './Search.module.scss';

export default function Search(props: SearchProps) {
  const searchInput = useRef<HTMLInputElement>(null);
  const searchForm = useRef<HTMLFormElement>(null);

  function saveToLocalStorage(query: string) {
    localStorage.setItem('searchQuery', query);
  }

  useEffect(() => {
    window.addEventListener('beforeunload', () => {
      if (searchInput.current) {
        saveToLocalStorage(searchInput.current?.value ?? '');
      }
    });
    if (searchInput.current) {
      searchInput.current.value = localStorage.getItem('searchQuery') ?? '';
      props.search(searchInput.current.value);
    }
  }, []);

  useEffect(() => {
    const instance = searchInput.current;
    return () => {
      if (instance) {
        saveToLocalStorage(instance?.value ?? '');
      }
    };
  }, []);

  function handleSearch(e: FormEvent) {
    e.preventDefault();
    if (searchInput.current?.value) {
      props.search(searchInput.current.value);
      saveToLocalStorage(searchInput.current.value);
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
      />
      <button type="submit" className={styles.search__button} data-testid="search-button">
        🔎
      </button>
    </form>
  );
}
