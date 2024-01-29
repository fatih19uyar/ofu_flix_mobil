import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SvgBackArrow from '../assets/icons/Svg.BackArrow';

const useGoBack = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return goBack;
};

const GoBackButton: React.FC = () => {
  const goBack = useGoBack();

  return (
    <TouchableOpacity onPress={goBack}>
        <SvgBackArrow size={24} />
    </TouchableOpacity>
  );
};

export default GoBackButton;
