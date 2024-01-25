import React, { FC } from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity, View } from 'react-native';
import { colors, fonts, gStyle } from '../../constants';
import SvgArrowRight from '../../assets/icons/Svg.ArrowRight';

// icons

interface TouchLineItemProps {
  onPress: () => void;
  text: string;
  icon?: React.ReactElement;
  iconSize?: number;
  showArrow?: boolean;
  showBorder?: boolean;
}

const Container = styled(TouchableOpacity)<{ showBorder?: boolean }>`
  border-top-color: ${colors.black};
  border-top-width: ${(props) => (props.showBorder ? '2px' : '0')};
  flex-direction: row;
  justify-content: space-between;
  padding-horizontal: 16px;
  padding-vertical: 12px;
`;

const IconContainer = styled(View)`
  justify-content: center;
  margin-right: 16px;
`;

const TextStyled = styled.Text`
  color: ${colors.textGrey};
  flex: 2;
  font-family: ${fonts.regular};
  font-size: 16px;
`;

const ArrowContainer = styled(View)`
  justify-content: center;
`;

const TouchLineItem: FC<TouchLineItemProps> = ({
  icon,
  iconSize = 20,
  onPress,
  showArrow = true,
  showBorder = false,
  text,
}) => (
  <Container activeOpacity={gStyle.activeOpacity} onPress={onPress} showBorder={showBorder}>
    {icon && <IconContainer>{React.cloneElement(icon, { size: iconSize })}</IconContainer>}
    <TextStyled>{text}</TextStyled>
    {showArrow && (
      <ArrowContainer>
        <SvgArrowRight size={iconSize} />
      </ArrowContainer>
    )}
  </Container>
);

export default TouchLineItem;
