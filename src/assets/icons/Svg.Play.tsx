import React from 'react';
import PropTypes from 'prop-types';
import { ColorValue, StyleSheet, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { colors } from '../../constants';

interface SvgPlayProps {
  active?: boolean;
  fill?: string | number | null;
  size?: number;
}

const SvgPlay: React.FC<SvgPlayProps> = ({ active = true, fill, size = 20 }) => {
  let fillColor = fill;

  if (fillColor === null) {
    fillColor = active ? colors.white : colors.inactiveGrey;
  }

  return (
    <View style={styles.container}>
      <Svg height={size} width={size} viewBox="0 0 590.74 460.5">
        <Path d="M.5.866l459 265.004L.5 530.874z" fill={fillColor as ColorValue} />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 3,
  },
});

export default React.memo(SvgPlay);
