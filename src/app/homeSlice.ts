import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HomeState, SortOrder, SortType } from './types';
import { ICard } from 'components/Cards/types';
import { theOneApi } from 'services/theOneApi';
import { RootState } from './store';

const initialState: HomeState = {
  searchResults: [],
  searchQueryString: '',
  sortType: 'name',
  sortOrder: 'asc',
  pageNumber: 1,
  pageCount: 1,
  pageLimit: 10,
  status: 'idle',
  error: null,
};

export const fetchCharacter = createAsyncThunk(
  'home/fetchCharacter',
  async (
    {
      name,
      sortType,
      sortOrder = 'asc',
      limit = 10,
      page = 1,
    }: {
      name: string;
      sortType?: string;
      sortOrder?: string;
      limit: number;
      page: number;
    },
    thunkAPI
  ) => {
    const response = await theOneApi.getCharacters({
      name,
      sort: `${sortType}:${sortOrder ?? 'asc'}`,
      page: String(page),
      limit: String(limit),
    });
    return response;
  }
);

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setSearchResult: (state, action: PayloadAction<ICard[]>) => {
      state.searchResults = action.payload;
    },
    setSearchQueryString: (state, action: PayloadAction<string>) => {
      state.searchQueryString = action.payload;
    },
    setSortType: (state, action: PayloadAction<SortType>) => {
      state.sortType = action.payload;
    },
    setSortOrder: (state, action: PayloadAction<SortOrder>) => {
      state.sortOrder = action.payload;
    },
    setPageNumber: (state, action: PayloadAction<number>) => {
      state.pageNumber = action.payload;
    },
    setPageLimit: (state, action: PayloadAction<number>) => {
      state.pageLimit = action.payload;
    },
    setPageCount: (state, action: PayloadAction<number>) => {
      state.pageCount = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacter.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCharacter.fulfilled, (state, action) => {
        state.status = 'idle';
        state.searchResults = action.payload?.docs ?? [];
        state.pageCount = action.payload?.pages ?? 1;
      })
      .addCase(fetchCharacter.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? '';
      });
  },
});

export const {
  setSearchResult,
  setSearchQueryString,
  setSortType,
  setSortOrder,
  setPageNumber,
  setPageLimit,
  setPageCount,
  setError,
} = homeSlice.actions;

export const selectHome = (state: RootState) => state.home;

export default homeSlice.reducer;
