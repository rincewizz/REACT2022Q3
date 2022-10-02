import CardsList from 'components/Cards/CardsList';
import Search from 'components/Search/Search';
import React from 'react';
import { PageProps } from 'types/types';

export default class Main extends React.Component<PageProps> {
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
        <CardsList />
      </div>
    );
  }
}
