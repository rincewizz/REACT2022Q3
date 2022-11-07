import { AppContext } from 'appState/appContext';
import CardsList from 'components/Cards/CardsList';
import Loader from 'components/Loader/Loader';
import Notification from 'components/Notification/Notification';
import { Pagination } from 'components/Pagination/Pagination';
import Search from 'components/Search/Search';
import { Sort } from 'components/Sort/Sort';
import React, { useContext, useEffect, useState } from 'react';
import { theOneApi } from 'services/theOneApi';
import { PageProps } from 'types/types';
import placeholder from '../assets/img/lord.jpg';

export default function MainPage({ title }: PageProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isSortClick, setIsSortClick] = useState(false);
  const [isPageClick, setIsPageClick] = useState(false);
  const [isSearchClick, setIsSearchClick] = useState(false);

  const {
    setSearchCards,
    sortType,
    searchResults,
    sortOrder,
    searchQueryString,
    pageNumber,
    pageCount,
    setPageCount,
    pageLimit,
  } = useContext(AppContext);

  useEffect(() => {
    document.title = title ?? '';
  }, []);

  useEffect(() => {
    if (isSortClick || isPageClick || isSearchClick) {
      setIsSortClick(false);
      setIsPageClick(false);
      setIsSearchClick(false);
      search(searchQueryString, {
        sortType: sortType,
        sortOrder,
        page: pageNumber,
        limit: pageLimit,
      });
    }
  }, [sortType, sortOrder, pageNumber, pageLimit, isSearchClick]);

  async function search(
    name: string,
    options?: { sortType?: string; sortOrder?: string; limit?: number; page?: number }
  ) {
    setIsLoading(true);

    try {
      const cards = await theOneApi.getCharacters({
        limit: `${options?.limit || 10}`,
        name,
        sort: `${options?.sortType}:${options?.sortOrder ?? 'asc'}`,
        page: String(options?.page || 1),
      });

      setSearchCards(
        cards.docs.map((el) => {
          return { ...el, type: 'home' };
        })
      );
      setPageCount(cards.pages);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="container">
      <h1 className="title" data-testid="home-page">
        Home
      </h1>
      <Search search={search} setIsSearchClick={setIsSearchClick} />
      <Sort
        sortList={['name', 'race', 'gender']}
        current={'name'}
        setIsSortClick={setIsSortClick}
      />
      {error && <Notification type="error">{error}</Notification>}
      {isLoading && !error && <Loader />}
      {!error && !isLoading && <CardsList cards={searchResults} placeholder={placeholder} />}
      {pageCount > 1 && (
        <Pagination
          limit={10}
          pageCount={pageCount}
          current={pageNumber}
          setIsPageClick={setIsPageClick}
        />
      )}
    </div>
  );
}
