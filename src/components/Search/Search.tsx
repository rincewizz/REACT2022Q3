import React, { FormEvent } from 'react';
import { SearchProps, SearchState } from 'types/types';
import styles from './Search.module.scss';

export default class Search extends React.Component<SearchProps, SearchState> {
  private searchInput: React.RefObject<HTMLInputElement>;
  private searchForm: React.RefObject<HTMLFormElement>;

  constructor(props: SearchProps) {
    super(props);
    const searchQuery = localStorage.getItem('searchQuery');
    this.state = { searchQuery: searchQuery ? searchQuery : '' };
    this.handleInput = this.handleInput.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.searchInput = React.createRef<HTMLInputElement>();
    this.searchForm = React.createRef<HTMLFormElement>();
  }

  handleInput(e: FormEvent<HTMLInputElement>) {
    const { value } = e.target as HTMLInputElement;
    this.setState({ searchQuery: value });
  }
  componentDidMount(): void {
    window.addEventListener('beforeunload', this.componentWillUnmount.bind(this));
    this.props.search(this.state.searchQuery);
    (this.searchInput.current as HTMLInputElement).value = this.state.searchQuery;
  }
  componentWillUnmount() {
    localStorage.setItem('searchQuery', this.state.searchQuery);
  }

  handleSearch(e: FormEvent) {
    e.preventDefault();
    this.props.search(this.state.searchQuery);
    localStorage.setItem('searchQuery', this.state.searchQuery);
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
          data-testid="search-input"
          onInput={(e) => {
            this.handleInput(e);
          }}
          placeholder="Search..."
          type="search"
          ref={this.searchInput}
        />
        <button type="submit" className={styles.search__button} data-testid="search-button">
          🔎
        </button>
      </form>
    );
  }
}
