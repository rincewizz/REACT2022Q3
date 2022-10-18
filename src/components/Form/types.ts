import { ICard } from 'components/Cards/types';

export type FormProp = {
  createCard: (card: ICard) => void;
};
export type FormState = {
  isFirstChange: boolean;
  isError: boolean;
  valid: {
    name: boolean;
    date: boolean;
    country: boolean;
    agree: boolean;
    receiveNotifications: boolean;
    file: boolean;
  };
};
