import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { TouchableOpacity, View, Text } from 'react-native';
import { colors, fonts, gStyle } from '../../constants';
import SvgPlay from '../../assets/icons/Svg.Play';

const Container = styled(TouchableOpacity)`
  align-items: center;
  background-color: ${colors.white};
  border-radius: 4px;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  padding-vertical: 8px;
`;

const TextStyled = styled(Text)`
  color: ${colors.black};
  font-family: ${fonts.medium};
  font-size: 18px;
`;

const IconContainer = styled(View)`
  justify-content: center;
`;

interface PromotionPlayProps {
  icon?: React.ReactElement;
  onPress: () => void;
  text?: string;
}

const PromotionPlay: React.FC<PromotionPlayProps> = ({ icon = <SvgPlay />, onPress, text = 'Play' }) => {
  return (
    <Container activeOpacity={gStyle.activeOpacity} onPress={onPress}>
      <IconContainer>{React.cloneElement(icon, { fill: colors.black })}</IconContainer>
      <TextStyled>{text}</TextStyled>
    </Container>
  );
};

PromotionPlay.propTypes = {
  onPress: PropTypes.func.isRequired,
  icon: PropTypes.element,
  text: PropTypes.string,
};

export default PromotionPlay;
