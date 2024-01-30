import React from 'react';
import {ScrollView, Image, Text, ImageStyle, View} from 'react-native';
import styled from 'styled-components/native';
import {colors, fonts, images} from '../constants';
import {useScrollToTop} from '@react-navigation/native';

const SearchResultItem = styled.View`
  flex-direction: row;
  margin-bottom: 4px;
  background-color: ${colors.black20};
  border-bottom-width: 4px;
  padding: 4px;
  border-bottom-color: ${colors.black40};
`;
interface StyledImageProps {
  source: ImageStyle;
}

const StyledImage = styled(Image)`
  width: 80px;
  height: 80px;
  resize-mode: cover;
  border-radius: 8px;
` as React.ComponentType<StyledImageProps & ImageStyle>;

const TitleContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
interface SearchResultTextProps {
  style?: 'desc' | 'title' | 'date';
}

const SearchResultText = styled.Text<SearchResultTextProps>`
  align-self: center;
  color: ${colors.white};
  font-family: ${({style}) =>
    style === 'title' ? fonts.bold : style === 'date' ? fonts.light : fonts.medium};
  font-size: ${({style}) => (style === 'date' ? '14px' : '16px')};
  text-align: center;
  width: 300px;
`;
const EmptyDescription = styled.Text`
  align-self: center;
  color: ${colors.white};
  font-family: ${fonts.regular};
  font-size: 32px;
  margin-bottom: 48px;
  text-align: center;
  width: 300px;
  opacity: 0.5;
`;

const EmptyView = styled.View`
  flex: 1;
  justify-content: center;
`;

interface SearchScrollViewProps {
  dataList: Array<{id: number; title: string; image: string}> | [];
}

const SearchScrollView: React.FC<SearchScrollViewProps> = ({dataList}) => {
  const now = new Date();
  const formattedDate = `${now.getDate()}.${now.getMonth() + 1}.${now.getFullYear()}`;

  const [showHeader, setShowHeader] = React.useState(true);
  const [offset, setOffset] = React.useState(0);

  const ref = React.useRef(null);
  useScrollToTop(ref);

  const onScroll = (event: any) => {
    let show = showHeader;
    const currentOffset = event.nativeEvent.contentOffset.y;
    show = currentOffset < offset;
    if (show !== showHeader || offset <= 0) {
      if (offset <= 0) show = true;
      setShowHeader(show);
    }
    setOffset(currentOffset);
  };
  
  return dataList.length > 0 ? (
    <ScrollView
      ref={ref}
      bounces
      onScroll={onScroll}
      scrollEventThrottle={16}
      showsVerticalScrollIndicator={false}>
      {dataList.map(item => (
        <SearchResultItem key={item.id}>
          <StyledImage source={images[item.image] as ImageStyle} />
          <TitleContainer>
            <SearchResultText style="title">{item.title}</SearchResultText>
            <SearchResultText style="desc">desc</SearchResultText>
            <SearchResultText style="date">{formattedDate}</SearchResultText>
          </TitleContainer>
        </SearchResultItem>
      ))}
    </ScrollView>
  ) : (
    <EmptyView>
      <EmptyDescription>No found...</EmptyDescription>
    </EmptyView>
  );
};

export default SearchScrollView;
