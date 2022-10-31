import React from 'react';
import { ICard } from './types';
import styles from './Cards.module.scss';
import { useNavigate } from 'react-router-dom';

export default function Card(props: ICard) {
  const {
    img,
    title,
    desc,
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
    _id,
  } = props;

  const navigate = useNavigate();

  const modalContent = (
    <>
      <div>
        <b>Name: </b> {name}
      </div>
      <div>
        <b>Race: </b> {race}
      </div>
      <div>
        <b>Gender: </b> {gender}
      </div>
      <div>
        <b>Birth: </b> {birth}
      </div>
      <div>
        <b>Death: </b> {death}
      </div>
      <div>
        <b>Hair: </b> {hair}
      </div>
      <div>
        <b>Height: </b> {height}
      </div>
      <div>
        <b>Realm: </b> {realm}
      </div>
      <div>
        <b>Spouse: </b> {spouse}
      </div>
      <div>
        <b>Wiki: </b>
        <a href={wikiUrl} target="_blank" rel="noopener noreferrer">
          {wikiUrl}
        </a>
      </div>
    </>
  );

  function handleClick() {
    if (props.openModal) {
      props.openModal(modalContent);
    } else {
      navigate(`/character/${_id}`);
    }
  }

  return (
    <>
      <div className={styles.card} data-testid="card" onClick={handleClick}>
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
          {name && (
            <div>
              <b>Name: </b>
              {name}
            </div>
          )}
          {race && (
            <div>
              <b>Race: </b>
              {race}
            </div>
          )}
          {date && (
            <div>
              <b>Date: </b>
              {date}
            </div>
          )}
          {country && (
            <div>
              <b>Country: </b>
              {country}
            </div>
          )}
          {agree && (
            <div>
              <b>Agree: </b>
              {agree === 'on' ? 'yes' : 'no'}
            </div>
          )}
          {receiveNotifications && (
            <div>
              <b>Receive Notifications: </b>
              {receiveNotifications}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
