import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom/extend-expect';
import { renderWithRouter } from 'tests/utils/renderWithRouter';

describe('React Router', () => {
  it('should render the home page', () => {
    renderWithRouter(<App />);

    const homePageTitle = screen.getByTestId('home-page');
    expect(homePageTitle.textContent).toMatch('Home');
    expect(homePageTitle).toBeInTheDocument();
  });

  it('should navigate to the about page', () => {
    renderWithRouter(<App />);

    fireEvent.click(screen.getByTestId('about-link'));
    expect(screen.getByTestId('about-page')).toBeInTheDocument();
  });

  it('should navigate to error page if route is wrong', () => {
    renderWithRouter(<App />, { route: '/wrong-page' });

    expect(screen.getByText(/Page not found/i)).toBeInTheDocument();
  });
});
