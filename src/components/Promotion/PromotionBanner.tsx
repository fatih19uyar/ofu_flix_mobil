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
import { useAppDispatch, useAppSelector } from '../../common/hooks/useStore';
import { ContentItem } from '../../store/content/type';
import { addToMyListAsync, removeToMyListAsync } from '../../store/content/contentSlice';


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
interface PromotionBannerProps {
  onPressInfo : (data:ContentItem | undefined )=>void
};
const PromotionBanner: React.FC<PromotionBannerProps> = ({onPressInfo}) => {
  const dispatch = useAppDispatch();
  const [added, setAdded] = useState(false);
  const icon = added ? <SvgCheck /> : <SvgPlus />;
  const promoData = useAppSelector(state => state.content.dumpData);
  const myList = useAppSelector(state => state.content.myList);
  const data = promoData.find(
    item => item.id === 'e3d6ff24-4a98-4c74-91fe-2636f9198d1e',
  );
  const handleAdd = async () => {
    if (added && data ) {
      await dispatch(removeToMyListAsync(data));
      setAdded(false);
    }
    if (!myList.some(existingItem => existingItem.id === data?.id) && data) {
      await dispatch(addToMyListAsync(data));
      setAdded(true);
    }
  };

  return (
    <BannerBackground source={images.bannerBander}>
      <ContainerContent>
        <LogoImage source={images.logoBander} />

        <View style={gStyle.flexRowSpace as ViewProps}>
          <TouchTextIcon
            icon={icon}
            onPress={handleAdd}
            text="My List"
          />

          <PromotionPlay onPress={() => null} />

          <TouchTextIcon
            icon={<SvgInfo />}
            onPress={() =>onPressInfo(data)}
            text="Info"
          />
        </View>
      </ContainerContent>
    </BannerBackground>
  );
};

export default React.memo(PromotionBanner);
