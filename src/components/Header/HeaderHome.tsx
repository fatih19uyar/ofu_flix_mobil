import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import {
  Animated,
  Image,
  TouchableOpacity,
  View,
  StyleProp,
  TextStyle,
} from 'react-native';
import {colors, device, fonts, gStyle, images} from '../../constants';

import TouchText from '../Touch/TouchText';
import { useTypedNavigation } from '../../common/hooks/useNavigation';
interface HeaderHomeProps {
  show: boolean;
  all?: boolean;
}

const StyledContainer = styled(Animated.View)`
  align-items: flex-start;
  background-color: ${colors.black20};
  flex-direction: row;
  padding-bottom: 4px;
  padding-horizontal: 16px;
  padding-top: ${device.iPhoneNotch ? '54px' : '30px'};
  position: absolute;
  width: 100%;
  z-index: 10;
`;

const StyledLogo = styled(Image)`
  height: 35px;
  margin-right: 48px;
  width: 20px;
`;

const StyledContainerMenu = styled(View)`
  align-items: center;
  flex-direction: row;
  flex: 1;
  height: 35px;
`;

const HeaderHome: React.FC<HeaderHomeProps> = ({show, all = true}) => {
  const navigation = useTypedNavigation();

  // local state
  const top = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (show) {
      Animated.timing(top, {
        duration: 200,
        toValue: 0,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(top, {
        duration: 200,
        toValue: -100,
        useNativeDriver: false,
      }).start();
    }
  }, [show]);

  return (
    <StyledContainer style={{top}}>
      <TouchableOpacity
        activeOpacity={gStyle.activeOpacity}
        onPress={() => navigation.navigate('Home')}>
        <Image style={{height:35 ,width:20,marginRight:48}} source={require('../../assets/images/ofu_flix.png')} />
      </TouchableOpacity>

      <StyledContainerMenu>
        {all && (
          <>
            <TouchText
              onPress={() => navigation.navigate('TvShows')}
              text="TV Shows"
              textStyle={styles.text}
            />
            <TouchText
              onPress={() => navigation.navigate('Movies')}
              text="Movies"
              textStyle={styles.text}
            />
            <TouchText
              onPress={() => navigation.navigate('MyList')}
              text="My List"
              textStyle={styles.text}
            />
          </>
        )}
      </StyledContainerMenu>
    </StyledContainer>
  );
};

HeaderHome.propTypes = {
  show: PropTypes.bool.isRequired,
  all: PropTypes.bool,
};

const styles: {text: StyleProp<TextStyle>} = {
  text: {
    color: colors.white,
    fontFamily: fonts.medium,
    marginRight: 24,
  },
};

export default HeaderHome;
