import { Actions, ActionTypes, AppState } from './types';

export const initialState: AppState = {
  searchResults: [],
  searchQueryString: '',
  sortType: 'name',
  sortOrder: 'asc',
  pageNumber: 1,
  pageCount: 1,
  pageLimit: 10,
  formFields: {},
  formCards: [],
  setSearchCards: () => {},
  setSortType: () => {},
  setSortOrder: () => {},
  setSearchQueryString: () => {},
  setPage: () => {},
  setPageCount: () => {},
  setPageLimit: () => {},
  setFormCards: () => {},
  setFormFields: () => {},
};

export default function appReducer(state: AppState, action: Actions) {
  const { type, payload } = action;

  switch (type) {
    case ActionTypes.setSearchCards:
      return { ...state, searchResults: payload.cards };
    case ActionTypes.setSearchQuery:
      return { ...state, searchQueryString: payload.searchQuery };
    case ActionTypes.setSortType:
      return { ...state, sortType: payload.sortType };
    case ActionTypes.setSortOder:
      return { ...state, sortOrder: payload.sortOrder };
    case ActionTypes.setPage:
      return { ...state, pageNumber: payload.page };
    case ActionTypes.setPageCount:
      return { ...state, pageCount: payload.pageCount };
    case ActionTypes.setPageLimit:
      return { ...state, pageLimit: payload.pageLimit };
    case ActionTypes.setFormCards:
      return { ...state, formCards: payload.cards };
    case ActionTypes.setFormFields:
      return { ...state, formFields: payload.formFields };
    default:
      throw new Error(`No case for type ${type} found in appReducer.`);
  }
}
