import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Downloads from '../../screens/DownloadsScreen';

const Stack = createNativeStackNavigator();

function StackDownloads() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Downloads"
        component={Downloads}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
}

export default StackDownloads;
