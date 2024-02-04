import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import {TouchableOpacity, View, Text} from 'react-native';
import {colors, fonts, gStyle} from '../../constants';
import SvgPlay from '../../assets/icons/Svg.Play';
import {useTypedNavigation} from '../../common/hooks/useNavigation';

const Container = styled(TouchableOpacity)`
  align-items: center;
  background-color: ${colors.white};
  border-radius: 4px;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  padding-vertical: 8px;
`;

const TextStyled = styled(Text)<{textSize: number}>`
  color: ${colors.black};
  font-family: ${fonts.medium};
  font-size: ${props => props.textSize}px;
`;

const IconContainer = styled(View)`
  justify-content: center;
`;

interface PromotionPlayProps {
  icon?: React.ReactElement;
  iconSize?: number;
  onPress: () => void;
  text?: string;
  textSize?: number;
}

const PromotionPlay: React.FC<PromotionPlayProps> = ({
  icon = <SvgPlay />,
  onPress,
  text = 'Play',
  textSize = 18,
  iconSize = 24,
}) => {
  const navigation = useTypedNavigation();
  const onClick = () => {
    console.log('test');
  };
  const adjustedIcon = React.cloneElement(icon, { size: iconSize, fill: colors.black });

  return (
    <Container activeOpacity={gStyle.activeOpacity} onPress={onClick}>
      <IconContainer>
        {adjustedIcon}
      </IconContainer>
      <TextStyled textSize={textSize}>{text}</TextStyled>
    </Container>
  );
};

export default PromotionPlay;
