import CardsList from 'components/Cards/CardsList';
import Loader from 'components/Loader/Loader';
import Notification from 'components/Notification/Notification';
import Search from 'components/Search/Search';
import React from 'react';
import { theOneApi } from 'services/theOneApi';
import { MainPageState, PageProps } from 'types/types';
import placeholder from '../assets/img/lord.jpg';

export default class MainPage extends React.Component<PageProps, MainPageState> {
  constructor(props: PageProps) {
    super(props);
    this.state = { cards: [], isLoading: false, error: '' };
    this.search = this.search.bind(this);
  }
  public static defaultProps = {
    title: '',
  };

  async componentDidMount() {
    document.title = this.props.title || '';
  }

  async search(name: string) {
    this.setState({ isLoading: true });

    try {
      const cards = await theOneApi.getCharacters({ limit: '10', name });
      this.setState({
        cards: cards.docs,
        isLoading: false,
      });
    } catch (error) {
      if (error instanceof Error) {
        this.setState({ error: error.message });
      }
    }
  }

  render() {
    const { isLoading, error } = this.state;
    return (
      <div className="container">
        <h1 className="title" data-testid="home-page">
          Home
        </h1>
        <Search search={this.search} />
        {error && <Notification type="error">{error}</Notification>}
        {isLoading && !this.state.error && <Loader />}
        {!error && !isLoading && <CardsList cards={this.state.cards} placeholder={placeholder} />}
      </div>
    );
  }
}
