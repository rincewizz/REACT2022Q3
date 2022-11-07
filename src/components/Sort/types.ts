import { SortType } from 'app/types';

export type SortProps = {
  sortList: SortType[];
  current: string;
  setIsSortClick: (val: boolean) => void;
};
