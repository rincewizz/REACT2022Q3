import React from 'react';
import { render, screen } from '@testing-library/react';
import CardsList from './CardsList';
import Card from './Card';
import cards from '../../data/cards.json';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';

describe('CardsList', () => {
  it('should render the CardsList', () => {
    render(
      <BrowserRouter>
        <CardsList cards={cards} />
      </BrowserRouter>
    );
    const cardsList = screen.getByTestId('cards-list');

    expect(cardsList).toBeInTheDocument();
  });

  it('should render all cards', () => {
    render(
      <BrowserRouter>
        <CardsList cards={cards} />
      </BrowserRouter>
    );
    const count = cards.length;

    expect(screen.getAllByTestId('card')).toHaveLength(count);
  });
});

describe('Card', () => {
  it('should render the Card image', () => {
    render(
      <BrowserRouter>
        <Card {...cards[0]} />
      </BrowserRouter>
    );
    const image = screen.getByTestId('card-image');

    expect(image).toBeInTheDocument();
  });
});
