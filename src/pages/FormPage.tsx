import CardsList from 'components/Cards/CardsList';
import { ICard } from 'components/Cards/types';
import Form from 'components/Form/Form';
import React, { useEffect, useState } from 'react';
import { PageProps } from 'types/types';

export default function FormPage({ title }: PageProps) {
  const [cards, setCards] = useState<ICard[]>([]);

  useEffect(() => {
    document.title = title ?? '';
  }, []);

  function createCard(card: ICard) {
    setCards(cards.concat([card]));
  }

  return (
    <div className="container">
      <h1 className="title" data-testid="about-page">
        Form
      </h1>
      <Form createCard={createCard} />
      {!!cards.length && <CardsList cards={cards} />}
    </div>
  );
}
