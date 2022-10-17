import React from 'react';
import { render } from '@testing-library/react';
import Search from './Search';
import MainPage from 'pages/MainPage';
import userEvent from '@testing-library/user-event';

describe('Search', () => {
  class LocalStorageMock {
    private store: { [key: string]: string };
    public length = 0;
    constructor() {
      this.store = {};
    }
    getItem(key: string) {
      return this.store[key] || null;
    }
    setItem(key: string, value: string) {
      this.store[key] = String(value);
    }
    clear() {}
    key(index: number): string | null {
      return null;
    }
    removeItem(key: string): void {}
  }

  it('should render the search', () => {
    const { getByTestId } = render(<MainPage />);
    const search = getByTestId('search');

    expect(search).toBeInTheDocument();
  });

  it('should render input value empty if Local storage empty', () => {
    const { getByDisplayValue } = render(<Search search={() => {}} />);
    expect(getByDisplayValue('')).toBeInTheDocument();
  });

  it('should render input value if Local storage not empty', () => {
    localStorage = new LocalStorageMock();
    const { rerender, getByDisplayValue } = render(<Search search={() => {}} />);

    userEvent.type(getByDisplayValue(''), 'text');

    rerender(<Search search={() => {}} />);

    expect(getByDisplayValue('text')).toBeInTheDocument();
  });

  it('should save input value after reload page', () => {
    localStorage = new LocalStorageMock();
    const { rerender, getByDisplayValue, getByTestId } = render(<Search search={() => {}} />);
    const search = getByTestId('search');
    userEvent.type(search, 'text');

    dispatchEvent(new Event('beforeunload'));
    rerender(<Search search={() => {}} />);

    expect(getByDisplayValue('text')).toBeInTheDocument();
  });
});
