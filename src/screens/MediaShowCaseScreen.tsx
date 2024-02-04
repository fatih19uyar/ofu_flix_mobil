import React from 'react';
import styled from 'styled-components/native';
import { colors, fonts, gStyle, images } from '../constants';

// components
import Header from '../components/Header/Header';
import { ContentItem } from '../store/content/type';
import { RouteProp, useRoute } from '@react-navigation/native';
import VideoPlayer from '../components/VideoPlayer';
import { Image, ImageStyle, StatusBar } from 'react-native';
import StarRating from '../components/StarRating';

const Container = styled.View`
  ${gStyle.container}
`;

const VideoContainer = styled.View`
  margin-top: 10px;
`;

const DescriptionContainer = styled.Text`
  color: ${colors.white};
  font-family: ${fonts.regular};
  font-size: 16px;
  text-align: left;
  padding: 10px;
`;

const HeadingContainer = styled.View`
  border-bottom-color: ${colors.moreSectionBorder};
  border-bottom-width: 1px;
  padding-horizontal: 8px;
  padding-vertical: 16px;
`;

const HeadingText = styled.Text`
  color: ${colors.moreSectionText};
  font-family: ${fonts.bold};
  font-size: 16px;
  text-transform: uppercase;
`;
interface StyledImageProps {
  source: ImageStyle;
  type: 'rectangle' | 'round';
}

const StyledImage = styled(Image)<StyledImageProps>`
  padding: 10px;` ;

const BannerContainer =  styled.View`
justify-content: center;
align-items: center;
padding: 10px;
`;

type MediaShowCaseScreenProps = {
  route?: RouteProp<{ MediaShowCaseScreen: ContentItem }>;
};

const MediaShowCaseScreen: React.FC<MediaShowCaseScreenProps> = () => {
  const { params } = useRoute<RouteProp<{ MediaShowCaseScreen: ContentItem }>>();

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <Header bg={colors.headerBarBg} showBack title={params.title} />
      <VideoContainer>
        <VideoPlayer id="DOOxUy-68X0" />
      </VideoContainer>
      <HeadingContainer>
        <HeadingText>{params?.title}</HeadingText>
      </HeadingContainer>
      <DescriptionContainer>{params.desc}</DescriptionContainer>
      <StarRating touchStatus={false} rateStatus={params.rate ?? 0} />
      <BannerContainer>
        <StyledImage
          source={images[params.image] as ImageStyle}
          type={'round'}
        />
      </BannerContainer>
    </Container>
  );
};

export default MediaShowCaseScreen;
