import { ICard } from 'components/Cards/types';

export type PageProps = {
  title: string;
};
export type MainPageState = {
  cards: ICard[];
  isLoading: boolean;
  error: string;
};
export type FormPageState = {
  cards: ICard[];
};
