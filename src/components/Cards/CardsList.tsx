import React from 'react';
import { CardListProp } from './types';
import Card from './Card';
import Notification from 'components/Notification/Notification';
import styles from './Cards.module.scss';

export default function CardsList(props: CardListProp) {
  return (
    <>
      {!props.cards.length && <Notification type="message">nothing found</Notification>}
      <div className={styles.cards} data-testid="cards-list">
        {props.cards.map((card, index) => (
          <Card key={card.id || card._id || index} img={props.placeholder} {...card} />
        ))}
      </div>
    </>
  );
}
