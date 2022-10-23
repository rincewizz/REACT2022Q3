import React from 'react';
import { CardListProp } from './types';
import Card from './Card';
import Notification from 'components/Notification/Notification';
import styles from './Cards.module.scss';
import { v4 as uuidv4 } from 'uuid';

export default class CardsList extends React.Component<CardListProp> {
  render() {
    return (
      <>
        {this.props.cards.length ? (
          <div className={styles.cards} data-testid="cards-list">
            {this.props.cards.map((card) => (
              <Card
                key={card.id || card._id || uuidv4()}
                img={this.props.placeholder}
                {...card}
                openModal={this.props.openModal}
              />
            ))}
          </div>
        ) : (
          <Notification type="message">nothing found</Notification>
        )}
      </>
    );
  }
}
