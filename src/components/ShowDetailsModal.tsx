import React, { useState } from 'react';
import {ImageStyle, Modal, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components/native';
import {gStyle, colors, images, fonts} from '../constants';
import {Data} from '../types/type';
import CommonButton from './CommonButton';
import PromotionPlay from './Promotion/PromotionPlay';
import SvgCross from '../assets/icons/Svg.Cross';
import TouchTextIcon from './Touch/TouchTextIcon';
import SvgCheck from '../assets/icons/Svg.Check';
import SvgPlus from '../assets/icons/Svg.Plus';
import { mockDataType } from '../mockData/type';

interface ShowDetailsModalProps {
  isVisible: boolean;
  data: mockDataType | null;
  onClose: () => void;
  handleWatchNow: (id: string) => void;
}
interface StyledImageProps {
  source: ImageStyle;
}
const StyledModal = styled(Modal)`
  flex: 1;
`;
const ModalContainer = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
`;
const ModalContent = styled(View)`
  background-color: ${colors.bgGrey};
  padding: 20px;
  border-radius: 8px;
  width: 350px;
  border-width: 2px;
  border-color: ${colors.black};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const CloseButton = styled(TouchableOpacity)`
  position: absolute;
  top: 10px;
  right: 10px;
`;
const Title = styled.Text`
  color: ${colors.white};
  font-size: 14px;
  font-family: ${fonts.bold};
  margin-bottom: 2px;
`;
const DescText = styled.Text`
  color: ${colors.white};
  font-size: 12px;
  font-family: ${fonts.light};
  margin-bottom: 2px;
`;
const ImageContainer = styled(View)`
  align-items: center;
  margin-bottom: 10px;
  padding: 5px;
`;
const TextContainer = styled(View)`
  align-items: left;
  margin-left: 10px;
  padding: 5px;
  width: 200px;
`;
const StyledPromotionView = styled.View`
  height: 50px;
  width: 200px;
  padding: 5px;
  margin-left: 10px;
  align-items: left;
  margin-top: 10px;
  justify-content: space-between;
  flex-direction: row;
`;
const StyledImage = styled.Image`
  width: 91px;
  height: 131px;
` as React.ComponentType<StyledImageProps & ImageStyle>;

const ShowDetailsModal: React.FC<ShowDetailsModalProps> = ({
  isVisible,
  data,
  onClose,
  handleWatchNow,
}) => {
    const [added, setAdded] = useState(false);
    const icon = added ? <SvgCheck size={12}/> : <SvgPlus size={12}/>;

  if (!data) {
    return null;
  }

  return (
    <StyledModal
      animationType="slide"
      transparent
      visible={isVisible}
      onRequestClose={onClose}>
      <ModalContainer>
        <ModalContent>
          <CloseButton onPress={onClose}>
            <SvgCross size={12}/>
          </CloseButton>
          <ImageContainer>
            {data.image ? (
              <StyledImage source={images[data.image] as ImageStyle} />
            ) : null}
          </ImageContainer>
          <View style={{justifyContent:'space-around'}}>
          <TextContainer>
            <Title>{data.title}</Title>
            <DescText>{data.desc}</DescText>   
          </TextContainer>
          <StyledPromotionView>
          <PromotionPlay  onPress={() => handleWatchNow(data.id.toString())} />
          <TouchTextIcon
            icon={icon}
            onPress={() => setAdded(!added)}
            text="My List"
          />
          </StyledPromotionView>
          </View>
        </ModalContent>
      </ModalContainer>
    </StyledModal>
  );
};

export default ShowDetailsModal;
