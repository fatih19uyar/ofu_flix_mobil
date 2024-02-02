import {Middleware} from 'redux';
import {RootState} from '..';

enum ActionTypes {
  INITIALIZED = 'content/initialized',
}

export const contentMiddleware: Middleware<{}, RootState> =
  store => next => (action: any) => {
    if (action.type === ActionTypes.INITIALIZED) {
      console.log('Uygulama başarıyla başlatıldı');
    }
    return next(action);
  };