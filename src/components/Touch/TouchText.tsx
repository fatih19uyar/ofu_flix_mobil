import React from 'react';
import { StyleSheet, Text, TouchableOpacity, StyleProp, TextStyle } from 'react-native';
import { colors, fonts, gStyle } from '../../constants';

interface TouchTextProps {
  onPress: () => void;
  text: string;
  textStyle?: StyleProp<TextStyle>;
}

const TouchText: React.FC<TouchTextProps> = ({ onPress, text, textStyle }) => {
  return (
    <TouchableOpacity activeOpacity={gStyle.activeOpacity} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  text: {
    color: colors.white,
    fontFamily: fonts.medium,
  },
});

export default TouchText;
