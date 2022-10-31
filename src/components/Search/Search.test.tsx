import React from 'react';
import { render, screen } from '@testing-library/react';
import Search from './Search';
import MainPage from 'pages/MainPage';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import { LocalStorageMock } from 'tests/utils/localStorageMock';
import { AppProvider } from 'appState/appContext';
import { BrowserRouter } from 'react-router-dom';

describe('Search', () => {
  const searchMock = jest.fn();

  it('should render the search', () => {
    render(<MainPage />);
    const search = screen.getByPlaceholderText('Search...');

    expect(search).toBeInTheDocument();
  });

  it('should render input value empty if Local storage empty', () => {
    render(<Search search={searchMock} />);

    expect(screen.getByDisplayValue('')).toBeInTheDocument();
  });

  it('should render input value if Local storage not empty', () => {
    localStorage = new LocalStorageMock();
    const { rerender } = render(
      <BrowserRouter>
        <AppProvider>
          <Search search={searchMock} />
        </AppProvider>
      </BrowserRouter>
    );

    userEvent.type(screen.getByDisplayValue(''), 'text');

    rerender(
      <BrowserRouter>
        <AppProvider>
          <Search search={searchMock} />
        </AppProvider>
      </BrowserRouter>
    );

    expect(screen.getByDisplayValue('text')).toBeInTheDocument();
  });

  it('should save input value after reload page', async () => {
    localStorage = new LocalStorageMock();
    const { rerender } = render(
      <BrowserRouter>
        <AppProvider>
          <Search search={searchMock} />
        </AppProvider>
      </BrowserRouter>
    );
    const search = screen.getByTestId('search');

    userEvent.type(search, 'text');

    rerender(
      <BrowserRouter>
        <AppProvider>
          <Search search={searchMock} />
        </AppProvider>
      </BrowserRouter>
    );

    expect(await screen.findByDisplayValue('text')).toBeInTheDocument();
  });
});
