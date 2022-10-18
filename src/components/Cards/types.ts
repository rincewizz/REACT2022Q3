export interface ICard {
  id?: number;
  img?: string;
  title?: string;
  desc?: string;
  name?: string;
  date?: string;
  agree?: string;
  country?: string;
  receiveNotifications?: string;
}
export type CardListProp = {
  cards: ICard[];
};
