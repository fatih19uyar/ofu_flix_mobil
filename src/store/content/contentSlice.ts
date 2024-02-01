import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AsyncThunkConfig, ContentItem, ContentState} from './type';
import { setLocalStorage } from '../../common/hooks/useLocalStorage';
import data from '../../mockData/data';

const initialState: ContentState = {
  myList: [],
  previews: [],
  dumpData: [],
  selectedContent: null,
};

export const setMyListAsync = createAsyncThunk(
  'content/setMyListAsync',
  async (myList: ContentItem[]) => {
    await setLocalStorage('myList', JSON.stringify(myList));
    return myList;
  },
);

export const setPreviewsListAsync = createAsyncThunk(
  'content/setPreviewsListAsync',
  async (previewsList: ContentItem[]) => {
    await setLocalStorage('previewsList', JSON.stringify(previewsList));
    return previewsList;
  },
);

export const setDumpDataListAsync = createAsyncThunk(
  'content/setDumpDataListAsync',
  async (dumpData: ContentItem[]) => {
    await setLocalStorage('dumpData', JSON.stringify(dumpData));
    return dumpData;
  },
);

export const initialize = createAsyncThunk<void, void, AsyncThunkConfig>(
    'content/initialize',
    async (_, thunkAPI) => {
      const { content } = thunkAPI.getState();
  
      if (content.myList.length === 0) {
        await thunkAPI.dispatch(setMyListAsync(data['myList']));
      }
      if (content.dumpData.length === 0) {
        await thunkAPI.dispatch(setDumpDataListAsync(data['dumbData']));
      }
      if (content.previews.length === 0) {
        await thunkAPI.dispatch(setPreviewsListAsync(data['previews']));
      }
    },
  );

const contentSlice = createSlice({
  name: 'content',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(setMyListAsync.fulfilled, (state, action) => {
        state.myList = action.payload;
      })
      .addCase(setPreviewsListAsync.fulfilled, (state, action) => {
        state.previews = action.payload;
      })
      .addCase(setDumpDataListAsync.fulfilled, (state, action) => {
        state.dumpData = action.payload;
      });
  },
  reducers: {
    addToMyList: (state, action: PayloadAction<ContentItem>) => {
      state.myList.push(action.payload);
    },
    removeFromMyList: (state, action: PayloadAction<number>) => {
      state.myList = state.myList.filter(item => item.id !== action.payload);
    },
    updateMyListItem: (state, action: PayloadAction<ContentItem>) => {
      const index = state.myList.findIndex(
        item => item.id === action.payload.id,
      );
      if (index !== -1) {
        state.myList[index] = action.payload;
      }
    },
    addToPreviews: (state, action: PayloadAction<ContentItem>) => {
      state.previews.push(action.payload);
    },
    addToDumpData: (state, action: PayloadAction<ContentItem>) => {
      state.dumpData.push(action.payload);
    },
    setSelectedContent: (state, action: PayloadAction<ContentItem | null>) => {
      state.selectedContent = action.payload;
    },
    setMyList: (state, action: PayloadAction<ContentItem[]>) => {
      state.myList = action.payload;
    },
    setPreviews: (state, action: PayloadAction<ContentItem[]>) => {
      state.previews = action.payload;
    },
    setDumpData: (state, action: PayloadAction<ContentItem[]>) => {
      state.dumpData = action.payload;
    },
    deleteMyList: state => {
      state.myList = [];
    },
    deletePreviews: state => {
      state.previews = [];
    },
    deleteDumpData: state => {
      state.dumpData = [];
    },
  },
});

export const {
  addToMyList,
  removeFromMyList,
  updateMyListItem,
  addToPreviews,
  addToDumpData,
  setSelectedContent,
  deleteMyList,
  deleteDumpData,
  deletePreviews,
  setMyList,
  setPreviews,
  setDumpData,
} = contentSlice.actions;

export default contentSlice.reducer;
