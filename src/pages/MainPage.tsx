import { fetchCharacter, selectHome } from 'app/homeSlice';
import { AppDispatch } from 'app/store';
import CardsList from 'components/Cards/CardsList';
import Loader from 'components/Loader/Loader';
import Notification from 'components/Notification/Notification';
import { Pagination } from 'components/Pagination/Pagination';
import Search from 'components/Search/Search';
import { Sort } from 'components/Sort/Sort';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PageProps } from 'types/types';
import placeholder from '../assets/img/lord.jpg';

export default function MainPage({ title }: PageProps) {
  const [isSortClick, setIsSortClick] = useState(false);
  const [isPageClick, setIsPageClick] = useState(false);
  const [isSearchClick, setIsSearchClick] = useState(false);

  const {
    searchQueryString,
    sortType,
    sortOrder,
    searchResults,
    pageNumber,
    pageLimit,
    pageCount,
    status,
    error,
  } = useSelector(selectHome);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    document.title = title ?? '';
  }, []);

  useEffect(() => {
    if (isSortClick || isPageClick || isSearchClick) {
      setIsSortClick(false);
      setIsPageClick(false);
      setIsSearchClick(false);

      dispatch(
        fetchCharacter({
          name: searchQueryString,
          sortType: sortType,
          sortOrder,
          page: pageNumber,
          limit: pageLimit,
        })
      );
    }
  }, [sortType, sortOrder, pageNumber, pageLimit, isSearchClick]);

  return (
    <div className="container">
      <h1 className="title" data-testid="home-page">
        Home
      </h1>
      <Search setIsSearchClick={setIsSearchClick} />
      <Sort
        sortList={['name', 'race', 'gender']}
        current={'name'}
        setIsSortClick={setIsSortClick}
      />
      {status === 'failed' && <Notification type="error">{error}</Notification>}
      {status === 'loading' && <Loader />}
      {status === 'idle' && <CardsList cards={searchResults} placeholder={placeholder} />}
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
