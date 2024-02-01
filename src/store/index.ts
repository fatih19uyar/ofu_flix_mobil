import { Action, configureStore, Middleware, Store } from '@reduxjs/toolkit';
import contentMiddleware from './middlewares/contentMiddleware';
import rootReducer from './rootReducer';

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
    >,),
});

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch;
