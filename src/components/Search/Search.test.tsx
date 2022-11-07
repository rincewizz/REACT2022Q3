import React from 'react';
import { render, screen } from '@testing-library/react';
import Search from './Search';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import { LocalStorageMock } from 'tests/utils/localStorageMock';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'app/store';

describe('Search', () => {
  it('should render the search', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Search />
        </Provider>
      </BrowserRouter>
    );
    const search = screen.getByPlaceholderText('Search...');

    expect(search).toBeInTheDocument();
  });

  it('should render input value empty if Local storage empty', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Search />
        </Provider>
      </BrowserRouter>
    );

    expect(screen.getByDisplayValue('')).toBeInTheDocument();
  });

  it('should render input value if Local storage not empty', () => {
    localStorage = new LocalStorageMock();
    const { rerender } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Search />
        </Provider>
      </BrowserRouter>
    );

    userEvent.type(screen.getByDisplayValue(''), 'text');

    rerender(
      <BrowserRouter>
        <Provider store={store}>
          <Search />
        </Provider>
      </BrowserRouter>
    );

    expect(screen.getByDisplayValue('text')).toBeInTheDocument();
  });

  it('should save input value after reload page', async () => {
    localStorage = new LocalStorageMock();
    const { rerender } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Search />
        </Provider>
      </BrowserRouter>
    );
    const search = screen.getByTestId('search');

    userEvent.type(search, 'text');

    rerender(
      <BrowserRouter>
        <Provider store={store}>
          <Search />
        </Provider>
      </BrowserRouter>
    );

    expect(await screen.findByDisplayValue('text')).toBeInTheDocument();
  });
});
