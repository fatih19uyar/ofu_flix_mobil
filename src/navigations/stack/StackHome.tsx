import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
// import TvShowsScreen from '../screens/TvShows';
// import MoviesScreen from '../screens/Movies';
// import MyListScreen from '../screens/MyList';
import HomeScreen from '../../screens/HomeScreen';

const Stack = createNativeStackNavigator();

function StackHome() {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'slide_from_right',
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      {/* <Stack.Screen name="TvShows" component={TvShowsScreen} />
      <Stack.Screen name="Movies" component={MoviesScreen} />
      <Stack.Screen name="MyList" component={MyListScreen} /> */}
    </Stack.Navigator>
  );
}

export default StackHome;
