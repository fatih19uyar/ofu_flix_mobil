import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AsyncThunkConfig, ContentItem, ContentState} from './type';
import { getLocalStorageItem, setLocalStorage, updateLocalStorageByKey } from '../../common/hooks/useLocalStorage';
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

export const addToMyListAsync = createAsyncThunk(
  'content/addToMyListAsync',
  async (item: ContentItem) => {
    await updateLocalStorageByKey('myList', item, 'add');
    return item;
  },
);
export const removeToMyListAsync = createAsyncThunk(
  'content/removeToMyListAsync',
  async (item: ContentItem) => {
    await updateLocalStorageByKey('myList', item, 'remove');
    return item;
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
        const myListFromLocalStorage = await getLocalStorageItem('myList');
        if (
          myListFromLocalStorage && JSON.parse(myListFromLocalStorage).length > 0
        ) {
          await thunkAPI.dispatch(setMyListAsync(JSON.parse(myListFromLocalStorage)));
        } else {
          await thunkAPI.dispatch(setMyListAsync(data['myList']));
        }
      }
      if (content.dumpData.length === 0) {
        const dumpDataFromLocalStorage = await getLocalStorageItem('dumpData');
        if (
          dumpDataFromLocalStorage && JSON.parse(dumpDataFromLocalStorage).length > 0
        ) {
          await thunkAPI.dispatch(setDumpDataListAsync(JSON.parse(dumpDataFromLocalStorage)));
        } else {
          await thunkAPI.dispatch(setDumpDataListAsync(data['dumbData']));
        }
      }
      if (content.previews.length === 0) {
        const previewsFromLocalStorage = await getLocalStorageItem('previewsList');
        if (
            previewsFromLocalStorage && JSON.parse(previewsFromLocalStorage).length > 0
          ) {
            await thunkAPI.dispatch(setPreviewsListAsync(JSON.parse(previewsFromLocalStorage)));
          } else {
            await thunkAPI.dispatch(setPreviewsListAsync(data['previews']));
          }
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
      .addCase(addToMyListAsync.fulfilled, (state, action) => {
        state.myList.push(action.payload);
      })
      .addCase(removeToMyListAsync.fulfilled, (state, action) => {
        state.myList = state.myList.filter(
          item => item.id !== action.payload.id,
        );
      })
      .addCase(setPreviewsListAsync.fulfilled, (state, action) => {
        state.previews = action.payload;
      })
      .addCase(setDumpDataListAsync.fulfilled, (state, action) => {
        state.dumpData = action.payload;
      });
  },
  reducers: {
    addToPreviews: (state, action: PayloadAction<ContentItem>) => {
      state.previews.push(action.payload);
    },
    addToDumpData: (state, action: PayloadAction<ContentItem>) => {
      state.dumpData.push(action.payload);
    },
    setSelectedContent: (state, action: PayloadAction<ContentItem | null>) => {
      state.selectedContent = action.payload;
    },
    removeSelectedContent: state => {
      state.selectedContent = null;
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
  addToPreviews,
  addToDumpData,
  setSelectedContent,
  removeSelectedContent,
  deleteMyList,
  deleteDumpData,
  deletePreviews,
  setMyList,
  setPreviews,
  setDumpData,
} = contentSlice.actions;

export default contentSlice.reducer;
