import * as React from 'react';
import PropTypes from 'prop-types';
import { Path, Svg } from 'react-native-svg';
import { colors } from '../../constants';

interface SvgMenuProps {
  fill?: string | number;
  size?: number;
}

const SvgMenu: React.FC<SvgMenuProps> = ({ fill, size, ...rest }) => {
  return (
    <Svg height={size} width={size} viewBox="0 0 24 24" {...rest}>
      <Path
        d="M21 11H3c-.6 0-1 .4-1 1s.4 1 1 1h18c.6 0 1-.4 1-1s-.4-1-1-1zM3 7h18c.6 0 1-.4 1-1s-.4-1-1-1H3c-.6 0-1 .4-1 1s.4 1 1 1zM21 17H3c-.6 0-1 .4-1 1s.4 1 1 1h18c.6 0 1-.4 1-1s-.4-1-1-1z"
        fill={fill as string}
      />
    </Svg>
  );
};

SvgMenu.defaultProps = {
  fill: colors.black,
  size: 24,
};

SvgMenu.propTypes = {
  fill: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  size: PropTypes.number,
};

export default React.memo(SvgMenu);
