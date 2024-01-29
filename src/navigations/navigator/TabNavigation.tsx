import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {colors, gStyle} from '../../constants';

// icons
import SvgHome from '../../assets/icons/Svg.Home';
import SvgSearch from '../../assets/icons/Svg.Search';
import SvgDownloads from '../../assets/icons/Svg.Downloads';
import SvgMenu from '../../assets/icons/Svg.Menu';

// grabs stacks
import StackDownloads from '../stack/StackDownloads';
import StackHome from '../stack/StackHome';
import StackSearch from '../stack/StackSearch';
import StackMore from '../stack/StackMore';

const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: colors.white,
        tabBarInactiveTintColor: colors.inactiveGrey,
        headerShown: false,
        tabBarIcon: ({color}) => {
          let icon = <SvgHome fill={color} />;

          if (route.name === 'StackSearch') {
            icon = <SvgSearch fill={color} />;
          } else if (route.name === 'StackDownloads') {
            icon = <SvgDownloads fill={color} />;
          } else if (route.name === 'StackMore') {
            icon = <SvgMenu fill={color} />;
          }

          return icon;
        },
        tabBarStyle: gStyle.navTabStyle,
      })}>
      <Tab.Screen
        name="StackHome"
        component={StackHome}
        options={{
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="StackSearch"
        component={StackSearch}
        options={{
          tabBarLabel: 'Search',
        }}
      />
      <Tab.Screen
        name="StackDownloads"
        component={StackDownloads}
        options={{
          tabBarLabel: 'Downloads',
        }}
      />
      <Tab.Screen
        name="StackMore"
        component={StackMore}
        options={{
          tabBarLabel: 'More',
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigation;
