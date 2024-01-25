import React, { useEffect } from 'react';
import Orientation from 'react-native-orientation-locker';
import styled from 'styled-components/native';
import { gStyle } from '../../constants';

const Container = styled.View`
  ${gStyle.container}
`;

const Heading = styled.Text`
  ${gStyle.heading}
`;

const ModalVideo: React.FC = () => {
  useEffect(() => {
    Orientation.lockToLandscape();

    return () => {
      Orientation.lockToPortrait();
    };
  }, []);

  return (
    <Container>
      <Heading>Modal :: Video</Heading>
    </Container>
  );
};

export default ModalVideo;
