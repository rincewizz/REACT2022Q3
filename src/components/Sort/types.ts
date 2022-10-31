import { SortType } from 'appState/types';

export type SortProps = {
  sortList: SortType[];
  current: string;
  setIsSortClick: (val: boolean) => void;
};
