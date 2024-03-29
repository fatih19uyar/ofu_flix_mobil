import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';
import { colors } from '../../constants';

interface SvgPlusProps {
  active?: boolean;
  size?: number;
}

const SvgPlus: React.FC<SvgPlusProps> = ({ active = true, size = 24 }) => {
  return (
    <Svg height={size} width={size} viewBox="0 0 24 24">
      <Path
        d="M19 11h-6V5c0-.6-.4-1-1-1s-1 .4-1 1v6H5c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1v-6h6c.6 0 1-.4 1-1s-.4-1-1-1z"
        fill={active ? colors.white : colors.inactiveGrey}
      />
    </Svg>
  );
};

export default React.memo(SvgPlus);
