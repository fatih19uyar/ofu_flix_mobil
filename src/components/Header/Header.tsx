import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import styled from 'styled-components/native';
import {colors, device, fonts, gStyle} from '../../constants';

import SvgArrowLeft from '../../assets/icons/Svg.ArrowLeft';
import { useTypedNavigation } from '../../common/hooks/useNavigation';

interface HeaderProps {
  bg?: number | string;
  close?: boolean;
  closeText?: string;
  showBack?: boolean;
  showLogo?: boolean;
  title?: string | null;
}

const Container = styled.View<{backgroundColor: string | number}>`
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 4px;
  padding-horizontal: 16px;
  padding-top: ${device.iPhoneNotch ? '54px' : '30px'};
  background-color: ${props => props.backgroundColor};
`;

const BackButton = styled(TouchableOpacity)`
  align-self: center;
  flex: 1;
`;

const TitleContainer = styled.View`
  flex: 4;
  height: 35px;
  justify-content: flex-end;
`;

const TitleText = styled.Text`
  color: ${colors.heading};
  font-size: 18px;
  padding-bottom: 4px;
  text-align: center;
`;

const LogoFullContainer = styled.View`
  align-items: center;
  flex: 2;
  height: 35px;
  justify-content: center;
`;

const LogoFullImage = styled.Image`
  height: 26px;
  width: 95px;
`;

const CloseButton = styled(TouchableOpacity)`
  align-items: flex-end;
  flex: 1;
  height: 35px;
  justify-content: center;
`;

const CloseText = styled.Text`
  color: ${colors.white};
  font-family: ${fonts.light};
  font-size: 16px;
`;

const Header: React.FC<HeaderProps> = ({
  bg = colors.black,
  close = false,
  closeText = 'Cancel',
  showBack = false,
  showLogo = false,
  title = null,
}) => {
  const navigation = useTypedNavigation();

  return (
    <Container backgroundColor={bg}>
      {showBack && (
        <BackButton
          activeOpacity={gStyle.activeOpacity}
          onPress={() => navigation.goBack()}>
          <SvgArrowLeft />
        </BackButton>
      )}

      {title && (
        <TitleContainer>
          <TitleText>{title}</TitleText>
        </TitleContainer>
      )}

      {showLogo && (
        <>
          <View style={gStyle.flex1} />
          <LogoFullContainer>
            <LogoFullImage source={require('../../assets/images/ofu_flix.png')} />
          </LogoFullContainer>
        </>
      )}

      {showBack && !close && <View style={gStyle.flex1} />}

      {close && (
        <CloseButton
          activeOpacity={gStyle.activeOpacity}
          onPress={() => navigation.goBack()}>
          <CloseText>{closeText}</CloseText>
        </CloseButton>
      )}
    </Container>
  );
};

Header.defaultProps = {
  bg: colors.black,
  close: false,
  closeText: 'Cancel',
  showBack: false,
  showLogo: false,
  title: null,
};

export default Header;
