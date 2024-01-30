import React, {useEffect} from 'react';
import {View, Image, Animated, Easing} from 'react-native';
import styled from 'styled-components/native';

const StyledContainer = styled(View)`
  background-color: #000;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const SplashScreen: React.FC = () => {
  const scaleAnimation = new Animated.Value(0);
  const opacityAnimation = new Animated.Value(0);

  useEffect(() => {
    Animated.parallel([
      Animated.timing(scaleAnimation, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnimation, {
        toValue: 1,
        duration: 2500,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ]).start(async () => {
    });
  }, [scaleAnimation, opacityAnimation]);

  const scale = scaleAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1.3],
  });

  const opacity = opacityAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  return (
    <StyledContainer>
      <Animated.View style={{transform: [{scale}], opacity}}>
        <Image source={require('../assets/images/ofu_flix.png')} />
      </Animated.View>
    </StyledContainer>
  );
};

export default SplashScreen;
