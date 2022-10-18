import React, { FormEvent } from 'react';
import { SearchState } from './types';
import styles from './Search.module.scss';

export default class Search extends React.Component<Record<string, unknown>, SearchState> {
  private searchInput = React.createRef<HTMLInputElement>();
  constructor(props: Record<string, unknown>) {
    super(props);
    const searchQuery = localStorage.getItem('searchQuery');
    this.state = { searchQuery: searchQuery ? searchQuery : '' };
    this.handleInput = this.handleInput.bind(this);
    this.searchInput = React.createRef<HTMLInputElement>();
  }

  handleInput(e: FormEvent<HTMLInputElement>) {
    const { value } = e.target as HTMLInputElement;
    this.setState({ searchQuery: value });
  }
  componentDidMount(): void {
    window.addEventListener('beforeunload', this.componentWillUnmount.bind(this));
    (this.searchInput.current as HTMLInputElement).value = this.state.searchQuery;
  }
  componentWillUnmount() {
    localStorage.setItem('searchQuery', this.state.searchQuery);
  }

  render() {
    return (
      <div className={styles.search} data-testid="search">
        <input
          className={styles.search__input}
          onInput={(e) => {
            this.handleInput(e);
          }}
          placeholder="Search..."
          type="text"
          ref={this.searchInput}
        />
      </div>
    );
  }
}
