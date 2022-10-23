import { Modal } from 'components/Modal/Modal';
import React, { useState } from 'react';
import { ICard } from './types';
import styles from './Cards.module.scss';

export default function Card(props: ICard) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleClick() {
    setIsModalOpen(true);
  }
  function modalClose() {
    setIsModalOpen(false);
  }

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
  } = props;

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
      {isModalOpen && (
        <Modal close={modalClose}>
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
            <b>Wiki: </b>{' '}
            <a href={wikiUrl} target="_blank" rel="noopener noreferrer">
              {wikiUrl}
            </a>
          </div>
        </Modal>
      )}
    </>
  );
}
