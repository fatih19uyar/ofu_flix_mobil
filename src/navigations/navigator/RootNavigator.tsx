import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {AppDispatch, RootState} from '../../store';
import {setToken, setUser} from '../../store/login/loginSlice';

import TabNavigation from './TabNavigation';

import ModalAddProfile from '../../screens/ModalScreens/ModalAddProfile';
import ModalWebView from '../../screens/ModalScreens/ModalWebView';
import ModalVideo from '../../screens/ModalScreens/ModalVideo';
import ModalManageProfiles from '../../screens/ModalScreens/ModalManageProfiles';
import ModalCastConnectScreen from '../../screens/ModalScreens/ModalCastConnect';

import SplashScreen from '../../screens/SplashScreen';
import StackAuth from '../stack/StackAuth';

const Stack = createStackNavigator();

const RootNavigator: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const isAuthenticated = useSelector<RootState>(state => state.auth.token);

  useEffect(() => {
    const checkUserLoggedIn = async () => {
      const loggedInUserString: string | null = await AsyncStorage.getItem(
        'userData',
      );
      if (loggedInUserString) {
        const loggedInUser = JSON.parse(loggedInUserString);
        const data: any = loggedInUser.token;
        dispatch(setToken(data.token));
        dispatch(setUser(data.user));
      }
    };

    checkUserLoggedIn();
  }, [dispatch]);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="ModalAddProfile" component={ModalAddProfile} />
      <Stack.Screen name="ModalManageProfiles" component={ModalManageProfiles} />
      <Stack.Screen name="ModalVideo" component={ModalVideo} />
      <Stack.Screen name="ModalWebView" component={ModalWebView} />
      <Stack.Screen name="ModalCastConnect" component={ModalCastConnectScreen} />
      <Stack.Screen name="TabNavigation" component={TabNavigation} />
      <Stack.Screen name="StackAuth" component={StackAuth} />

    </Stack.Navigator>
  );
};


export default RootNavigator;
