import React from 'react';
import { CardListProp } from './types';
import Card from './Card';
import Notification from 'components/Notification/Notification';
import styles from './Cards.module.scss';
import { v4 as uuidv4 } from 'uuid';

export default function CardsList(props: CardListProp) {
  return (
    <>
      {props.cards.length ? (
        <div className={styles.cards} data-testid="cards-list">
          {props.cards.map((card) => (
            <Card
              key={card.id || card._id || uuidv4()}
              img={props.placeholder}
              {...card}
              openModal={props.openModal}
            />
          ))}
        </div>
      ) : (
        <Notification type="message">nothing found</Notification>
      )}
    </>
  );
}
