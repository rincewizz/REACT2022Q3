import CardsList from 'components/Cards/CardsList';
import { ICard } from 'components/Cards/types';
import Form from 'components/Form/Form';
import React from 'react';
import { FormPageState, PageProps } from 'types/types';

export default class FormPage extends React.Component<PageProps, FormPageState> {
  constructor(props: PageProps) {
    super(props);
    this.createCard = this.createCard.bind(this);
    this.state = { cards: [] };
  }
  public static defaultProps = {
    title: '',
  };
  componentDidMount() {
    document.title = this.props.title ?? '';
  }
  createCard(card: ICard) {
    this.setState({ cards: this.state.cards.concat([card]) });
  }
  render() {
    return (
      <div className="container">
        <h1 className="title" data-testid="about-page">
          Form
        </h1>
        <Form createCard={this.createCard} />
        {!!this.state.cards.length && <CardsList cards={this.state.cards} />}
      </div>
    );
  }
}
