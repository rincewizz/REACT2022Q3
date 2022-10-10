import CardsList from 'components/Cards/CardsList';
import Search from 'components/Search/Search';
import React from 'react';
import { PageProps } from 'types/types';
import cards from '../data/cards.json';

export default class MainPage extends React.Component<PageProps> {
  public static defaultProps = {
    title: '',
  };
  componentDidMount() {
    document.title = this.props.title || '';
  }
  render() {
    return (
      <div className="container">
        <h1 className="title" data-testid="home-page">
          Home
        </h1>
        <Search />
        <CardsList cards={cards} />
      </div>
    );
  }
}
