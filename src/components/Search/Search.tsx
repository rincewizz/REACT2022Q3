import React, { FormEvent } from 'react';
import { SearchState } from 'types/types';
import styles from './Search.module.scss';

export default class Search extends React.Component<Record<string, unknown>, SearchState> {
  private searchInput = React.createRef<HTMLInputElement>();
  constructor(props: Record<string, unknown>) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.searchInput = React.createRef<HTMLInputElement>();
  }

  handleChange(e: FormEvent<HTMLInputElement>) {
    const { value } = e.target as HTMLInputElement;
    localStorage.setItem('searchQuery', value);
  }
  componentDidMount(): void {
    (this.searchInput.current as HTMLInputElement).value =
      localStorage.getItem('searchQuery') ?? '';
  }
  componentWillUnmount() {
    localStorage.setItem('searchQuery', localStorage.getItem('searchQuery') ?? '');
  }

  render() {
    return (
      <div className={styles.search} data-testid="search">
        <input
          className={styles.search__input}
          onChange={(e) => {
            this.handleChange(e);
          }}
          placeholder="Search..."
          type="text"
          ref={this.searchInput}
        />
      </div>
    );
  }
}
