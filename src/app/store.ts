import { configureStore } from '@reduxjs/toolkit';
import formSlice from './formSlice';
import homeSlice from './homeSlice';

export const store = configureStore({
  reducer: {
    home: homeSlice,
    form: formSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
