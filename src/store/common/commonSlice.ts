import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { loginAction } from '../login/loginSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const drawerKeys = {
  NAVIGATION_MENU: 'navigation_menu',
};

export const modalKeys = {
  CONTACTED_FIRM: 'contacted_firm',
  SHORTCUT_MENU: 'shortcut_menu',
  SEARCH_MENU: 'search_menu',
  SELECTED_DONEM: 'selected_donem',
  SHOW_ANNOUNCEMENT: 'show_announcement',
};

export interface CommonState {
  loading: boolean;
  screenLoading: boolean;
  layout: {
    isSidebarOpen: boolean;
  };
  histories: string[];
  block: {
    open: boolean;
    title?: string;
    subtitle?: string;
    confirmText?: string;
    cancelText?: string;
    onConfirm?: () => void;
    onCancel?: () => void;
    type?: 'success' | 'error' | 'warning' | 'info';
  };
}

const initialState: CommonState = {
  loading: false,
  screenLoading: false,
  layout: {
    isSidebarOpen: true,
  },
  histories: [],
  block: {
    open: false,
  },
};


export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setScreenLoading: (state, action: PayloadAction<boolean>) => {
      state.screenLoading = action.payload;
    },
    handleLayout: (state, action: PayloadAction<CommonState['layout']>) => {
      state.layout.isSidebarOpen = action.payload.isSidebarOpen;
    },
    handleHistory: (state, action: PayloadAction<string>) => {
      const hasHistory = state.histories.find(
        (history) => history === action.payload,
      );

      if (hasHistory) {
        return state;
      }

      // filter history by module
      const filteredHistory = state.histories.filter(
        (history) => history.split('/')[2] === action.payload.split('/')[2],
      );

      state.histories = filteredHistory;

      state.histories.push(action.payload);

      return state;
    },
    resetHistory: (state, action: PayloadAction<string>) => {
      state.histories = [
        action.payload,
      ];
    },
    removeHistory: (state, action: PayloadAction<string>) => {
      state.histories = state.histories.filter(
        (history) => history !== action.payload,
      );
      return state;
    },
    handleBlock: (
      state,
      action: PayloadAction<Pick<CommonState, 'block'>>,
    ) => {
      state.block = action.payload.block;
    },
    resetCommonSlice: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginAction.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(loginAction.rejected, (state) => {
        state.loading = false;

        AsyncStorage.removeItem(process.env.REACT_APP_ACCESS_TOKEN_KEY!);
      });
  },
});

export const {
  setLoading,
  setScreenLoading,
  handleLayout,
  resetCommonSlice,
  handleHistory,
  removeHistory,
  handleBlock,
  resetHistory,
} = commonSlice.actions;

export default commonSlice.reducer;
