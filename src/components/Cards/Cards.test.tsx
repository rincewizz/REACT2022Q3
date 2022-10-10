import React from 'react';
import { render } from '@testing-library/react';
import CardsList from './CardsList';

import Card from './Card';
import cards from '../../data/cards.json';

describe('CardsList', () => {
  it('should render the CardsList', () => {
    const { getByTestId } = render(<CardsList cards={cards} />);
    const cardsList = getByTestId('cards-list');

    expect(cardsList).toBeInTheDocument();
  });

  it('should render all cards', () => {
    const { getAllByTestId } = render(<CardsList cards={cards} />);
    const count = cards.length;

    expect(getAllByTestId('card').length).toEqual(count);
  });
});

describe('Card', () => {
  it('should render the Card', () => {
    const { getByTestId } = render(<Card {...cards[0]} />);
    const image = getByTestId('card-image');
    const title = getByTestId('card-title');
    const description = getByTestId('card-description');

    expect(image).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });
});
