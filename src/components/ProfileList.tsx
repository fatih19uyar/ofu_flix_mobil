import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {colors, device, fonts, gStyle, images} from '../constants';

// icons
import SvgPlus from '../assets/icons/Svg.Plus';
import {useTypedNavigation} from '../common/hooks/useNavigation';
import { StackActions } from '@react-navigation/native';

const Container = styled.View`
  align-items: center;
  background-color: ${colors.black};
  width: 100%;
`;

const ContainerAccounts = styled.View`
  align-items: center;
  background-color: ${colors.black};
  flex-direction: row;
  justify-content: center;
  padding-bottom: 30px;
  padding-top: ${device.iPhoneNotch ? '64px' : '40px'};
  width: 100%;
`;

const ContainerUser = styled.View`
  align-items: center;
  margin-horizontal: 10px;
`;

const Avatar = styled.Image`
  height: 92px;
  margin-bottom: 6px;
  resize-mode: contain;
  width: 92px;
`;

const Username = styled.Text<{active?: boolean}>`
  color: ${({active}) => (active ? colors.white : colors.inactiveGrey)};
  font-family: ${fonts.medium};
  font-size: 12px;
`;

const ContainerPlus = styled.View`
  align-items: center;
  background-color: ${colors.moreAddProfileBg};
  border-radius: 32px;
  height: 64px;
  justify-content: center;
  margin-bottom: 4px;
  width: 64px;
`;

interface ProfileList {}

const ProfileList: React.FC<ProfileList> = () => {
    const navigation = useTypedNavigation();
    const mockProfiles = [
        { id: 1, name: 'John Doe', avatar: images.robot },
        { id: 2, name: 'Jane Smith', avatar: images.penguin },
      ];
      const selectedProfile = (profile: {}) => {
        navigation.dispatch(StackActions.replace('TabNavigation'));
        navigation.navigate("TabNavigation", profile);
      };
    
    return (
      <Container>
        <ContainerAccounts>
          {mockProfiles.map((profile) => (
            <ContainerUser key={profile.id}>
              <TouchableOpacity
                activeOpacity={gStyle.activeOpacity}
                onPress={() => selectedProfile(profile)}>
                <Avatar source={profile.avatar} />
                <Username>{profile.name}</Username>
              </TouchableOpacity>
            </ContainerUser>
          ))}
          <TouchableOpacity
            activeOpacity={gStyle.activeOpacity}
            onPress={() => navigation.navigate('ModalAddProfile')}>
            <ContainerUser>
              <ContainerPlus>
                <SvgPlus active={false} size={40} />
              </ContainerPlus>
              <Username>Add Profile</Username>
            </ContainerUser>
          </TouchableOpacity>
        </ContainerAccounts>
      </Container>
    );
  };
  

export default ProfileList;
