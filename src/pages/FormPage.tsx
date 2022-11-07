import { selectForm, setFormCards } from 'app/formSlice';
import CardsList from 'components/Cards/CardsList';
import { ICard } from 'components/Cards/types';
import Form from 'components/Form/Form';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PageProps } from 'types/types';

export default function FormPage(props: PageProps) {
  const { formCards } = useSelector(selectForm);
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = props.title ?? '';
  });

  function createCard(card: ICard) {
    dispatch(setFormCards(formCards.concat([card])));
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
