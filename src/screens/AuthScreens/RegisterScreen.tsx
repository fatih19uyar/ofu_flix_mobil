import React from 'react';
import {  StatusBar, View } from 'react-native';
import styled from 'styled-components/native';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import CommonTextInput from '../../components/Common/CommonTextInput';
import useToastMessage from '../../common/hooks/useToastMessage';
import { StatusEnum } from '../../utils/colorUtil';
import { useAppDispatch } from '../../common/hooks/useStore';
import { setLoading } from '../../store/common/commonSlice';
import CommonButton from '../../components/Common/CommonButton';
import { useHeaderHeight } from '@react-navigation/elements';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-horizontal: 20px;
`;
const Logo = styled.Image`
  margin-bottom: 20px;
`;

interface RegisterFormData {
  username: string;
  password: string;
  confirmPassword?: string ;
}

const RegisterScreen: React.FC = () => {
  const { showToast } = useToastMessage();
  const dispatch = useAppDispatch();
  const headerHeight = useHeaderHeight();

  const passwordSchema = yup.string()
  .required('Password is required')
  .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character')
  .min(8, 'Password must be at least 8 characters long');

  const { control, handleSubmit, formState: { errors } } = useForm<RegisterFormData>({
  resolver: yupResolver(yup.object().shape({
    username: yup.string().required('Username is required'),
    password: passwordSchema,
    confirmPassword: yup.string().oneOf([yup.ref('password'), undefined], 'Passwords must match'),
  }))
});

  const onSubmit: SubmitHandler<RegisterFormData> = async (data) => {
    try {
      dispatch(setLoading(true));

      // Burada kayıt işlemleri yapılacak, örneğin:
      // await dispatch(registerAction(data));

      showToast({type:'success', text1:'Registration successful!'});
    } catch (error) {
      console.error('Registration error:', error);
      showToast({type:'error', text1:'An error occurred during registration'});
      dispatch(setLoading(false));
    }
  };

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <Logo source={require('../../assets/images/ofu_flix.png')} />
      <Controller
        control={control}
        render={({ field }) => (
          <CommonTextInput
            placeholder="Username"
            value={field.value}
            onChangeText={(value) => field.onChange(value)}
            error={errors.username && { error: true, message: errors.username.message }}

          />
        )}
        name="username"
        defaultValue=""
      />
      <Controller
        control={control}
        render={({ field }) => (
          <CommonTextInput
            placeholder="Password"
            value={field.value}
            onChangeText={(value) => field.onChange(value)}
            secretValue={true}
            error={errors.password && { error: true, message: errors.password.message }}
          />
        )}
        name="password"
        defaultValue=""
      />
      <Controller
        control={control}
        render={({ field }) => (
          <CommonTextInput
            placeholder="Confirm Password"
            value={field.value}
            onChangeText={(value) => field.onChange(value)}
            secretValue={true}
            error={errors.confirmPassword && { error: true, message: errors.confirmPassword.message }}
          />
        )}
        name="confirmPassword"
        defaultValue=""
      />
      <View style={{padding: 10}} />
      <CommonButton onPress={handleSubmit(onSubmit)} label="Register" />
      <View style={{padding: headerHeight - 30}} />
    </Container>
  );
};

export default RegisterScreen;
