import {Middleware} from 'redux';
import {RootState, store} from '..';
import {
  setMyListAsync,
  setDumpDataListAsync,
  setPreviewsListAsync,
} from '../content/contentSlice';
import data from '../../mockData/data';

enum ActionTypes {
  INITIALIZED = 'content/initialized',
}

const contentMiddleware: Middleware<{}, RootState> =
  store => next => (action: any) => {
    if (action.type === ActionTypes.INITIALIZED) {
      console.log('Uygulama başarıyla başlatıldı');
    }
    return next(action);
  };

export const initializeMiddleware = async (dispatch: any) => {
  const {content} = store.getState();

  if (content.myList.length === 0) {
    await dispatch(setMyListAsync(data['myList']));
  }

  if (content.dumpData.length === 0) {
    await dispatch(setDumpDataListAsync(data['dumbData']));
  }

  if (content.previews.length === 0) {
    await dispatch(setPreviewsListAsync(data['previews']));
  }

  dispatch({type: ActionTypes.INITIALIZED});
};

export default contentMiddleware;
