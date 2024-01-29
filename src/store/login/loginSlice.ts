import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {LoginRequest, User} from '../../common/services/auth/type';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setLocalStorage} from '../../common/hooks/useLocalStorage';
import data from '../../mockData/data';

type AuthState = {
  user: User | null;
  token: string;
  remember: boolean;
  userKey?: string;
};

const initialState: AuthState = {
  user: null,
  token: '',
  remember: false,
};

export const loginAction = createAsyncThunk(
  'auth/login',
  async (values: LoginRequest, {dispatch}): Promise<AuthState> => {
    try {
      const user = data.userData.find(
        user =>
          user.username === values.username &&
          user.password === values.password,
      );
      if (user === undefined) {
        throw new Error('Invalid username or password');
      } else {
        dispatch(setUser(user));
        setLocalStorage("token", user.token);
        setLocalStorage('user', JSON.stringify(user));
        return {
          token: user.token,
          user,
          remember: values.remember,
          userKey: values.username,
        };
      }
    } catch (error) {
      return Promise.reject(error);
    }
  },
);

export const logoutAction = createAsyncThunk(
  'auth/logout',
  async (_, {dispatch}) => {
    dispatch(logout());
  },
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state: AuthState): AuthState => {
      AsyncStorage.clear();
      return initialState;
    },
    setUser: (state: AuthState, action: PayloadAction<User>): AuthState => {
      const tempState = {...state};

      tempState.user = action.payload;
      return tempState;
    },
    setToken: (state: AuthState, action: PayloadAction<string>): AuthState => {
      const tempState = {...state};

      tempState.token = action.payload;

      return tempState;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(
        loginAction.fulfilled,
        (state: AuthState, action: PayloadAction<AuthState>) => {
          if (action.payload.remember) {
            AsyncStorage.setItem(
              process.env.REACT_APP_ACCESS_TOKEN_KEY!,
              action.payload.token,
            );
          }

          const tempState = {...state};

          tempState.token = action.payload.token;
          tempState.user = action.payload.user;
          tempState.userKey = action.payload.userKey;
          tempState.remember = action.payload.remember;

          return tempState;
        },
      )
      .addCase(loginAction.rejected, (_, action) => {
        console.log('error');
      });
  },
});

export const {logout, setUser, setToken} = authSlice.actions;

export default authSlice.reducer;
