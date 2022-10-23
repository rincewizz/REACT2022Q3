import React, { FormEvent } from 'react';
import { SearchProps } from './types';
import styles from './Search.module.scss';

export default class Search extends React.Component<SearchProps> {
  private searchInput: React.RefObject<HTMLInputElement>;
  private searchForm: React.RefObject<HTMLFormElement>;

  constructor(props: SearchProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.searchInput = React.createRef<HTMLInputElement>();
    this.searchForm = React.createRef<HTMLFormElement>();
  }

  handleChange(e: FormEvent<HTMLInputElement>) {
    const { value } = e.target as HTMLInputElement;
    localStorage.setItem('searchQuery', value);
  }
  componentDidMount(): void {
    const searchQuery = localStorage.getItem('searchQuery') ?? '';
    (this.searchInput.current as HTMLInputElement).value = searchQuery;
    this.props.search(searchQuery);
  }
  componentWillUnmount() {
    const { value } = this.searchInput.current as HTMLInputElement;
    localStorage.setItem('searchQuery', value);
  }

  handleSearch(e: FormEvent) {
    e.preventDefault();
    const { value } = this.searchInput.current as HTMLInputElement;
    this.props.search(value);
  }

  render() {
    return (
      <form
        className={styles.search}
        data-testid="search"
        ref={this.searchForm}
        onSubmit={this.handleSearch}
      >
        <input
          className={styles.search__input}
          onInput={(e) => {
            this.handleChange(e);
          }}
          placeholder="Search..."
          type="search"
          ref={this.searchInput}
          data-testid="search-input"
        />
        <button type="submit" className={styles.search__button} data-testid="search-button">
          🔎
        </button>
      </form>
    );
  }
}
