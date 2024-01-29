import React, {useState, useRef, useEffect} from 'react';
import styled from 'styled-components/native';
import {
  Animated,
  Easing,
  Keyboard,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  ViewProps,
} from 'react-native';

import {colors, fonts, gStyle} from '../constants';
import SvgCross from '../assets/icons/Svg.Cross';
import GradientInput from './ColorFullBorder';
import SvgOpenEye from '../assets/icons/Svg.OpenEye';
import SvgCloseEye from '../assets/icons/Svg.CloseEye';

interface SizeProps extends ViewProps {
  width?: number;
}
interface CommonTextInputProps extends TextInputProps {
  label?: string;
  error?: {error: boolean; message?: string}| undefined;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secretValue?: boolean;
}

const Container = styled.View<SizeProps>`
  flex-direction: column;
  padding-bottom: 12px;
  padding-horizontal: 8px;
  width: 80%;
`;

const InputContainer = styled(Animated.View)`
  background-color: ${colors.searchBarBg};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
`;
const Input = styled(TextInput)<{focus: boolean}>`
  border-radius: 4px;
  ${({focus}) => (focus ? '  width: 80%;' : 'width: 100%;')}
  height: 48px;
  color: ${colors.heading};
  font-family: ${fonts.regular};
  font-size: 16px;
  padding-horizontal: 8px;
  padding-vertical: 4px;
  text-align: center;
  ${({focus}) => (focus ? 'text-align: left;' : '')}
`;
const DeleteTextContainer = styled(Animated.View)`
  background-color: ${colors.searchBarBg};
  width: 20%;
  padding: 14px;
  border-radius: 8px;
`;
const ErrorText = styled.Text`
  color: red;
  margin-top: 5px;
  text-align: center;
`;

const CommonTextInput: React.FC<CommonTextInputProps> = ({
  onChangeText,
  placeholder,
  error,
  secretValue=false,
  ...props
}) => {
  const [focus, setFocus] = useState(false);
  const [text, setText] = useState('');
  const cancelOpacity = useRef(new Animated.Value(0)).current;
  const inputWidth = useRef(new Animated.Value(100)).current;
  const inputContainerWidth = useRef(new Animated.Value(100)).current;
  const [secretValueData, setSecretValueData] = useState(false)
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
    onChangeText(text);
  }, [text]);

  return (
    <Container>
      <GradientInput>
        <InputContainer
          style={{
            width: inputContainerWidth.interpolate({
              inputRange: [80, 100],
              outputRange: ['80%', '100%'],
            }),
          }}>
          <Input
            autoCapitalize="none"
            autoFocus
            keyboardAppearance="dark"
            onBlur={onBlur}
            onChangeText={input => setText(input)}
            onFocus={onFocus}
            placeholder={placeholder}
            value={text}
            placeholderTextColor={colors.searchIcon}
            selectionColor={colors.brandPrimary}
            secureTextEntry={secretValueData}
            focus={focus}
            {...props}
          />
           {secretValue && (
            <DeleteTextContainer style={{opacity: cancelOpacity}}>
            <TouchableOpacity
              activeOpacity={gStyle.activeOpacity}
              onPress={() => setSecretValueData(!secretValueData)}>
                {secretValueData ? <SvgCloseEye size={24} /> : <SvgOpenEye size={24} />}
            </TouchableOpacity>
            </DeleteTextContainer>
          )}
          {!secretValue && focus && (
            <DeleteTextContainer style={{opacity: cancelOpacity}}>
              <TouchableOpacity
                activeOpacity={gStyle.activeOpacity}
                onPress={onCancel}>
                <SvgCross size={20} />
              </TouchableOpacity>
            </DeleteTextContainer>
          )}
        </InputContainer>
      </GradientInput>
      {error?.error && <ErrorText>{error.message}</ErrorText>}
    </Container>
  );
};

export default CommonTextInput;
