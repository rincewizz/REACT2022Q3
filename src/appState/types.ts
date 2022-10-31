import { ICard } from 'components/Cards/types';

export type SortType = 'name' | 'race' | 'gender';
export type SortOrder = 'asc' | 'desc';

export type FormFields = {
  name: string;
  date: string;
  country: string;
  agree: boolean;
  receiveNotifications: 'yes' | 'no';
  file: FileList;
};
export type AppState = {
  searchResults: ICard[];
  searchQueryString: string;
  sortType?: SortType;
  sortOrder: SortOrder;
  pageNumber: number;
  pageCount: number;
  pageLimit: number;
  formFields?: FormFields | Record<string, never>;
  formCards: ICard[];
  setSearchCards: (cards: ICard[]) => void;
  setSortType: (sortType: SortType) => void;
  setSortOrder: (sortOrder: SortOrder) => void;
  setSearchQueryString: (searchQuery: string) => void;
  setPage: (page: number) => void;
  setPageCount: (pageCount: number) => void;
  setPageLimit: (pageLimit: number) => void;
  setFormCards: (cards: ICard[]) => void;
  setFormFields: (formFields: FormFields) => void;
};

export enum ActionTypes {
  setSearchCards = 'SET_SEARCH_CARDS',
  setSearchQuery = 'SET_SEARCH_QUERY',
  setFormCards = 'SET_FORM_CARDS',
  setFormFields = 'SET_FORM_FIELDS',
  setSortType = 'SET_SORT_TYPE',
  setSortOder = 'SET_SORT_ORDER',
  setPage = 'SET_PAGE',
  setPageCount = 'SET_PAGE_COUNT',
  setPageLimit = 'SET_PAGE_LIMIT',
}
export type SetCardsAction = {
  type: ActionTypes.setSearchCards | ActionTypes.setFormCards;
  payload: {
    cards: ICard[];
  };
};
export type SetSearchQueryAction = {
  type: ActionTypes.setSearchQuery;
  payload: {
    searchQuery: string;
  };
};
export type SetFormFieldsAction = {
  type: ActionTypes.setFormFields;
  payload: {
    formFields: FormFields;
  };
};
export type SetSortTypeAction = {
  type: ActionTypes.setSortType;
  payload: {
    sortType: SortType;
  };
};
export type SetSortOrderAction = {
  type: ActionTypes.setSortOder;
  payload: {
    sortOrder: SortOrder;
  };
};
export type SetPageAction = {
  type: ActionTypes.setPage;
  payload: {
    page: number;
  };
};
export type SetPageCountAction = {
  type: ActionTypes.setPageCount;
  payload: {
    pageCount: number;
  };
};
export type SetPageLimitAction = {
  type: ActionTypes.setPageLimit;
  payload: {
    pageLimit: number;
  };
};
export type Actions =
  | SetCardsAction
  | SetSearchQueryAction
  | SetSortTypeAction
  | SetSortOrderAction
  | SetPageAction
  | SetFormFieldsAction
  | SetPageCountAction
  | SetPageLimitAction;
