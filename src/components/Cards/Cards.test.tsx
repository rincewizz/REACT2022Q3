import React from 'react';
import { render, screen } from '@testing-library/react';
import CardsList from './CardsList';
import Card from './Card';
import cards from '../../data/cards.json';
import '@testing-library/jest-dom/extend-expect';

describe('CardsList', () => {
  it('should render the CardsList', () => {
    render(<CardsList cards={cards} />);
    const cardsList = screen.getByTestId('cards-list');

    expect(cardsList).toBeInTheDocument();
  });

  it('should render all cards', () => {
    render(<CardsList cards={cards} />);
    const count = cards.length;

    expect(screen.getAllByTestId('card')).toHaveLength(count);
  });
});

describe('Card', () => {
  it('should render the Card image', () => {
    render(<Card {...cards[0]} />);
    const image = screen.getByTestId('card-image');

    expect(image).toBeInTheDocument();
  });
});
