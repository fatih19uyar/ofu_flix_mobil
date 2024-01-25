import React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import DeviceInfo from 'react-native-device-info';
import { colors, fonts, gStyle } from '../../constants';

// components
import TouchLineItemApp from '../../components/Touch/TouchLineItemApp';
import TouchLineItemElement from '../../components/Touch/TouchLineItemElement';
import Header from '../../components/Header/Header';

// icons
import SvgTrash from '../../assets/icons/Svg.Trash';
import { StyleSheet } from 'react-native';
import useToastMessage from '../../common/hooks/useToastMessage';
import { StatusEnum } from '../../utils/colorUtil';

interface StorageBlockProps {
  color: string;
}

const Container = styled.View`
  ${gStyle.container}
`;

const HeadingContainer = styled.View`
  border-bottom-color: ${colors.moreSectionBorder};
  border-bottom-width: 1px;
  padding-horizontal: 8px;
  padding-vertical: 16px;
`;

const HeadingText = styled.Text`
  color: ${colors.moreSectionText};
  font-family: ${fonts.light};
  font-size: 16px;
  text-transform: uppercase;
`;

const DeviceContainer = styled.View`
  border-bottom-color: ${colors.moreSectionBorder};
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  margin-horizontal: 8px;
  padding-vertical: 8px;
`;

const DeviceText = styled.Text`
  color: ${colors.moreDeviceText};
`;

const StorageContainer = styled.View`
  background-color: ${colors.moreFree};
  flex-direction: row;
  height: 10px;
  margin-vertical: 8px;
  width: 100%;
`;

const StorageUsed = styled.View`
  background-color: ${colors.moreUsed};
  height: 100%;
  width: 24%;
`;

const StorageNetflix = styled.View`
  background-color: ${colors.moreBlue};
  height: 100%;
  width: 4%;
`;

const IndexContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const IndexBlockContainer = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

const IndexBlock = styled.View<StorageBlockProps>`
  height: 10px;
  margin-right: 10px;
  width: 10px;
  background-color: ${props => props.color};
`;

const AppSettings: React.FC = () => {
  const deviceType = DeviceInfo.getModel();
  const { showToast } = useToastMessage();

  const alertDeleteDownloads = () => {
    showToast(
      StatusEnum.INFO,
      'Delete All Downloads',
      'Are you sure you want to delete this one download?',
    );
  };

  return (
    <ScrollView bounces={false}>
      <Header bg={colors.headerBarBg} showBack title="App Settings" />

      <Container>
        <HeadingContainer>
          <HeadingText>Video Playback</HeadingText>
        </HeadingContainer>

        <TouchLineItemApp
          onPress={() => null}
          tagline="Automatic"
          text="Cellular Data Usage"
        />

        <HeadingContainer>
          <HeadingText>Downloads</HeadingText>
        </HeadingContainer>

        <TouchLineItemApp
          onPress={() => null}
          tagline="Standard"
          text="Video Quality"
        />

        <TouchLineItemElement
          onPress={() => alertDeleteDownloads()}
          element={<SvgTrash size={20} />}
          text="Delete All Downloads"
        />

        <DeviceContainer>
          <DeviceText>{deviceType}</DeviceText>
          <StorageContainer>
            <StorageUsed />
            <StorageNetflix />
          </StorageContainer>
          <IndexContainer>
            <IndexBlockContainer>
              <IndexBlock color={colors.moreUsed} />
              <DeviceText>Used</DeviceText>
            </IndexBlockContainer>
            <IndexBlockContainer>
              <IndexBlock color={colors.moreBlue} />
              <DeviceText>Netflix</DeviceText>
            </IndexBlockContainer>
            <IndexBlockContainer>
              <IndexBlock color={colors.moreFree} />
              <DeviceText>Free</DeviceText>
            </IndexBlockContainer>
          </IndexContainer>
        </DeviceContainer>
      </Container>
    </ScrollView>
  );
}

export default AppSettings;
