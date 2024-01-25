import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import { colors, device, fonts, gStyle } from '../../constants';
import { useTypedNavigation } from '../../common/hooks/useNavigation';

const Container = styled.View`
  align-items: flex-start;
  background-color: ${colors.black};
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 4px;
  padding-horizontal: 16px;
  padding-top: ${device.iPhoneNotch ? '54px' : '30px'};
`;

const BackButton = styled.TouchableOpacity`
  align-items: flex-start;
  flex: 1;
  height: 35px;
  justify-content: center;
`;

const BackButtonText = styled.Text`
  color: ${colors.white};
  font-family: ${fonts.bold};
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

const SaveButton = styled.TouchableOpacity`
  align-items: flex-end;
  flex: 1;
  height: 35px;
  justify-content: center;
`;

const SaveButtonText = styled.Text`
  color: ${colors.moreSaveText};
  font-family: ${fonts.bold};
`;

interface HeaderManageProps {
  backText?: string;
  save?: boolean;
  saveActive?: boolean;
  title?: string;
}

const HeaderManage: React.FC<HeaderManageProps> = ({ backText = 'Done', save = false, saveActive = false, title }) => {
  const navigation = useTypedNavigation();
  const saveColor = saveActive ? { color: colors.white } : {};

  return (
    <Container>
      <BackButton activeOpacity={gStyle.activeOpacity} onPress={() => navigation.goBack()}>
        <BackButtonText>{backText}</BackButtonText>
      </BackButton>

      {title && (
        <TitleContainer>
          <TitleText>{title}</TitleText>
        </TitleContainer>
      )}

      {!save && <View style={gStyle.flex1} />}

      {save && (
        <SaveButton activeOpacity={gStyle.activeOpacity} onPress={() => navigation.goBack()}>
          <SaveButtonText style={saveColor}>Save</SaveButtonText>
        </SaveButton>
      )}
    </Container>
  );
};

HeaderManage.propTypes = {
  backText: PropTypes.string,
  save: PropTypes.bool,
  saveActive: PropTypes.bool,
  title: PropTypes.string,
};

export default HeaderManage;
