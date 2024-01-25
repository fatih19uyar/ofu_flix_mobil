import React, {ReactElement} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import {colors, fonts, gStyle} from '../../constants';

interface TouchTextIconProps {
  icon: ReactElement;
  iconSize?: number;
  onPress: () => void;
  text: string;
  width?: number | string;
}

const Container = styled.TouchableOpacity<{width?: string | number}>`
  align-items: center;
  flex: 1;
  justify-content: center;
  ${props => props.width && `width: ${props.width};`}
`;

const IconView = styled.View`
  justify-content: center;
`;

const StyledText = styled.Text`
  color: ${colors.infoGrey};
  font-family: ${fonts.light};
  margin-top: 2px;
`;

const TouchTextIcon: React.FC<TouchTextIconProps> = ({
  icon,
  iconSize = 20,
  onPress,
  text,
  width,
}) => {
  return (
    <Container
      activeOpacity={gStyle.activeOpacity}
      onPress={onPress}
      width={width}>
      <IconView>{React.cloneElement(icon, {size: iconSize})}</IconView>
      <StyledText>{text}</StyledText>
    </Container>
  );
};


TouchTextIcon.propTypes = {
  icon: PropTypes.element.isRequired,
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  iconSize: PropTypes.number,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default TouchTextIcon;
