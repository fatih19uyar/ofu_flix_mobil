import React from 'react';
import {Svg, Path, SvgProps} from 'react-native-svg';
import {colors} from '../../constants';

interface SvgOpenEyeProps extends SvgProps {
  size?: number;
  active?: boolean;
}

const SvgOpenEye: React.FC<SvgOpenEyeProps> = ({
  active = false,
  size = 16,
  ...props
}) => {
  return (
    <Svg
      height={size}
      width={size}
      viewBox="0 0 16 16"
      {...props}>
      <Path
        d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"
        fill={active ? colors.white : colors.textGrey}
      />
      <Path
        d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
        fill={active ? colors.white : colors.textGrey}
      />
    </Svg>
  );
};

export default React.memo(SvgOpenEye);
