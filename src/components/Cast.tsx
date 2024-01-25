import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { colors, gStyle } from '../constants';
import SvgCast from '../assets/icons/Svg.Cast';
import { useTypedNavigation } from '../common/hooks/useNavigation';


const Cast: React.FC = () => {
  const navigation = useTypedNavigation();

  return (
    <Container
      activeOpacity={gStyle.activeOpacity}
      onPress={() => navigation.navigate('ModalCastConnect')}
    >
      <SvgCast />
    </Container>
  );
};

const Container = styled(TouchableOpacity)`
  align-items: center;
  background-color: ${colors.castGrey};
  border-radius: 26px;
  bottom: 16px;
  height: 52px;
  justify-content: center;
  position: absolute;
  right: 16px;
  shadow-color: ${colors.black};
  shadow-offset: 0px 2px;
  shadow-opacity: 0.4;
  shadow-radius: 4px;
  width: 52px;
`;

export default Cast;
