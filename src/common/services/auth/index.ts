
import { AxiosError } from 'axios';
import { ErrorResponse } from '../common/type';
import axiosInstance from '../../hooks/useAxios';
import { LoginRequest, LoginResponse } from './type';
import useToastMessage from '../../hooks/useToastMessage';

export const login = async (request: LoginRequest): Promise<LoginResponse| undefined> => {
  const { showToast } = useToastMessage(); 
  try {
    const { username, password } = request;
    const response = await axiosInstance.post<LoginResponse>('ofuflix/authenticate', {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    const err = error as AxiosError<ErrorResponse>;
    showToast({type:"error", text1: err.response?.data?.message?.message ?? 'Bir hata oluştu'} );
  }
};

export const logOut = async (): Promise<boolean | undefined> => {
  const { showToast } = useToastMessage(); 
  try {
    const response = await axiosInstance.post('ofu_flix',"data");
    return response.status === 200;
  } catch (error) {
    const err = error as AxiosError<ErrorResponse>;
    showToast({type:"error", text1: err.response?.data?.message?.message ?? 'Bir hata oluştu'} );
  }
};

