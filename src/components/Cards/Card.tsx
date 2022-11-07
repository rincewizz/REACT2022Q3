import React from 'react';
import { ICard } from './types';
import styles from './Cards.module.scss';

export default function Card({
  type,
  img,
  name,
  date,
  country,
  agree,
  receiveNotifications,
  race,
  gender,
  hair,
  birth,
  death,
  height,
  realm,
  spouse,
  wikiUrl,
  openModal,
}: ICard) {
  const fullHomeInfo = {
    name,
    race,
    gender,
    hair,
    birth,
    death,
    height,
    realm,
    spouse,
    wikiUrl,
  };
  const shortHomeInfo = {
    name,
    race,
  };
  const formInfo = {
    name,
    date,
    country,
    agree,
    receiveNotifications,
  };

  function generateContent(contentObj: ICard) {
    const contentArray = [];
    for (const [key, value] of Object.entries(contentObj)) {
      let Content;
      switch (key) {
        case 'wikiUrl':
          Content = () => (
            <a href={value} target="_blank" rel="noopener noreferrer">
              {value}
            </a>
          );
          break;
        case 'agree':
          Content = () => <>{agree === 'on' ? 'yes' : 'no'}</>;
          break;
        default:
          Content = () => <>{value}</>;
      }
      contentArray.push(
        <div key={key}>
          <b>{key[0].toUpperCase() + key.slice(1)}: </b> <Content />
        </div>
      );
    }
    return contentArray;
  }

  function handleClick() {
    if (openModal) {
      openModal(generateContent(fullHomeInfo));
    }
  }

  return (
    <>
      <div className={styles.card} data-testid="card" onClick={handleClick}>
        <div className={styles.card__img}>
          <img src={img} alt={name} loading="lazy" data-testid="card-image" />
        </div>
        <div className={styles.card__content}>
          {generateContent(type === 'home' ? shortHomeInfo : formInfo)}
        </div>
      </div>
    </>
  );
}
