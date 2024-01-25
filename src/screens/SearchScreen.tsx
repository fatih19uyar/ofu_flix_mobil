import React from 'react';
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import { gStyle } from '../constants';

// components
import Cast from '../components/Cast';
import HeaderSearch from '../components/Header/HeaderSearch';

function Search() {
  return (
    <>
      <TouchableWithoutFeedback accessible={false} onPress={Keyboard.dismiss}>
        <View style={gStyle.container}>
          <HeaderSearch />
        </View>
      </TouchableWithoutFeedback>
      <Cast />
    </>
  );
}

export default Search;
