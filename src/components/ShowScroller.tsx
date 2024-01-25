// ShowScroller.tsx

import React from 'react';
import { FlatList, Image, ViewStyle, ImageStyle } from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import { colors, gStyle, images } from '../constants';
import data from '../mockData/data';
import { Data } from '../types/type';

interface ShowScrollerProps {
  dataset?: keyof Data;
  type?: 'rectangle' | 'round';
}

const ShowScroller: React.FC<ShowScrollerProps> = ({
  dataset = 'dumbData',
  type = 'rectangle',
}) => {
  const dataTypes: Data = data;
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
            <StyledImage
              source={images[item.image] as ImageStyle}
              type={type}
            />
          );
        }

        return renderItem;
      }}
      showsHorizontalScrollIndicator={false}
    />
  );
};

ShowScroller.defaultProps = {
  dataset: 'dumbData',
  type: 'rectangle',
};

ShowScroller.propTypes = {
  dataset: PropTypes.oneOf(['dumbData', 'myList', 'previews']),
  type: PropTypes.oneOf(['rectangle', 'round']),
};

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

export default ShowScroller;
