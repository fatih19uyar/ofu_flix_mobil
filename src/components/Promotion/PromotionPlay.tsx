import React from 'react';
import styled from 'styled-components/native';
import {TouchableOpacity, View, Text} from 'react-native';
import {colors, fonts, gStyle} from '../../constants';
import SvgPlay from '../../assets/icons/Svg.Play';
import {useTypedNavigation} from '../../common/hooks/useNavigation';
import { ContentItem } from '../../store/content/type';
import { useAppDispatch } from '../../common/hooks/useStore';
import { removeSelectedContent } from '../../store/content/contentSlice';
import { setLoading } from '../../store/common/commonSlice';

const Container = styled(TouchableOpacity)`
  align-items: center;
  background-color: ${colors.white};
  border-radius: 4px;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  padding-vertical: 8px;
`;

const TextStyled = styled(Text)<{textSize: number}>`
  color: ${colors.black};
  font-family: ${fonts.medium};
  font-size: ${props => props.textSize}px;
`;

const IconContainer = styled(View)`
  justify-content: center;
`;

interface PromotionPlayProps {
  icon?: React.ReactElement;
  iconSize?: number;
  text?: string;
  textSize?: number;
  data : ContentItem;
}

const PromotionPlay: React.FC<PromotionPlayProps> = ({
  icon = <SvgPlay />,
  text = 'Play',
  data ,
  textSize = 18,
  iconSize = 24,
}) => {
  const navigation = useTypedNavigation();
  const dispatch = useAppDispatch();
  const adjustedIcon = React.cloneElement(icon, { size: iconSize, fill: colors.black });

  const onClick = () => {
    dispatch(removeSelectedContent());
    dispatch(setLoading(true));
    navigation.navigate('MediaShowCaseScreen', data);
  };

  return (
    <Container activeOpacity={gStyle.activeOpacity} onPress={onClick}>
      <IconContainer>
        {adjustedIcon}
      </IconContainer>
      <TextStyled textSize={textSize}>{text}</TextStyled>
    </Container>
  );  
};

export default PromotionPlay;
