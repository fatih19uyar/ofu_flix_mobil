import React from 'react';
import { View } from 'react-native';
import { gStyle } from '../../constants';

// components
import HeaderHome from '../../components/Header/HeaderHome';
import Cast from '../../components/Cast';
import { useAppSelector } from '../../common/hooks/useStore';
import ContentScrollView from '../../components/ContentScrollView';

const MyList: React.FC = () => {
    const myListArrray = useAppSelector(state => state.content.myList)
  return (
    <View style={gStyle.container}>
      <HeaderHome show />
      <View style={gStyle.spacer12} />
        <ContentScrollView dataList={myListArrray}/>
      <View style={gStyle.pHHalf}>
      </View>
      <Cast />
    </View>
  );
};

export default MyList;
