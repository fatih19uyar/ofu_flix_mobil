import React from 'react';
import {Alert, ScrollView} from 'react-native';
import styled from 'styled-components/native';
import {colors, fonts, gStyle} from '../../constants';

// components
import Cast from '../../components/Cast';
import HeaderAccounts from '../../components/Header/HeaderAccounts';

import SvgBell from '../../assets/icons/Svg.Bell';
import SvgCheck from '../../assets/icons/Svg.Check';
import {useTypedNavigation} from '../../common/hooks/useNavigation';
import TouchLineItem from '../../components/Touch/TouchLineItem';
import useToastMessage from '../../common/hooks/useToastMessage';


// full :: https://help.netflix.com/legal/privacy?headless=true&locale=en-US
const privacyUrl = 'https://help.netflix.com/legal/privacy?headless=true';

const alertSignOut = () => {
  Alert.alert(
    'Sign Out',
    'Are you sure that you want to sign out?',
    [{text: 'No'}, {text: 'Yes'}],
    {cancelable: false},
  );
};

interface MoreProps {}

const Container = styled.View`
  ${gStyle.container}
`;

const VersionText = styled.Text`
  color: ${colors.moreVersionText};
  font-family: ${fonts.regular};
  font-size: 18px;
  padding-horizontal: 8px;
  padding-vertical: 16px;
`;

const More: React.FC<MoreProps> = () => {
  const navigation = useTypedNavigation();
  const appVersion = require('../../../package.json').version;
  const { showToast } = useToastMessage();
 
  return (
    <Container>
      <HeaderAccounts />

      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchLineItem
          icon={<SvgBell />}
          onPress={() => navigation.navigate('MoreNotifications')}
          showBorder
          text="Notifications"
        />
        <TouchLineItem
          icon={<SvgCheck />}
          onPress={() => navigation.navigate('MoreMyList')}
          showBorder
          text="My List"
        />
        <TouchLineItem
          onPress={() => navigation.navigate('MoreAppSettings')}
          showArrow={false}
          showBorder
          text="App Settings"
        />
        <TouchLineItem
          onPress={() => {
            navigation.navigate('ModalWebView', {url: privacyUrl});
          }}
          showArrow={false}
          text="Privacy"
        />
        <TouchLineItem onPress={() => null} showArrow={false} text="Help" />
        <TouchLineItem
          onPress={() => alertSignOut()}
          showArrow={false}
          text="Sign Out"
        />
        <VersionText>Version: {appVersion}</VersionText>
      </ScrollView>

      <Cast />
    </Container>
  );
};

export default More;
