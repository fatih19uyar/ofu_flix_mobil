import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {shallowEqual} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { setUser} from '../../store/login/loginSlice';

import ModalAddProfile from '../../screens/ModalScreens/ModalAddProfile';
import ModalWebView from '../../screens/ModalScreens/ModalWebView';
import ModalVideo from '../../screens/ModalScreens/ModalVideo';
import ModalManageProfiles from '../../screens/ModalScreens/ModalManageProfiles';
import ModalCastConnectScreen from '../../screens/ModalScreens/ModalCastConnect';
import MediaShowCaseScreen from '../../screens/MediaShowCaseScreen';

import SplashScreen from '../../screens/SplashScreen';
import StackAuth from '../stack/StackAuth';
import { useAppDispatch, useAppSelector } from '../../common/hooks/useStore';
import { initialRouteNameSet } from '../../store/navigation/navigationSlice';
import { useTypedNavigation } from '../../common/hooks/useNavigation';
import { StackActions } from '@react-navigation/native';
import AppNavigation from './AppNavigation';


const Stack = createStackNavigator();

const RootNavigator: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigation = useTypedNavigation();

  const {navigationState} = useAppSelector(
    state => ({navigationState: state.navigation}),
    shallowEqual,
  );  

  useEffect(() => {
    const checkUserLoggedIn = async () => {
      const loggedInUserString = await AsyncStorage.getItem('user');
      const timeOut =
        navigationState.initialRouteName === 'SplashScreen' ? 2000 : 0;
      if (loggedInUserString) {
        dispatch(setUser(JSON.parse(loggedInUserString)));
        setTimeout(() => {
          navigation.dispatch(StackActions.replace('AppNavigation'));
        }, timeOut);
      } else {
        setTimeout(() => {
          dispatch(initialRouteNameSet({initialRouteName: 'StackAuth'}));
          navigation.dispatch(StackActions.replace('StackAuth'));
        }, timeOut);
      }
    };
    checkUserLoggedIn();
  }, [dispatch, navigationState.initialRouteName]);

  return (
    <Stack.Navigator
      initialRouteName={navigationState.initialRouteName}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="ModalAddProfile" component={ModalAddProfile} />
      <Stack.Screen name="ModalManageProfiles" component={ModalManageProfiles} />
      <Stack.Screen name="ModalVideo" component={ModalVideo} />
      <Stack.Screen name="ModalWebView" component={ModalWebView} />
      <Stack.Screen name="ModalCastConnect" component={ModalCastConnectScreen} />
      <Stack.Screen name="MediaShowCaseScreen" component={MediaShowCaseScreen} />
      <Stack.Screen name="AppNavigation" component={AppNavigation} />
      <Stack.Screen name="StackAuth" component={StackAuth} />

    </Stack.Navigator>
  );
};


export default RootNavigator;
