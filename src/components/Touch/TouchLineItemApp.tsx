import React, { FC } from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { colors, fonts, gStyle } from '../../constants';

// icons
import SvgArrowRight from '../../assets/icons/Svg.ArrowRight';

interface TouchLineItemAppProps {
  iconSize?: number;
  onPress: () => void;
  showArrow?: boolean;
  tagline?: string | null;
  text: string;
}

const Container = styled(TouchableOpacity)`
  flex-direction: row;
  justify-content: space-between;
  padding-horizontal: 8px;
  padding-vertical: 16px;
`;

const TextContainer = styled.View``;

const TaglineText = styled.Text`
  color: ${colors.moreSectionText};
  font-family: ${fonts.regular};
  font-size: 12px;
  margin-top: 4px;
`;

const MainText = styled.Text`
  color: ${colors.heading};
  font-family: ${fonts.regular};
  font-size: 16px;
`;

const ArrowContainer = styled.View`
  justify-content: center;
`;

const TouchLineItemApp: FC<TouchLineItemAppProps> = ({
  iconSize = 20,
  onPress,
  showArrow = true,
  tagline,
  text,
}) => (
  <Container activeOpacity={gStyle.activeOpacity} onPress={onPress}>
    <TextContainer>
      <MainText>{text}</MainText>
      {tagline && <TaglineText>{tagline}</TaglineText>}
    </TextContainer>
    {showArrow && (
      <ArrowContainer>
        <SvgArrowRight size={iconSize} />
      </ArrowContainer>
    )}
  </Container>
);



export default TouchLineItemApp;
