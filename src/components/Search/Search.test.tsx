import React from 'react';
import { render, screen } from '@testing-library/react';
import Search from './Search';
import Main from 'pages/Main';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import { LocalStorageMock } from 'tests/utils/localStorageMock';

describe('Search', () => {
  it('should render the search', () => {
    render(<Main />);
    const search = screen.getByPlaceholderText('Search...');

    expect(search).toBeInTheDocument();
  });

  it('should render input value empty if Local storage empty', () => {
    render(<Search />);
    expect(screen.getByDisplayValue('')).toBeInTheDocument();
  });

  it('should render input value if Local storage not empty', () => {
    localStorage = new LocalStorageMock();
    const { rerender } = render(<Search />);

    userEvent.type(screen.getByDisplayValue(''), 'text');

    rerender(<Search />);

    expect(screen.getByDisplayValue('text')).toBeInTheDocument();
  });

  it('should save input value after reload page', () => {
    localStorage = new LocalStorageMock();
    const { rerender } = render(<Search />);
    const search = screen.getByTestId('search');
    userEvent.type(search, 'text');

    rerender(<Search />);

    expect(screen.getByDisplayValue('text')).toBeInTheDocument();
  });
});
