import CardsList from 'components/Cards/CardsList';
import { ICard } from 'components/Cards/types';
import Loader from 'components/Loader/Loader';
import Notification from 'components/Notification/Notification';
import Search from 'components/Search/Search';
import React, { useEffect, useState } from 'react';
import { theOneApi } from 'services/theOneApi';
import { PageProps } from 'types/types';
import placeholder from '../assets/img/lord.jpg';

export default function MainPage(props: PageProps) {
  const [cards, setCards] = useState<ICard[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    document.title = props.title ?? '';
  }, []);

  async function search(name: string) {
    setIsLoading(true);

    try {
      const cards = await theOneApi.getCharacters({ limit: '10', name });
      setCards(
        cards.docs.map((el) => {
          return { ...el, type: 'home' };
        })
      );
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="container">
      <h1 className="title" data-testid="home-page">
        Home
      </h1>
      <Search search={search} />
      {error && <Notification type="error">{error}</Notification>}
      {isLoading && !error && <Loader />}
      {!error && !isLoading && (
        <CardsList cards={cards} placeholder={placeholder} openModal={props.openModal} />
      )}
    </div>
  );
}
