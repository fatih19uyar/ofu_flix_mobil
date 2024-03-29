import * as React from 'react';
import PropTypes from 'prop-types';
import { Path, Svg, SvgProps } from 'react-native-svg';
import { colors } from '../../constants';

interface SvgSearchProps {
  fill?: string | number;
  size?: number;
}

const SvgSearch: React.FC<SvgSearchProps> = ({ fill, size = 24, ...rest }) => {
  return (
    <Svg height={size} width={size} viewBox="0 0 24 24" {...rest}>
      <Path
        d="M21.7 20.3L18 16.6c1.2-1.5 2-3.5 2-5.6 0-5-4-9-9-9s-9 4-9 9 4 9 9 9c2.1 0 4.1-.7 5.6-2l3.7 3.7c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4zM4 11c0-3.9 3.1-7 7-7s7 3.1 7 7c0 1.9-.8 3.7-2 4.9-1.3 1.3-3 2-4.9 2-4 .1-7.1-3-7.1-6.9z"
        fill={fill as string}
      />
    </Svg>
  );
};
export default React.memo(SvgSearch);
