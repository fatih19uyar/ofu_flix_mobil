import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { Button } from 'react-native-paper';
import styled from 'styled-components/native';
import CommonTextInput from '../../components/CommonTextInput';

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
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Burada giriş işlemleri yapılabilir
    console.log('Login pressed:', username, password);
  };

  useEffect(() => {
    // Burada giriş işlemleri yapılabilir
    console.log('Login pressed:', username, password);
  }, [username, password])  
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
      />

      {/* Giriş butonu */}
      <LoginButton onPress={handleLogin}>Login</LoginButton>
    </Container>
  );
};

export default LoginScreen;
