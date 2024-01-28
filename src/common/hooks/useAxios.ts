import axios, { AxiosError } from 'axios';
import useToastMessage from './useToastMessage';
import { User } from '../services/auth/type';
import { store } from '../../store';
import { ErrorResponse } from '../services/common/type';
import { jwtDecode } from 'jwt-decode';
import { sleep } from '../../utils/asyncUtil';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusEnum } from '../../utils/colorUtil';
import { logoutAction, setToken, setUser } from '../../store/login/loginSlice';
import { clearAllLocalStorage, setLocalStorage } from './useLocalStorage';

const cancelToken = axios.CancelToken.source();

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_SERVICE_URL,
  cancelToken: cancelToken.token,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    try {
      const token = await AsyncStorage.getItem(process.env.REACT_APP_ACCESS_TOKEN_KEY!);
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.error('Error getting token from AsyncStorage:', error);
    }

    return config;
  },
  (error) => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  async (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config;
    const { refreshTokenReload, refreshToken } = error.response?.data as {
      refreshToken: string;
      refreshTokenReload: boolean;
    };

    const { showToast } = useToastMessage(); 

    if (error.response?.status === 401 && !refreshTokenReload) {
      await sleep(2000);
      store.dispatch(logoutAction());
      await clearAllLocalStorage(); 
      cancelToken.cancel('Operation canceled by the user.');
      showToast(StatusEnum.ERROR, 'Error', 'Authentication failed');
    } else if (
      error.response?.status === 401 &&
      refreshTokenReload &&
      refreshToken &&
      originalRequest
    ) {
      try {
        const decodedUser: User = jwtDecode(refreshToken);

        await setLocalStorage("user", JSON.stringify({ token: refreshToken, userId: decodedUser?.id })); 

        store.dispatch(setToken(refreshToken));
        store.dispatch(setUser(decodedUser));

        originalRequest.headers.Authorization = `Bearer ${refreshToken}`;

        return await axiosInstance(originalRequest);
      } catch (reason) {
        const err = reason as AxiosError<ErrorResponse>;

        showToast(StatusEnum.INFO, 'Warning', err.response?.data.message.message ?? 'An error occurred');
      }
    } else if (error.response?.status === 408) {
      cancelToken.cancel('Operation canceled by the user.');
      const err = error as AxiosError<ErrorResponse>;

      showToast(StatusEnum.ERROR, 'Error', err.response?.data?.message?.message);
      await sleep(1000);
      store.dispatch(logoutAction());

      return Promise.reject(error);
    } else if ((error.response?.data as ErrorResponse).status === 500) {
      cancelToken.cancel('Server could not be reached');
      await clearAllLocalStorage(); 
      showToast(StatusEnum.ERROR, 'Error', 'Server error occurred'); 
      return Promise.reject(error);
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
