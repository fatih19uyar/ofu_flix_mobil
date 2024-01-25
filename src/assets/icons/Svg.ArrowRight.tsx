import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, SvgProps } from 'react-native-svg';
import { colors } from '../../constants';

interface SvgArrowRightProps extends SvgProps {
  active?: boolean;
  size?: number;
}

const SvgArrowRight: React.FC<SvgArrowRightProps> = ({ active = true, size = 24, ...props }) => {
  return (
    <Svg height={size} width={size} viewBox="0 0 24 24" {...props}>
      <Path
        d="M15.7 11.3l-6-6c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l5.3 5.3-5.3 5.3c-.4.4-.4 1 0 1.4.2.2.4.3.7.3s.5-.1.7-.3l6-6c.4-.4.4-1 0-1.4z"
        fill={active ? colors.white : colors.inactiveGrey}
      />
    </Svg>
  );
};

SvgArrowRight.defaultProps = {
  active: true,
  size: 24,
};

SvgArrowRight.propTypes = {
  active: PropTypes.bool,
  size: PropTypes.number,
};

export default React.memo(SvgArrowRight);
