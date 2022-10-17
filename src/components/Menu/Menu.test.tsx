import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import App from '../../App';
import '@testing-library/jest-dom/extend-expect';
import { renderWithRouter } from 'tests/utils/renderWithRouter';

describe('Menu', () => {
  it('should render the menu', () => {
    renderWithRouter(<App />);
    const homeLink = screen.getByTestId('home-link');
    const aboutLink = screen.getByTestId('about-link');

    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
  });

  it('show active home link ', () => {
    renderWithRouter(<App />);
    const homeLink = screen.getByTestId('home-link');
    fireEvent.click(screen.getByTestId('home-link'));
    expect(homeLink).toHaveClass('menu__link--active');
  });

  it('show active about link ', () => {
    renderWithRouter(<App />);
    const aboutLink = screen.getByTestId('about-link');
    fireEvent.click(screen.getByTestId('about-link'));
    expect(aboutLink).toHaveClass('menu__link--active');
  });
});
