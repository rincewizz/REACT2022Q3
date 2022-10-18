import React from 'react';
import { CardListProp } from './types';
import Card from './Card';
import styles from './Cards.module.scss';

export default class CardsList extends React.Component<CardListProp> {
  render() {
    return (
      <div className={styles.cards} data-testid="cards-list">
        {this.props.cards.map((card, index) => (
          <Card key={card.id || index} {...card} />
        ))}
      </div>
    );
  }
}
