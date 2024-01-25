import { configureStore } from '@reduxjs/toolkit';
import loginSlice from './login/loginSlice';
import commonSlice from './common/commonSlice';


export const store = configureStore({
  reducer: {
    common: commonSlice,
    auth: loginSlice,
  },
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState: {},
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;