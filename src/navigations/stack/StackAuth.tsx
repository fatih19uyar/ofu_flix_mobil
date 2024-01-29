import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from '../../screens/AuthScreens/LoginScreen';
import RegisterScreen from '../../screens/AuthScreens/RegisterScreen';
import GoBackButton from '../../components/GoBackButton';
import { colors } from '../../constants';

const Stack = createNativeStackNavigator();

function StackAuth() {
  return (
    <Stack.Navigator 
    screenOptions={{
      headerStyle: {
        backgroundColor: colors.bgGrey,
      },
      headerLeft: () => <GoBackButton />,
      headerTintColor: colors.bgGrey,
      contentStyle: {
        backgroundColor: colors.bgGrey,
      }
    }}
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerLeft: () => null, }}/>
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
    </Stack.Navigator>
  );
}

export default StackAuth;
