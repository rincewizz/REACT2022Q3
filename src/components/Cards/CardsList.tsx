import React from 'react';
import { CardListProp } from './types';
import Card from './Card';
import styles from './Cards.module.scss';
import { v4 as uuidv4 } from 'uuid';

export default class CardsList extends React.Component<CardListProp> {
  render() {
    return (
      <div className={styles.cards} data-testid="cards-list">
        {this.props.cards.map((card) => (
          <Card key={card.id || uuidv4()} {...card} />
        ))}
      </div>
    );
  }
}
