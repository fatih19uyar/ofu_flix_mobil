import React, { useState, useRef } from 'react';
import { TouchableOpacity, Animated, Easing, ImageStyle } from 'react-native';
import styled from 'styled-components/native';
import { colors, device, fonts, gStyle, images } from '../constants';
import SvgPlus from '../assets/icons/Svg.Plus';
import { useTypedNavigation } from '../common/hooks/useNavigation';
import { StackActions } from '@react-navigation/native';
import data from '../mockData/data';

interface StyledImageProps {
  source: ImageStyle;
}

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
` as React.ComponentType<StyledImageProps & ImageStyle>;

const Username = styled.Text<{ active?: boolean }>`
  color: ${({ active }) => (active ? colors.white : colors.inactiveGrey)};
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

interface ProfileListProps {
  handleSelection: (id: number) => void;
}

const ProfileList: React.FC<ProfileListProps> = ({ handleSelection }) => {
  const navigation = useTypedNavigation();
  const mockProfiles = data['profileData'];

  const profileAnimations: Record<number, Animated.Value> = {};
  const selectedProfileId = useRef<number | null>(null);

  const createAnimation = (profileId: number) => {
    if (!profileAnimations[profileId]) {
      profileAnimations[profileId] = new Animated.Value(1);
    }
    return profileAnimations[profileId];
  };

  const selectedProfile = (profile: { id: number }) => {
    if (profile.id !== selectedProfileId.current) {
      selectedProfileId.current = profile.id;

      const scaleValue = createAnimation(profile.id);

      Animated.timing(scaleValue, {
        toValue: 1.4,
        duration: 300,
        easing: Easing.ease,
        useNativeDriver: true,
      }).start();

      handleSelection(profile.id);

      setTimeout(() => {
        navigation.dispatch(StackActions.replace('TabNavigation'));
        navigation.navigate('TabNavigation', profile);
      }, 300);
    }
  };

  const resetAnimation = (profileId: number) => {
    const scaleValue = createAnimation(profileId);

    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 0,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Container>
      <ContainerAccounts>
        {mockProfiles.map((profile) => (
          <ContainerUser key={profile.id}>
            <TouchableOpacity
              activeOpacity={gStyle.activeOpacity}
              onPress={() => selectedProfile(profile)}
              onBlur={() => resetAnimation(profile.id)}
            >
              <Animated.View
                style={{
                  transform: [{ scale: createAnimation(profile.id) }],
                }}
              >
                <Avatar key={profile.id} source={images[profile.avatar] as ImageStyle} />
              </Animated.View>
              <Username>{profile.name}</Username>
            </TouchableOpacity>
          </ContainerUser>
        ))}
        <TouchableOpacity
          activeOpacity={gStyle.activeOpacity}
          onPress={() => navigation.navigate('ModalAddProfile')}
        >
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
