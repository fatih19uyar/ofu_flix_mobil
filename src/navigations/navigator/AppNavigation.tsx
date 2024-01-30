import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigation from './TabNavigation';
import ProfileSelectionScreen from '../../screens/ProfileSelectionScreen';

const Stack = createStackNavigator();

const AppNavigation = () => {

  return (
    <Stack.Navigator 
    initialRouteName="ProfileSelectionScreen"
    screenOptions={{
      headerShown: false,
    }}>
        <Stack.Screen name="TabNavigation" component={TabNavigation} />
        <Stack.Screen name="ProfileSelectionScreen" component={ProfileSelectionScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
