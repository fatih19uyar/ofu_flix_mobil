import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// screens
import MoreScreen from '../../screens/MoreScreens/More';
import MoreAppSettingsScreen from '../../screens/MoreScreens/MoreAppSettings';
import MoreNotificationsScreen from '../../screens/MoreScreens/MoreNotifications';
import MoreMyListScreen from '../../screens/MoreScreens/MoreMyList';
type StackParamList = {
  More: undefined;
  MoreAppSettings: undefined;
  MoreNotifications: undefined;
  MoreMyList: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

function StackMore() {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'slide_from_right',
        headerShown: false,
      }}>
      <Stack.Screen name="More" component={MoreScreen} />
      <Stack.Screen name="MoreAppSettings" component={MoreAppSettingsScreen} />
      <Stack.Screen name="MoreMyList" component={MoreMyListScreen} />
      <Stack.Screen
        name="MoreNotifications"
        component={MoreNotificationsScreen}
      />
    </Stack.Navigator>
  );
}

export default StackMore;
