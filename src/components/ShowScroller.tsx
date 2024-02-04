import React from 'react';
import { FlatList, Image, ViewStyle, ImageStyle, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { colors, gStyle, images } from '../constants';
import { Data } from '../types/type';
import { useAppDispatch, useAppSelector } from '../common/hooks/useStore';
import { mockDataType } from '../mockData/type';
import { setSelectedContent } from '../store/content/contentSlice';

interface ShowScrollerProps {
  dataset: keyof Data;
  type?: 'rectangle' | 'round';
}
const StyledTouchableOpacity = styled(TouchableOpacity)`
  margin-right: 10px;
`;

interface StyledViewProps {
  type: 'rectangle' | 'round';
}

const StyledView = styled.View<StyledViewProps>`
  background-color: ${colors.infoGrey};
  height: ${({ type }) => (type === 'rectangle' ? 131 : 96)}px;
  margin-right: 8px;
  width: ${({ type }) => (type === 'rectangle' ? 91 : 96)}px;
` as React.ComponentType<StyledViewProps & ViewStyle>;

interface StyledImageProps {
  source: ImageStyle;
  type: 'rectangle' | 'round';
}

const StyledImage = styled(Image)<StyledImageProps>`
  height: ${({ type }) => (type === 'rectangle' ? 131 : 96)}px;
  margin-right: 8px;
  resize-mode: contain;
  width: ${({ type }) => (type === 'rectangle' ? 91 : 96)}px;
` ;

const ShowScroller: React.FC<ShowScrollerProps> = ({
  dataset = 'dumpData',
  type = 'rectangle',
}) => {
  const dispatch = useAppDispatch();
  const dataArray = useAppSelector(state => {
    switch (dataset) {
      case 'myList':
        return state.content.myList;
      case 'previews':
        return state.content.previews;
      case 'dumpData':
      default:
        return state.content.dumpData;
    }
  });

  const onHandlePress = (item: mockDataType) => {
    dispatch(setSelectedContent(item));
  };
  return (
    <FlatList
      contentContainerStyle={gStyle.pHHalf}
      data={dataArray}
      horizontal
      keyExtractor={({ id }) => (id ? id.toString() : Math.random().toString())}
      renderItem={({ item }) => {

        let renderItem: React.ReactNode = <StyledView type={type} />;

        if (item.image) {
          renderItem = (
            <StyledTouchableOpacity onPress={() => onHandlePress(item)}>
              <StyledImage
                source={images[item.image] as ImageStyle}
                type={type}
              />
            </StyledTouchableOpacity>
          );
        }
        return renderItem;
      }}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default ShowScroller;
