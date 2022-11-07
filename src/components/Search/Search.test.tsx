import React from 'react';
import { screen } from '@testing-library/react';
import Search from './Search';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import { LocalStorageMock } from 'tests/utils/localStorageMock';
import { store } from 'app/store';
import { renderRouterProvider } from 'tests/utils/renderRouterProvider';

describe('Search', () => {
  it('should render the search', () => {
    renderRouterProvider(<Search />, {}, store);
    const search = screen.getByPlaceholderText('Search...');

    expect(search).toBeInTheDocument();
  });

  it('should render input value empty if Local storage empty', () => {
    renderRouterProvider(<Search />, {}, store);

    expect(screen.getByDisplayValue('')).toBeInTheDocument();
  });

  it('should render input value if Local storage not empty', () => {
    localStorage = new LocalStorageMock();
    const { rerender } = renderRouterProvider(<Search />, {}, store);

    userEvent.type(screen.getByDisplayValue(''), 'text');

    rerender(<Search />);

    expect(screen.getByDisplayValue('text')).toBeInTheDocument();
  });

  it('should save input value after reload page', async () => {
    localStorage = new LocalStorageMock();
    const { rerender } = renderRouterProvider(<Search />, {}, store);
    const search = screen.getByTestId('search');

    userEvent.type(search, 'text');

    rerender(<Search />);

    expect(await screen.findByDisplayValue('text')).toBeInTheDocument();
  });
});
