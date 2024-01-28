// Import edilenleri ve diğer gerekli dosyaları ekleyin
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { login, logOut } from '../../common/services/auth';
import { jwtDecode } from 'jwt-decode';
import { LoginRequest, User } from '../../common/services/auth/type';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useLocalStorage from '../../common/hooks/useLocalStorage';

// Auth state tipini tanımlayın
type AuthState = {
  user: User | null;
  token: string;
  remember: boolean;
  userKey?: string;
};

// Auth state'inin başlangıç durumunu tanımlayın
const initialState: AuthState = {
  user: null,
  token: '',
  remember: false,
};

// Redux thunk'larını ve slice'ı oluşturun
export const loginAction = createAsyncThunk(
  'auth/login',
  async (values: LoginRequest, { dispatch }): Promise<AuthState> => {
    const data = await login(values);
    const decodedUser: User = jwtDecode(data?.accessToken ?? '');

    dispatch(setUser(decodedUser));
    AsyncStorage.setItem(process.env.REACT_APP_ACCESS_TOKEN_KEY!, data?.accessToken ?? '');
    AsyncStorage.setItem('user', JSON.stringify(decodedUser));
    return {
      token: data?.accessToken ?? '',
      user: decodedUser,
      remember: values.remember,
      userKey: values.username,
    };
  },
);

export const logoutAction = createAsyncThunk(
  'auth/logout',
  async (_, { dispatch }) => {
    await logOut();

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
      const tempState = { ...state };

      tempState.user = action.payload;
      tempState.userKey = action.payload.sessionInfo?.username;

      return tempState;
    },
    setToken: (state: AuthState, action: PayloadAction<string>): AuthState => {
      const tempState = { ...state };

      tempState.token = action.payload;

      return tempState;
    },
  },
  extraReducers(builder) {
    builder.addCase(
      loginAction.fulfilled,
      (state: AuthState, action: PayloadAction<AuthState>) => {
        if (action.payload.remember) {
          AsyncStorage.setItem(
            process.env.REACT_APP_ACCESS_TOKEN_KEY!,
            action.payload.token,
          );
        }

        const tempState = { ...state };

        tempState.token = action.payload.token;
        tempState.user = action.payload.user;
        tempState.userKey = action.payload.userKey;
        tempState.remember = action.payload.remember;

        return tempState;
      },
    );
  },
});

export const { logout, setUser, setToken } = authSlice.actions;

export default authSlice.reducer;
