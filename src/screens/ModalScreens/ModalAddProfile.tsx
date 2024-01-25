import React, { useState } from 'react';
import { Alert, Image, StyleSheet, Switch, Text, TextInput, View } from 'react-native';
import { colors, fonts, gStyle, images } from '../../constants';

// components
import styled from 'styled-components/native';
import HeaderManage from '../../components/Header/HeaderManage';
import { StatusEnum } from '../../utils/colorUtil';
import useToastMessage from '../../common/hooks/useToastMessage';

const BLOCK_SIZE = 108;

const StyledContainer = styled.View`
  align-items: center;
  align-self: center;
  padding-horizontal: 16px;
  padding-vertical: 60px;
`;

const StyledAvatar = styled.Image`
  height: ${BLOCK_SIZE}px;
  resizeMode: contain;
  width: ${BLOCK_SIZE}px;
`;

const StyledText = styled.Text`
  color: ${colors.white};
  font-family: ${fonts.regular};
  font-size: 16px;
  margin-bottom: 24px;
  margin-top: 8px;
  text-align: center;
`;

const StyledInput = styled.TextInput`
  border-color: ${colors.white};
  border-width: 1px;
  color: ${colors.white};
  font-size: 16px;
  padding-horizontal: 8px;
  padding-vertical: 12px;
  width: 260px;
`;

const StyledSwitchContainer = styled.View`
  align-items: center;
  flex-direction: row;
  margin-top: 16px;
`;

const StyledSwitchLabel = styled.Text`
  color: ${colors.white};
  font-family: ${fonts.light};
  font-size: 16px;
  margin-right: 8px;
  text-transform: uppercase;
`;


function ModalAddProfile() {
  // local state
  const [isForKids, setForKids] = useState(false);
  const [text, setText] = useState('');
  const {showToast} = useToastMessage();

  const handleSwitchChange = (value: boolean) => {
    if (value === false) {
      showToast(
        StatusEnum.INFO,
        'This profile will now allow access to TV shows and movies of all maturity levels.',
      );
    }
    setForKids(value);
  };
  

  return (
    <View style={[gStyle.container, { backgroundColor: colors.black }]}>
      <HeaderManage backText="Cancel" save saveActive={text !== ''} title="Create Profile" />

      <StyledContainer>
        <StyledAvatar source={images.mask} />
        <StyledText>CHANGE</StyledText>

        <StyledInput
          autoCapitalize="none"
          autoFocus
          keyboardAppearance="dark"
          onChangeText={(input) => setText(input)}
          selectionColor={colors.brandPrimary}
          value={text}
        />

        <StyledSwitchContainer>
          <StyledSwitchLabel>For Kids</StyledSwitchLabel>
          <Switch onValueChange={handleSwitchChange} value={isForKids} />
        </StyledSwitchContainer>
      </StyledContainer>
    </View>
  );
}

export default ModalAddProfile;
