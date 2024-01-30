import { StatusBar } from 'react-native'
import React from 'react'
import styled from 'styled-components/native';
import ProfileList from '../components/ProfileList';

type Props = {}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-horizontal: 20px;
`;

const Logo = styled.Image`
  margin-bottom: 20px;
`;

const ProfileSelectionScreen: React.FC = (props: Props) => {
  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <Logo source={require('../assets/images/ofu_flix.png')} />
      <ProfileList/>
    </Container>
  )
}

export default ProfileSelectionScreen