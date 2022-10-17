import React from 'react';
import { CardListProp } from 'types/types';
import Card from './Card';
import Notification from 'components/Notification/Notification';
import styles from './Cards.module.scss';

export default class CardsList extends React.Component<CardListProp> {
  render() {
    return (
      <>
        {!this.props.cards.length && <Notification type="message">nothing found</Notification>}
        <div className={styles.cards} data-testid="cards-list">
          {this.props.cards.map((card, index) => (
            <Card key={card.id || card._id || index} img={this.props.placeholder} {...card} />
          ))}
        </div>
      </>
    );
  }
}
