import React from 'react';
import {StatusBar, View} from 'react-native';
import styled from 'styled-components/native';
import CommonTextInput from '../../components/CommonTextInput';
import useToastMessage from '../../common/hooks/useToastMessage';
import {StatusEnum} from '../../utils/colorUtil';
import {useAppDispatch} from '../../common/hooks/useStore';
import {setLoading} from '../../store/common/commonSlice';
import { setUser} from '../../store/login/loginSlice';
import {useTypedNavigation} from '../../common/hooks/useNavigation';
import CommonButton from '../../components/CommonButton';
import data from '../../mockData/data';
import {useForm, Controller} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'; 
import { useHeaderHeight } from '@react-navigation/elements';
import { setLocalStorage } from '../../common/hooks/useLocalStorage';
import { initialRouteNameSet } from '../../store/navigation/navigationSlice';


const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-horizontal: 20px;
`;

const Logo = styled.Image`
  margin-bottom: 20px;
`;
interface FormData {
  username: string;
  password: string;
}

const LoginScreen: React.FC = () => {
  const {showToast} = useToastMessage();
  const dispatch = useAppDispatch();

  const navigation = useTypedNavigation();
  const headerHeight = useHeaderHeight();
  
  const schema = yup.object().shape({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required'),
  });
  const {control,handleSubmit,formState: {errors}} = useForm({
    resolver: yupResolver(schema),
  });

  const handleLogin = (values: FormData) => {
    try {
      dispatch(setLoading(true));

      const user = data.userData.find(
        user =>
          user.username === values.username &&
          user.password === values.password,
      );
      if (user) {
        setLocalStorage("user",JSON.stringify(user))
        dispatch(setUser(user));
        setTimeout(()=>{
          dispatch(initialRouteNameSet({initialRouteName:'AppNavigation'}))
          dispatch(setLoading(false));
        },1500);
      } else {
        setTimeout(()=>{
          showToast({type: 'error', text1: 'Invalid username or password'});
          dispatch(setLoading(false));
        },1500); 
      }
    } catch (error) {
      console.error('Login error:', error);
      showToast({type: 'error', text1: 'An error occurred during login'});
      dispatch(setLoading(false));
    }
  };

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <Logo source={require('../../assets/images/ofu_flix.png')} />
      <Controller
        control={control}
        render={({field}) => (
          <CommonTextInput
            placeholder="Username"
            value={field.value}
            onChangeText={value => field.onChange(value)}
            error={
              errors.username && {error: true, message: errors.username.message}
            }
          />
        )}
        name="username"
        defaultValue=""
      />
      <Controller
        control={control}
        render={({field}) => (
          <CommonTextInput
            placeholder="Password"
            value={field.value}
            onChangeText={value => field.onChange(value)}
            secureTextEntry
            error={
              errors.password && {error: true, message: errors.password.message}
            }
          />
        )}
        name="password"
        defaultValue=""
      />
      <View style={{padding: 10}} />
      <CommonButton onPress={handleSubmit(handleLogin)} label="LOGIN" />
      <CommonButton
        type="text"
        onPress={() => navigation.navigate('RegisterScreen')}
        label="Don't you have an account? Register now!"
      />
      <View style={{padding: headerHeight - 30}} />
    </Container>
  );
};

export default LoginScreen;
