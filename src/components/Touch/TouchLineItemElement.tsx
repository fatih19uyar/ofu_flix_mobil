import React, { FC } from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity, View } from 'react-native';
import { colors, fonts, gStyle } from '../../constants';

interface TouchLineItemElementProps {
  element: React.ReactElement;
  onPress: () => void;
  text: string;
}

const Container = styled(TouchableOpacity)`
  flex-direction: row;
  justify-content: space-between;
  padding-horizontal: 8px;
  padding-vertical: 16px;
`;

const TextContainer = styled.Text`
  color: ${colors.heading};
  font-family: ${fonts.regular};
  font-size: 16px;
`;

const ElementContainer = styled.View`
  justify-content: center;
  margin-right: 4px;
`;

const TouchLineItemElement: FC<TouchLineItemElementProps> = ({
  element,
  onPress,
  text,
}) => (
  <Container activeOpacity={gStyle.activeOpacity} onPress={onPress}>
    <TextContainer>{text}</TextContainer>
    <ElementContainer>{React.cloneElement(element)}</ElementContainer>
  </Container>
);

export default TouchLineItemElement;
