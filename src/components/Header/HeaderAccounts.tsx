import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { colors, device, fonts, gStyle, images } from '../../constants';

// icons
import SvgPlus from '../../assets/icons/Svg.Plus';
import SvgEdit from '../../assets/icons/Svg.Edit';
import { useTypedNavigation } from '../../common/hooks/useNavigation';

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
  height: 64px;
  margin-bottom: 6px;
  resize-mode: contain;
  width: 64px;
`;

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

const ContainerManage = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 24px;
`;

const ManageText = styled.Text`
  color: ${colors.inactiveGrey};
  font-family: ${fonts.medium};
  margin-left: 4px;
`;

const HeaderAccounts: React.FC = () => {
  const navigation = useTypedNavigation();

  return (
    <Container>
      <ContainerAccounts>
        <ContainerUser>
          <Avatar source={images.robot} />
          <Username active>Caleb</Username>
        </ContainerUser>

        <ContainerUser>
          <Avatar source={images.penguin} />
          <Username>Kim</Username>
        </ContainerUser>

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

      <TouchableOpacity
        activeOpacity={gStyle.activeOpacity}
        onPress={() => navigation.navigate('ModalManageProfiles')}
      >
        <ContainerManage>
          <SvgEdit active={false} size={18} />
          <ManageText>Manage Profiles</ManageText>
        </ContainerManage>
      </TouchableOpacity>
    </Container>
  );
};

export default HeaderAccounts;
