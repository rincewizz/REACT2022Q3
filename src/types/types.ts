import { ICard } from 'components/Cards/types';
import React from 'react';

export type PageProps = {
  title?: string;
  openModal?: (content: React.ReactNode) => void;
};
export type MainPageState = {
  cards: ICard[];
  isLoading: boolean;
  error: string;
};
export type FormPageState = {
  cards: ICard[];
};
