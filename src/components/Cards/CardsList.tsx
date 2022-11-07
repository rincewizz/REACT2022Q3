import React from 'react';
import { CardListProp } from './types';
import Card from './Card';
import Notification from 'components/Notification/Notification';
import styles from './Cards.module.scss';

export default function CardsList({ cards, placeholder, openModal }: CardListProp) {
  return (
    <>
      {cards.length ? (
        <div className={styles.cards} data-testid="cards-list">
          {cards.map((card) => (
            <Card key={card.id || card._id} img={placeholder} {...card} openModal={openModal} />
          ))}
        </div>
      ) : (
        <Notification type="message">nothing found</Notification>
      )}
    </>
  );
}
