import React, { useState } from 'react';
import { Image, ImageBackground, View, ViewProps } from 'react-native';
import styled from 'styled-components/native';
import { gStyle, images } from '../../constants';

// components
import PromotionPlay from './PromotionPlay';
import TouchTextIcon from '../Touch/TouchTextIcon';

// icons
import SvgCheck from '../../assets/icons/Svg.Check';
import SvgPlus from '../../assets/icons/Svg.Plus';
import SvgInfo from '../../assets/icons/Svg.Info';


const BannerBackground = styled(ImageBackground)`
  height: 480px;
`;


const ContainerContent = styled(View)`
  bottom: 24px;
  position: absolute;
  width: 100%;
  z-index: 1;
`;

const LogoImage = styled(Image)`
  align-self: center;
  height: 69px;
  margin-bottom: 24px;
  width: 291px;
`;

const PromotionBanner: React.FC = () => {
  // local state
  const [added, setAdded] = useState(false);
  const icon = added ? <SvgCheck /> : <SvgPlus />;

  return (
    <BannerBackground source={images.bannerBander}>
      <ContainerContent>
        <LogoImage source={images.logoBander} />

        <View style={gStyle.flexRowSpace as ViewProps}>
          <TouchTextIcon
            icon={icon}
            onPress={() => setAdded(!added)}
            text="My List"
          />

          <PromotionPlay onPress={() => null} />

          <TouchTextIcon icon={<SvgInfo />} onPress={() => null} text="Info" />
        </View>
      </ContainerContent>
    </BannerBackground>
  );
};

export default React.memo(PromotionBanner);
