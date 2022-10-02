import React from 'react';
import { ICard } from 'types/types';
import styles from './Cards.module.scss';

export default class Card extends React.Component<ICard> {
  render() {
    const { img, title, desc } = this.props;
    return (
      <div className={styles.card} data-testid="card">
        <div className={styles.card__img}>
          <img src={img} alt={title} loading="lazy" data-testid="card-image" />
        </div>
        <div className={styles.card__content}>
          <div className={styles.card__title} data-testid="card-title">
            {title}
          </div>
          <div className={styles.card__desc} data-testid="card-description">
            {desc}
          </div>
        </div>
      </div>
    );
  }
}
