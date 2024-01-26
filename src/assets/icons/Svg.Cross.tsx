import React, { memo } from 'react';
import { ViewStyle } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import PropTypes from 'prop-types';
import { colors } from '../../constants';

interface SvgCrossProps {
  active?: boolean;
  size?: number;
  style?: ViewStyle;
}

const SvgCross: React.FC<SvgCrossProps> = ({ active = false, size = 24, style }) => (
  <Svg height={size} width={size} viewBox="0 0 460.775 460.775" style={style}>
    <Path
      d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55
      c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55
      c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505
      c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55
      l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55
      l32.709-32.719c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"
      fill={active ? colors.white : colors.inactiveGrey}
    />
  </Svg>
);

SvgCross.defaultProps = {
  active: false,
  size: 24,
};

SvgCross.propTypes = {
  active: PropTypes.bool,
  size: PropTypes.number,
  style: PropTypes.object,
};

export default memo(SvgCross);
