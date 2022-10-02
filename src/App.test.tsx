import React, { ReactElement } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const renderWithRouter = (ui: ReactElement, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return {
    ...render(ui, { wrapper: BrowserRouter }),
  };
};

describe('React Router', () => {
  it('should render the home page', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const homePageTitle = getByTestId('home-page');
    expect(homePageTitle.textContent).toMatch('Home');
    expect(homePageTitle).toBeInTheDocument();
  });

  it('should navigate to the about page', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    fireEvent.click(getByTestId('about-link'));
    expect(getByTestId('about-page')).toBeInTheDocument();
  });

  it('should navigate to error page if route is wrong', () => {
    renderWithRouter(<App />, { route: '/wrong-page' });

    expect(screen.getByText(/Page not found/i)).toBeInTheDocument();
  });
});
