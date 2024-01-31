import React from 'react';
import { FlatList, Image, ViewStyle, ImageStyle, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { colors, gStyle, images } from '../constants';
import data from '../mockData/data';
import { Data } from '../types/type';

interface ShowScrollerProps {
  dataset?: keyof Data;
  type?: 'rectangle' | 'round';
  handlePress: (data: Data[keyof Data][0]) => void;
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
` as React.ComponentType<StyledImageProps & ImageStyle>;

const ShowScroller: React.FC<ShowScrollerProps> = ({
  dataset = 'dumbData',
  type = 'rectangle',
  handlePress
}) => {
  const dataTypes = data;
  const dataArray = dataTypes[dataset];

  return (
    <FlatList
      contentContainerStyle={gStyle.pHHalf}
      data={dataArray}
      horizontal
      keyExtractor={({ id }) => id.toString()}
      renderItem={({ item }) => {

        let renderItem: React.ReactNode = <StyledView type={type} />;

        if (item.image) {
          renderItem = (
            <StyledTouchableOpacity onPress={() => handlePress(item)}>
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
