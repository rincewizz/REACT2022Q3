import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../../App';
import { BrowserRouter } from 'react-router-dom';

describe('Menu', () => {
  it('should render the menu', () => {
    const { container, getByTestId } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const homeLink = getByTestId('home-link');
    const aboutLink = getByTestId('about-link');

    expect(container).toContainElement(homeLink);
    expect(container).toContainElement(aboutLink);
  });

  it('show active link ', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const homeLink = getByTestId('home-link');
    const aboutLink = getByTestId('about-link');
    fireEvent.click(getByTestId('home-link'));
    expect(homeLink).toHaveClass('menu__link--active');
    fireEvent.click(getByTestId('about-link'));
    expect(aboutLink).toHaveClass('menu__link--active');
  });
});
