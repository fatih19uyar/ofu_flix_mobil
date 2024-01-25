import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, SvgProps } from 'react-native-svg';
import { colors } from '../../constants';

interface SvgArrowLeftProps extends SvgProps {
  active?: boolean;
  size?: number;
}

const SvgArrowLeft: React.FC<SvgArrowLeftProps> = ({ active = true, size = 24, ...props }) => {
  return (
    <Svg height={size} width={size} viewBox="0 0 24 24" {...props}>
      <Path
        d="M10.4 12l5.3-5.3c.4-.4.4-1 0-1.4s-1-.4-1.4 0l-6 6c-.4.4-.4 1 0 1.4l6 6c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4L10.4 12z"
        fill={active ? colors.white : colors.inactiveGrey}
      />
    </Svg>
  );
};

SvgArrowLeft.defaultProps = {
  active: true,
  size: 24,
};

SvgArrowLeft.propTypes = {
  active: PropTypes.bool,
  size: PropTypes.number,
};

export default React.memo(SvgArrowLeft);
