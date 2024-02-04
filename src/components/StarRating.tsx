import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import SvgStar from '../assets/icons/Svg.Star';
import styled from 'styled-components/native';

const StarContainer = styled.View`
  padding: 3px;
`;


interface StarRatingProps {
  size?: number;
  rateStatus: number;
}

const StarRating: React.FC<StarRatingProps> = ({size = 24, rateStatus}) => {
  const [rating, setRating] = useState(0);
  const [showAllStars, setShowAllStars] = useState(false);

  const handleRating = (selectedRating: number) => {
    setRating(selectedRating);
    setShowAllStars(!showAllStars);
  };
  const renderStars = () => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      stars.push(
        <TouchableOpacity key={i} onPress={() => handleRating(i)}>
          <StarContainer>
            <SvgStar size={size} hollow={i > rateStatus} />
          </StarContainer>
        </TouchableOpacity>,
      );
    }

    return stars;
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {renderStars()}
    </View>
  );
};

export default StarRating;
