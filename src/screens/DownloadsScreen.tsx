import React from 'react';
import styled from 'styled-components/native';
import { colors, fonts, gStyle } from '../constants';

// components
import Cast from '../components/Cast';
import Header from '../components/Header/Header';

// icons
import SvgDownloads from '../assets/icons/Svg.Downloads';

const Container = styled.View`
  ${gStyle.container}
`;

const ContainerIcon = styled.View`
  align-items: center;
  align-self: center;
  background-color: ${colors.downloadsIconBg};
  border-radius: 96px;
  height: 140px;
  justify-content: center;
  margin-bottom: 32px;
  margin-top: 48px;
  width: 140px;
`;

const Description = styled.Text`
  align-self: center;
  color: ${colors.white};
  font-family: ${fonts.regular};
  font-size: 16px;
  margin-bottom: 48px;
  text-align: center;
  width: 300px;
`;

const Button = styled.TouchableOpacity`
  align-items: center;
  align-self: center;
  border-color: ${colors.white};
  border-width: 1px;
  justify-content: center;
  padding: 16px;
`;

const ButtonText = styled.Text`
  color: ${colors.white};
  font-size: 16px;
  text-align: center;
`;

function Downloads() {
  return (
    <Container>
      <Header bg={colors.headerBarBg} title="My Downloads" />

      <ContainerIcon>
        <SvgDownloads fill={colors.bgGrey} size={80} />
      </ContainerIcon>

      <Description>
        Movies and TV shows that you download appear here.
      </Description>

      <Button>
        <ButtonText>FIND SOMETHING TO DOWNLOAD</ButtonText>
      </Button>

      <Cast />
    </Container>
  );
}

export default Downloads;
