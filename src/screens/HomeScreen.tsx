import * as React from 'react';
import { NativeScrollEvent, NativeSyntheticEvent, ScrollView, Text, View } from 'react-native';
import { useScrollToTop } from '@react-navigation/native';
import { gStyle } from '../constants';

// components
import Cast from '../components/Cast';
import ShowScroller from '../components/ShowScroller';
import HeaderHome from '../components/Header/HeaderHome';
import PromotionBanner from '../components/Promotion/PromotionBanner';
import ShowDetailsModal from '../components/ShowDetailsModal';

import { useTypedNavigation } from '../common/hooks/useNavigation';

const Home: React.FC = () => {
  // on active tab press, scroll to top
  const ref = React.useRef(null);
  useScrollToTop(ref);
  // local state
  const [showHeader, setShowHeader] = React.useState(true);
  const [offset, setOffset] = React.useState(0);

  const onScroll = (event:  NativeSyntheticEvent<NativeScrollEvent>) => {
    let show = showHeader;
    const currentOffset = event.nativeEvent.contentOffset.y;
    show = currentOffset < offset;

    if (show !== showHeader || offset <= 0) {
      // account for negative value with "bounce" offset
      if (offset <= 0) show = true;

      setShowHeader(show);
    }

    setOffset(currentOffset);
  };
  
  return (
    <View style={gStyle.container}>
      <HeaderHome show={showHeader} />

      <ScrollView
        ref={ref}
        bounces
        onScroll={onScroll}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}>
        <PromotionBanner/>

        <Text style={gStyle.heading}>Previews</Text>
        <ShowScroller dataset="previews" />

        <Text style={gStyle.heading}>My List</Text>
        <ShowScroller dataset="myList" />

        <Text style={gStyle.heading}>Popular on OfuFlix</Text>
        <ShowScroller dataset="dumbData" />

        <Text style={gStyle.heading}>Trending Now</Text>
        <ShowScroller dataset="previews" />

        <View style={gStyle.spacer3} />
      </ScrollView>
      <Cast />
      <ShowDetailsModal />
    </View>
  );
};

export default Home;
