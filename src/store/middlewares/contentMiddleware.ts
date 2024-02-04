import {Middleware} from 'redux';
import {RootState} from '..';
import { ActionTypes } from './type';


export const contentMiddleware: Middleware<{}, RootState> =
  store => next => (action: any) => {
    if (action.type === ActionTypes.INITIALIZED) {
      console.log('Uygulama başarıyla başlatıldı');
    }
    return next(action);
  };