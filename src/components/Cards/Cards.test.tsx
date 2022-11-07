import React from 'react';
import { screen } from '@testing-library/react';
import CardsList from './CardsList';
import Card from './Card';
import cards from '../../data/cards.json';
import '@testing-library/jest-dom/extend-expect';
import { renderWithRouter } from 'tests/utils/renderWithRouter';

describe('CardsList', () => {
  it('should render the CardsList', () => {
    renderWithRouter(<CardsList cards={cards} />);

    const cardsList = screen.getByTestId('cards-list');

    expect(cardsList).toBeInTheDocument();
  });

  it('should render all cards', () => {
    renderWithRouter(<CardsList cards={cards} />);
    const count = cards.length;

    expect(screen.getAllByTestId('card')).toHaveLength(count);
  });
});

describe('Card', () => {
  it('should render the Card image', () => {
    renderWithRouter(<Card {...cards[0]} />);
    const image = screen.getByTestId('card-image');

    expect(image).toBeInTheDocument();
  });
});
