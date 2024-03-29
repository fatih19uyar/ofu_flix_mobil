import React from 'react';
import styled from 'styled-components/native';
import { colors, gStyle } from '../../constants';

// components
import Header from '../../components/Header/Header';

const Container = styled.View`
  ${gStyle.container}
`;

const MoreNotifications: React.FC = () => {
  return (
    <Container>
      <Header bg={colors.headerBarBg} showBack title="Notifications" />
    </Container>
  );
};

export default MoreNotifications;
