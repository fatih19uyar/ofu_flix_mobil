import React, {useEffect, useState} from 'react';
import {StatusBar, View} from 'react-native';
import {Button} from 'react-native-paper';
import styled from 'styled-components/native';
import CommonTextInput from '../../components/CommonTextInput';
import useToastMessage from '../../common/hooks/useToastMessage';
import { StatusEnum } from '../../utils/colorUtil';
import { useAppDispatch } from '../../common/hooks/useStore';
import { setLoading } from '../../store/common/commonSlice';
import { loginAction } from '../../store/login/loginSlice';
import { useTypedNavigation } from '../../common/hooks/useNavigation';
import CommonButton from '../../components/CommonButton';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #1a1a1a;
  padding-horizontal: 20px;
`;

const Logo = styled.Image`
  margin-bottom: 20px;
`;

const LoginButton = styled(Button).attrs({
  mode: 'contained',
  color: '#4CAF50',
})`
  width: 80%;
  height: 40px;
  justify-content: center;
  align-items: center;
`;

const LoginScreen: React.FC = () => {
  const {showToast} = useToastMessage();
  const dispatch = useAppDispatch();
  const navigation = useTypedNavigation();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = async () => {
    console.log('Login pressed:', username, password);
    try {
      if (username === 'admin' && password === 'admin') {
        showToast(StatusEnum.SUCCESS, 'Login successful');
        dispatch(setLoading(true));
        
        // await dispatch(loginAction({
        //   username: username,
        //   password: password,
        //   remember: false
        // }));
        setTimeout(()=>{
          dispatch(setLoading(false));
          navigation.navigate('TabNavigation');
        },1500)
      } else {
        dispatch(setLoading(false));
        showToast(StatusEnum.ERROR, 'Invalid username or password');
      }
    } catch (error) {
      console.error('Login error:', error);
      showToast(StatusEnum.ERROR, 'An error occurred during login');
      dispatch(setLoading(false));
    }
  };
  

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <Logo source={require('../../assets/images/ofu_flix.png')} />
      <CommonTextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <CommonTextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <View style={{padding:20}} />
      <CommonButton onPress={handleLogin} label="Login"/>
    </Container>
  );
};

export default LoginScreen;
