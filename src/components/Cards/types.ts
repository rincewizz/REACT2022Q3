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
export type CardListProp = {
  cards: ICard[];
  placeholder?: string;
};
