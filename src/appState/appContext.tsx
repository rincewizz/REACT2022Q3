import { ICard } from 'components/Cards/types';
import React, { createContext, useReducer } from 'react';
import appReducer, { initialState } from './appReducer';
import { ActionTypes, SortType, FormFields, SortOrder } from './types';

export const AppContext = createContext(initialState);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  function setSearchCards(cards: ICard[]) {
    dispatch({
      type: ActionTypes.setSearchCards,
      payload: {
        cards,
      },
    });
  }

  function setSearchQueryString(searchQuery: string) {
    dispatch({
      type: ActionTypes.setSearchQuery,
      payload: {
        searchQuery,
      },
    });
  }

  function setSortType(sortType: SortType) {
    dispatch({
      type: ActionTypes.setSortType,
      payload: {
        sortType,
      },
    });
  }
  function setSortOrder(sortOrder: SortOrder) {
    dispatch({
      type: ActionTypes.setSortOder,
      payload: {
        sortOrder,
      },
    });
  }
  function setPage(page: number) {
    dispatch({
      type: ActionTypes.setPage,
      payload: {
        page,
      },
    });
  }
  function setPageCount(pageCount: number) {
    dispatch({
      type: ActionTypes.setPageCount,
      payload: {
        pageCount,
      },
    });
  }
  function setPageLimit(pageLimit: number) {
    dispatch({
      type: ActionTypes.setPageLimit,
      payload: {
        pageLimit,
      },
    });
  }
  function setFormCards(cards: ICard[]) {
    dispatch({
      type: ActionTypes.setFormCards,
      payload: {
        cards,
      },
    });
  }
  function setFormFields(formFields: FormFields) {
    dispatch({
      type: ActionTypes.setFormFields,
      payload: {
        formFields,
      },
    });
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        setSearchCards,
        setSortType,
        setSortOrder,
        setSearchQueryString,
        setPage,
        setPageCount,
        setPageLimit,
        setFormCards,
        setFormFields,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
