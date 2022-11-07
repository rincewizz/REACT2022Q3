import { ICard } from 'components/Cards/types';

export type SortType = 'name' | 'race' | 'gender';
export type SortOrder = 'asc' | 'desc';

export type FormFields = {
  name: string;
  date: string;
  country: string;
  agree: boolean;
  receiveNotifications: 'yes' | 'no';
  file: { name: string; type: string; content: string };
};

type LoadingStatus = 'loading' | 'idle' | 'failed';

export interface HomeState {
  searchResults: ICard[];
  searchQueryString: string;
  sortType: SortType;
  sortOrder: SortOrder;
  pageNumber: number;
  pageCount: number;
  pageLimit: number;
  status: LoadingStatus;
  error: string | null;
}

export interface FormState {
  formFields?: FormFields | Record<string, never>;
  formCards: ICard[];
}
