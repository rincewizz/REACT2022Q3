import React from 'react';
import cards from '../../data/cards.json';
import Card from './Card';
import styles from './Cards.module.scss';

export default class CardsList extends React.Component {
  render() {
    return (
      <div className={styles.cards} data-testid="cards-list">
        {cards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    );
  }
}
