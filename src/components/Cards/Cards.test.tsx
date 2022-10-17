import React from 'react';
import { render, screen } from '@testing-library/react';
import CardsList from './CardsList';

import Card from './Card';
import cards from '../../data/cards.json';
import '@testing-library/jest-dom/extend-expect';

describe('CardsList', () => {
  it('should render the CardsList', () => {
    render(<CardsList />);
    const cardsList = screen.getByTestId('cards-list');

    expect(cardsList).toBeInTheDocument();
  });

  it('should render all cards', () => {
    render(<CardsList />);
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
  it('should render the Card title', () => {
    render(<Card {...cards[0]} />);
    const title = screen.getByTestId('card-title');

    expect(title).toBeInTheDocument();
  });

  it('should render the Card description', () => {
    render(<Card {...cards[0]} />);
    const description = screen.getByTestId('card-description');

    expect(description).toBeInTheDocument();
  });
});
