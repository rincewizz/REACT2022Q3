import React from 'react';
import { ICard } from './types';
import styles from './Cards.module.scss';
import { useNavigate } from 'react-router-dom';

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
        Content = () => <>{value === 'on' ? 'yes' : 'no'}</>;
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

export default function Card({
  _id,
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
  const navigate = useNavigate();

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

  function handleClick() {
    if (openModal) {
      openModal(generateContent(fullHomeInfo));
    } else {
      navigate(`/character/${_id}`);
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
