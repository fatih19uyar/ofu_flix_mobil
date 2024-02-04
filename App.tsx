import React, { useEffect } from 'react';
import {DarkTheme, NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import { store } from './src/store';
import LoadingOverlay from './src/components/LoadingOverlay';
import {ThemeProvider} from 'styled-components';
import { initialize } from './src/store/content/contentSlice';

import RootNavigator from './src/navigations/navigator/RootNavigator';
import themes from './src/utils/themeUtils';
import Toast from 'react-native-toast-message';

import './src/i18n/i18n';
import 'intl-pluralrules';

const App = () => {
  const currentTheme = 'light'; // Seçilen tema

  useEffect(() => {
    const initializeApp = ()=> {
      store.dispatch(initialize());
    };
    initializeApp();
  }, [])

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <Provider store={store}>
        <NavigationContainer theme={DarkTheme}>
          <RootNavigator />
        </NavigationContainer>
        <LoadingOverlay />
        <Toast/>
      </Provider>
      </ThemeProvider>
  );
};

export default App;
