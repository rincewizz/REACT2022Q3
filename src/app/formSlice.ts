import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormFields, FormState } from './types';
import { ICard } from 'components/Cards/types';
import { RootState } from './store';

const initialState: FormState = {
  formFields: {},
  formCards: [],
};

export const formSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setFormFields: (state, action: PayloadAction<FormFields>) => {
      state.formFields = action.payload;
    },
    setFormCards: (state, action: PayloadAction<ICard[]>) => {
      state.formCards = action.payload;
    },
  },
});

export const { setFormFields, setFormCards } = formSlice.actions;

export const selectForm = (state: RootState) => state.form;

export default formSlice.reducer;
