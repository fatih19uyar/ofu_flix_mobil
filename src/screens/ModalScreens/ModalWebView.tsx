import React, { useEffect } from 'react';
import { WebView } from 'react-native-webview';
import styled from 'styled-components/native';
import { gStyle } from '../../constants';

// components
import Header from '../../components/Header/Header';

const Container = styled.View`
  ${gStyle.container}
`;

interface ModalWebViewProps {
  route?: {
    params?: {
      url?: string;
    };
  };
}

const ModalWebView: React.FC<ModalWebViewProps> = ({ route }) => {
  if (!route || !route.params) {
    return null;
  }

  const { url = 'https://netflix.com' } = route.params;
  
  return (
    <Container>
      <Header close closeText="Close" showLogo />

      <WebView
        bounces={false}
        javaScriptEnabled
        scalesPageToFit
        source={{ uri: url }}
        startInLoadingState
      />
    </Container>
  );
};

export default ModalWebView;
