import { AppContext } from 'appState/appContext';
import CardsList from 'components/Cards/CardsList';
import { ICard } from 'components/Cards/types';
import Form from 'components/Form/Form';
import React, { useContext, useEffect } from 'react';
import { PageProps } from 'types/types';

export default function FormPage({ title }: PageProps) {
  const { setFormCards, formCards } = useContext(AppContext);

  useEffect(() => {
    document.title = title ?? '';
  });

  function createCard(card: ICard) {
    setFormCards(formCards.concat([card]));
  }

  return (
    <div className="container">
      <h1 className="title" data-testid="about-page">
        Form
      </h1>
      <Form createCard={createCard} />
      {!!formCards.length && <CardsList cards={formCards} />}
    </div>
  );
}
