import React, { useEffect } from 'react';
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import { gStyle } from '../constants';

// components
import Cast from '../components/Cast';
import HeaderSearch from '../components/Header/HeaderSearch';

function Search() {
  const [search, setSearch] = React.useState('');

  useEffect(()=>{
    console.log(search)
  },[search])
  return (
    <>
      <TouchableWithoutFeedback accessible={false} onPress={Keyboard.dismiss}>
        <View style={gStyle.container}>
          <HeaderSearch setSearchText={setSearch} />
        </View>
      </TouchableWithoutFeedback>
      <Cast />
    </>
  );
}

export default Search;
