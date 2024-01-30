import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { NavigationState } from './type';

const initialState: NavigationState = {
  initialRouteName: 'SplashScreen',
};

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    initialRouteNameSet: (
      state,
      action: PayloadAction<{initialRouteName: string}>,
    ) => {
      state.initialRouteName = action.payload.initialRouteName;
    },
  },
});

export const {initialRouteNameSet} = navigationSlice.actions;

export default navigationSlice.reducer;
