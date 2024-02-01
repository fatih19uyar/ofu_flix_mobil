import React from 'react';
import { Text, View } from 'react-native';
import { gStyle } from '../../constants';

// components
import HeaderHome from '../../components/Header/HeaderHome';
import Cast from '../../components/Cast';

const MyList: React.FC = () => {
  return (
    <View style={gStyle.container}>
      <HeaderHome show />

      <View style={gStyle.spacer12} />

      <View style={gStyle.pHHalf}>
        
      </View>

      <Cast />
    </View>
  );
};

export default MyList;
