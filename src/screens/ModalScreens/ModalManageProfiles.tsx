import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {colors, fonts, gStyle, images} from '../../constants';

// components
import HeaderManage from '../../components/Header/HeaderManage';

// icons
import SvgEdit from '../../assets/icons/Svg.Edit';
import SvgPlus from '../../assets/icons/Svg.Plus';

import {useTypedNavigation} from '../../common/hooks/useNavigation';

interface ModalManageProfilesProps {}

const Container = styled.View`
  ${gStyle.container}
  background-color: ${colors.black};
`;

const ProfilesContainer = styled.View`
  align-self: center;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-horizontal: 16px;
  padding-vertical: 60px;
  width: 280px;
`;

const ProfileContainer = styled.View`
  margin-bottom: 16px;
  position: relative;
`;

const SvgContainer = styled.View`
  align-items: center;
  height: 108px;
  justify-content: center;
  position: absolute;
  width: 108px;
`;

const Overlay = styled.View`
  background-color: ${colors.black50};
  height: 108px;
  position: absolute;
  top: 0;
  width: 108px;
`;

const Avatar = styled.Image`
  height: 108px;
  resize-mode: contain;
  width: 108px;
`;

const TextStyled = styled.Text`
  color: ${colors.white};
  font-family: ${fonts.regular};
  font-size: 16px;
  margin-top: 8px;
  text-align: center;
`;

const PlusContainer = styled(TouchableOpacity)`
  align-items: center;
  height: 108px;
  justify-content: center;
  width: 108px;
`;

const PlusBackground = styled.View`
  align-items: center;
  background-color: ${colors.moreAddProfileBg};
  border-radius: 34px;
  height: 68px;
  justify-content: center;
  width: 68px;
`;

const ModalManageProfiles: React.FC<ModalManageProfilesProps> = () => {
  const navigation = useTypedNavigation();
  return (
    <Container>
      <HeaderManage />
      <ProfilesContainer>
        <ProfileContainer>
          <Avatar source={images.robot} />
          <TextStyled>Caleb</TextStyled>
          <Overlay />
          <SvgContainer>
            <SvgEdit active size={40} />
          </SvgContainer>
        </ProfileContainer>

        <ProfileContainer>
          <Avatar source={images.penguin} />
          <TextStyled>Kim</TextStyled>
          <Overlay />
          <SvgContainer>
            <SvgEdit active size={40} />
          </SvgContainer>
        </ProfileContainer>

        <PlusContainer
          activeOpacity={gStyle.activeOpacity}
          onPress={() => navigation.navigate('ModalAddProfile')}>
          <PlusBackground>
            <SvgPlus active size={40} />
          </PlusBackground>
          <TextStyled>Add Profile</TextStyled>
        </PlusContainer>
      </ProfilesContainer>
    </Container>
  );
};
export default ModalManageProfiles;
