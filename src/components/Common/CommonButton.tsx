import React, {useState, useRef} from 'react';
import styled from 'styled-components/native';
import {Animated, Easing, TouchableOpacity} from 'react-native';

import {colors, fonts, gStyle} from '../../constants';

interface SizeProps {
  width?: number;
}

interface CommonButtonProps {
  label?: string;
  onPress: () => void;
  error?: {error: boolean; message: string};
  type?: 'text' | 'outline';
}

const Container = styled.View<SizeProps>`
  flex-direction: column;
  padding-bottom: 12px;
  padding-horizontal: 8px;
  width: ${({width}) => (width ? width + '%' : '60%')};
`;

const ButtonContainer = styled(Animated.View)`
  background-color: ${colors.searchBarBg};
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  min-height: 38px;
`;

const ButtonText = styled.Text<{focus: boolean; isPressed: boolean}>`
  color: ${colors.heading};
  font-family: ${fonts.regular};
  font-size: ${({isPressed}) => (isPressed ? '20px' : '16px')};
  text-align: center;
`;

const ErrorText = styled.Text`
  color: red;
  margin-top: 5px;
`;

const CommonButton: React.FC<CommonButtonProps> = ({onPress, label, error, type , ...props}) => {
  const [isPressed, setIsPressed] = useState(false);
  const cancelOpacity = useRef(new Animated.Value(0)).current;

  const onPressIn = () => {
    setIsPressed(true);
    Animated.timing(cancelOpacity, {
      duration: 300,
      toValue: 1,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  };

  const onPressOut = () => {
    setIsPressed(false);
    Animated.timing(cancelOpacity, {
      duration: 300,
      toValue: 0,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  };
  switch (type) {
    case 'outline':
      return (
        <Container>
          <TouchableOpacity
            activeOpacity={gStyle.activeOpacity}
            onPress={onPress}
            onPressIn={onPressIn}
            onPressOut={onPressOut}
            {...props}>
            <ButtonContainer>
              <ButtonText focus={false} isPressed={isPressed}>
                {label}
              </ButtonText>
            </ButtonContainer>
          </TouchableOpacity>
          {error?.error && <ErrorText>{error.message}</ErrorText>}
        </Container>
      );

    case 'text':
      return (
        <Container width={100}>
          <TouchableOpacity
            activeOpacity={gStyle.activeOpacity}
            onPress={onPress}
            onPressIn={onPressIn}
            onPressOut={onPressOut}
            {...props}>
            <ButtonText style={{opacity:0.2}}focus={false} isPressed={isPressed}>
              {label}
            </ButtonText>
          </TouchableOpacity>
        </Container>
      );
    default:
        return (
            <Container>
              <TouchableOpacity
                activeOpacity={gStyle.activeOpacity}
                onPress={onPress}
                onPressIn={onPressIn}
                 onPressOut={onPressOut}
                 {...props}>
                <ButtonContainer>
                  <ButtonText focus={false} isPressed={isPressed}>
                    {label}
                  </ButtonText>
                </ButtonContainer>
              </TouchableOpacity>
              {error?.error && <ErrorText>{error.message}</ErrorText>}
            </Container>
          );
  }
 
};

export default CommonButton;
