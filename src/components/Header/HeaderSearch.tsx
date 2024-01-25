import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components/native';
import {
  Animated,
  Easing,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ViewProps,
} from 'react-native';

import { colors, device, fonts, gStyle } from '../../constants';

interface StyledProps extends ViewProps {
  percentage?: number;  
}
const Container = styled.View`
  background-color: ${colors.black};
  flex-direction: row;
  padding-bottom: 12px;
  padding-horizontal: 8px;
  padding-top: ${device.iPhoneNotch ? '54px' : '30px'};
  width: 100%;
`;

const InputContainer = styled(Animated.View)<StyledProps>`
  width: ${({percentage}) => {return `${percentage}%`;}}; 
`;
const Input = styled(TextInput)<{focus: boolean}>`
  background-color: ${colors.searchBarBg};
  border-radius: 4px;
  width: 100%;
  color: ${colors.heading};
  font-family: ${fonts.regular};
  font-size: 16px;
  padding-horizontal: 8px;
  padding-vertical: 4px;
  text-align: center;
  ${({ focus }) => (focus ? 'text-align: left;' : '')}
`;

const CancelContainer = styled(Animated.View)`
  width: 20%;
`;

const CancelText = styled(Text)`
  color: ${colors.heading};
  font-family: ${fonts.light};
  font-size: 16px;
  padding-vertical: 4px;
  text-align: center;
`;

const HeaderSearch: React.FC = () => {
  const [focus, setFocus] = useState(false);
  const [text, setText] = useState('');

  const cancelOpacity = useRef(new Animated.Value(0)).current;
  const inputWidth = useRef(new Animated.Value(100)).current;
  const [inputContainerWidth, setInputContainerWidth] = useState(100);

  const onBlur = () => {
    setFocus(false);

    if (text === '') {
      Animated.timing(inputWidth, {
        duration: 300,
        toValue: 100,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start();
      Animated.timing(cancelOpacity, {
        duration: 300,
        toValue: 0,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start();
    }
  };

  const onCancel = () => {
    Keyboard.dismiss();
    setText('');
  };

  const onFocus = () => {
    setFocus(true);

    Animated.timing(inputWidth, {
      duration: 300,
      toValue: 80,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
    Animated.timing(cancelOpacity, {
      duration: 300,
      toValue: 1,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  };



  useEffect(() => {
    text === '' ? setInputContainerWidth(100) : setInputContainerWidth(80);
  }, [text])

  return (
        <Container>
        <InputContainer percentage={inputContainerWidth}>
        <Input
          autoCapitalize="none"
          autoFocus
          keyboardAppearance="dark"
          onBlur={onBlur}
          onChangeText={(input) => setText(input)}
          onFocus={onFocus}
          placeholder="Search"
          value={text}
          placeholderTextColor={colors.searchIcon}
          selectionColor={colors.brandPrimary}
          focus={focus}
        />
      </InputContainer>

      <CancelContainer style={{ opacity: cancelOpacity }}>
        <TouchableOpacity activeOpacity={gStyle.activeOpacity} onPress={onCancel}>
          <CancelText>Cancel</CancelText>
        </TouchableOpacity>
      </CancelContainer>
    </Container>
  );
};

export default HeaderSearch;
