import * as React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useScrollToTop } from '@react-navigation/native';
import { gStyle } from '../constants';

// components
import Cast from '../components/Cast';
import ShowScroller from '../components/ShowScroller';
import HeaderHome from '../components/Header/HeaderHome';
import PromotionBanner from '../components/Promotion/PromotionBanner';
import { Data } from '../types/type';
import ShowDetailsModal from '../components/ShowDetailsModal';
import useToastMessage from '../common/hooks/useToastMessage';
import { StatusEnum } from '../utils/colorUtil';

const Home: React.FC = () => {
  const {showToast} = useToastMessage();
  // on active tab press, scroll to top
  const ref = React.useRef(null);
  useScrollToTop(ref);

  // local state
  const [showHeader, setShowHeader] = React.useState(true);
  const [offset, setOffset] = React.useState(0);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState<Data[keyof Data][0] | null>(null);

  const closeModal = () => {
    setModalVisible(false);
    setSelectedItem(null);
  };

  const openModal = (data: Data[keyof Data][0]) => {
    setSelectedItem(data);
    setModalVisible(true);
  };

  const onScroll = (event: any) => {
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
  const handleWatchNow = (id: string) => {
    console.log(id);
    showToast(StatusEnum.SUCCESS, 'Incomming soon...');
    closeModal();
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
        <PromotionBanner />

        <Text style={gStyle.heading}>Previews</Text>
        <ShowScroller dataset="previews"  handlePress={openModal} />

        <Text style={gStyle.heading}>My List</Text>
        <ShowScroller dataset="myList" handlePress={openModal} />

        <Text style={gStyle.heading}>Popular on Netflix</Text>
        <ShowScroller dataset='dumbData' handlePress={openModal} />

        <Text style={gStyle.heading}>Trending Now</Text>
        <ShowScroller dataset='previews' handlePress={openModal} />

        <View style={gStyle.spacer3} />
      </ScrollView>
      <Cast />
      <ShowDetailsModal
        isVisible={modalVisible}
        data={selectedItem}
        onClose={closeModal}
        handleWatchNow={handleWatchNow}
      />
    </View>
  );
};

export default Home;
