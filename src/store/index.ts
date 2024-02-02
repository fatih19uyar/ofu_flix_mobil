import { Action, configureStore, Middleware, Store } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import updateAsyncStorageMiddleware from './middlewares/updateAsyncStorageMiddleware';
import { contentMiddleware } from './middlewares/contentMiddleware';

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).prepend(
      contentMiddleware as Middleware<
      (action: Action<'specialAction'>) => number,
      RootState
    >,)
    .prepend(
      updateAsyncStorageMiddleware as Middleware<
      (action: Action<'specialAction'>) => number,
      RootState
    >,),
});

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch;
