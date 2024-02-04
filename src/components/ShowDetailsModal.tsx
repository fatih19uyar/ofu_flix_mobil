import React, {useEffect, useState} from 'react';
import {ImageStyle, Modal, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components/native';
import {colors, images, fonts} from '../constants';
import PromotionPlay from './Promotion/PromotionPlay';
import SvgCross from '../assets/icons/Svg.Cross';
import TouchTextIcon from './Touch/TouchTextIcon';
import SvgCheck from '../assets/icons/Svg.Check';
import SvgPlus from '../assets/icons/Svg.Plus';
import {useAppDispatch, useAppSelector} from '../common/hooks/useStore';
import {
  addToMyListAsync,
  removeSelectedContent,
  removeToMyListAsync,
} from '../store/content/contentSlice';
import useToastMessage from '../common/hooks/useToastMessage';
import {Image} from 'react-native';

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
const StyledImage = styled(Image)<StyledImageProps>`
  width: 91px;
  height: 131px;
`;

const ShowDetailsModal: React.FC = ({}) => {
  const dispatch = useAppDispatch();
  const myList = useAppSelector(state => state.content.myList);
  const selectedContent = useAppSelector(
    state => state.content.selectedContent,
  );
  const [isVisible, setIsVisible] = useState(false);
  const [added, setAdded] = useState(false);
  const icon = added ? <SvgCheck size={12} /> : <SvgPlus size={12} />;

  const onClose = () => {
    setIsVisible(false);
    setAdded(false);
    dispatch(removeSelectedContent());
  };

  useEffect(() => {
    setIsVisible(Boolean(selectedContent?.id));
    setAdded(myList.some(existingItem => existingItem.id === selectedContent?.id));
  }, [selectedContent, myList]);
  
  const handleAdd = async () => {
    if (added && selectedContent) {
      await dispatch(removeToMyListAsync(selectedContent));
    } else if (!myList.some(existingItem => existingItem.id === selectedContent?.id) && selectedContent) {
      await dispatch(addToMyListAsync(selectedContent));
    }
    setAdded(!added);
  };

  return (
    <StyledModal
      animationType="slide"
      transparent
      visible={isVisible}
      onRequestClose={onClose}>
      <ModalContainer>
        <ModalContent>
          <CloseButton onPress={onClose}>
            <SvgCross size={12} />
          </CloseButton>
          <ImageContainer>
            {selectedContent?.image ? (
              <StyledImage
                source={images[selectedContent.image] as ImageStyle}
              />
            ) : null}
          </ImageContainer>
          <View style={{justifyContent: 'space-around'}}>
            <TextContainer>
              <Title>{selectedContent?.title}</Title>
              <DescText>{selectedContent?.desc}</DescText>
            </TextContainer>
            <StyledPromotionView>
              {selectedContent ? (
                <PromotionPlay data={selectedContent} />
              ) : (
                <></>
              )}
              <TouchTextIcon
                icon={icon}
                onPress={() => handleAdd()}
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
