import React from 'react';
import { Path, Svg } from 'react-native-svg';
import PropTypes from 'prop-types';
import { colors } from '../../constants';

interface SvgDownloadsProps {
  fill?: string | number;
  size?: number;
}

const SvgDownloads: React.FC<SvgDownloadsProps> = ({ fill, size }) => {
  return (
    <Svg height={size} width={size} viewBox="0 0 24 24">
      <Path
        d="M21 14c-.6 0-1 .4-1 1v4c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1v-4c0-.6-.4-1-1-1s-1 .4-1 1v4c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3v-4c0-.6-.4-1-1-1z"
        fill={fill as string}
      />
      <Path
        d="M11.3 15.7c.1.1.2.2.3.2.1.1.3.1.4.1s.3 0 .4-.1c.1-.1.2-.1.3-.2l5-5c.4-.4.4-1 0-1.4s-1-.4-1.4 0L13 12.6V3c0-.6-.4-1-1-1s-1 .4-1 1v9.6L7.7 9.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l5 5z"
        fill={fill as string}
      />
    </Svg>
  );
};

export default React.memo(SvgDownloads);
