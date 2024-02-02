import { Middleware} from '@reduxjs/toolkit';
import {  setDumpDataListAsync, setMyListAsync, setPreviewsListAsync } from '../content/contentSlice';
import { setLocalStorage } from '../../common/hooks/useLocalStorage';

const updateAsyncStorageMiddleware: Middleware = (store) => (next) => async (action) => {
  if (setMyListAsync.fulfilled.match(action)) {
    await setLocalStorage('myList', JSON.stringify(action.payload));
  } else if (setDumpDataListAsync.fulfilled.match(action)) {
    await setLocalStorage('dumpData', JSON.stringify(action.payload));
  } else if (setPreviewsListAsync.fulfilled.match(action)) {
    await setLocalStorage('previewsList', JSON.stringify(action.payload));
  }
  console.log("updateAsyncStorageMiddleware");
  return next(action);
};

export default updateAsyncStorageMiddleware;