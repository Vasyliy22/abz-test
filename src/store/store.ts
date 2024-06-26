import {
  configureStore,
  ThunkAction,
  Action,
} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import usersSlice from './redusers/usersSlice';


export const store = configureStore({
  reducer: usersSlice,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;