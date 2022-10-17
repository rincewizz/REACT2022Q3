import InputControl from 'components/InputControl/InputControl';
import SelectControl from 'components/SelectControl/SelectControl';
import React from 'react';

export interface ICard {
  id?: number | string;
  _id?: string;
  img?: string;
  title?: string;
  desc?: string;
  name?: string;
  date?: string;
  agree?: string;
  country?: string;
  receiveNotifications?: string;
  race?: string;
  gender?: string;
  wikiUrl?: string;
  hair?: string;
  birth?: string;
  death?: string;
  height?: string;
  realm?: string;
  spouse?: string;
}
export type CardState = {
  isModalOpen: boolean;
};
export type CardListProp = {
  cards: ICard[];
  placeholder?: string;
};
export type SearchProps = {
  search: (query: string) => void;
};
export type SearchState = {
  searchQuery: string;
};

export type MenuProp = {
  className?: string;
};
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
export type InputType = 'text' | 'checkbox' | 'file' | 'radio' | 'date' | 'switcher';
export type ButtonType = 'button' | 'reset' | 'submit';
export type InputControlProps = {
  type: InputType;
  name: string;
  id?: string;
  className?: string;
  description?: string;
  onChangeInputControll: (control: InputControl) => void;
  changeHandler?: (event: React.ChangeEvent) => void;
};
export type SelectControlProps = {
  children: React.ReactNode;
  name: string;
  id?: string;
  className?: string;
  onChangeInputControll: (control: SelectControl) => void;
  changeHandler?: (event: React.ChangeEvent) => void;
};
export type ButtonControlProps = {
  type: ButtonType;
  name?: string;
  id?: string;
  className?: string;
  children: React.ReactNode;
};
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
