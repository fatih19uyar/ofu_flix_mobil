import React, {useRef} from 'react';
import styled from 'styled-components/native';
import {colors, gStyle} from '../constants';

// components
import Header from '../components/Header/Header';
import {ContentItem} from '../store/content/type';
import {RouteProp, useRoute} from '@react-navigation/native';
import VideoPlayer from '../components/VideoPlayer';

const Container = styled.View`
  ${gStyle.container}
`;

const VideoContainer = styled.View`
  margin-top: 20px;
`;

type RootStackParamList = {
  MediaShowCaseScreen: {selectedItem: ContentItem};
};

type MediaShowCaseScreenProps = {
  route?: RouteProp<RootStackParamList, 'MediaShowCaseScreen'>;
};

const MediaShowCaseScreen: React.FC<MediaShowCaseScreenProps> = () => {
  const {params} =
    useRoute<RouteProp<RootStackParamList, 'MediaShowCaseScreen'>>();
  const {selectedItem} = params;
  console.log(selectedItem);

  return (
    <Container>
      <Header title="Video Player" />
      <VideoContainer>
        <VideoPlayer url="" />
      </VideoContainer>
    </Container>
  );
};

export default MediaShowCaseScreen;
