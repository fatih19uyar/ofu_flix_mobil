import commonReducer from './common/commonSlice';
import loginReducer from './login/loginSlice';
import navigationReducer from './navigation/navigationSlice';
import contentReducer from './content/contentSlice';
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  common: commonReducer,
  auth: loginReducer,
  navigation: navigationReducer,
  content: contentReducer,
});

export default rootReducer;
