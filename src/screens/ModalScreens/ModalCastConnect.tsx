import React from 'react';
import styled from 'styled-components/native';
import { colors, fonts, gStyle } from '../../constants';

// components
import Header from '../../components/Header/Header';

const Container = styled.View`
  ${gStyle.container}
`;

const ConnectContainer = styled.View`
  background-color: ${colors.castConnectBg};
  padding: 24px;
`;

const ConnectText = styled.Text`
  color: ${colors.textGrey};
  font-family: ${fonts.regular};
  font-size: 16px;
  text-align: center;
`;

const DeviceText = styled.Text`
  color: ${colors.castConnectDeviceText};
  font-family: ${fonts.bold};
  font-size: 16px;
  padding: 20px;
  text-align: center;
`;

const ModalCastConnect: React.FC = () => {
  return (
    <Container>
      <Header close showLogo />

      <ConnectContainer>
        <ConnectText>Connect to device</ConnectText>
      </ConnectContainer>

      <DeviceText>[TV] Samsung 7 Series (43)</DeviceText>
    </Container>
  );
};

export default ModalCastConnect;
