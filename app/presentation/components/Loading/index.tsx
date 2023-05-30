import React, {useEffect, useRef} from 'react';
import {Animated, Easing} from 'react-native';
import {styles} from './style';

type LoadingProps = {
  isLoading: boolean;
};

export const Loading: React.FC<LoadingProps> = ({isLoading}) => {
  const rotateAnim = useRef(new Animated.Value(0)).current;

  const rotateAnimInterpolation = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  useEffect(() => {
    if (isLoading) {
      Animated.loop(
        Animated.timing(rotateAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
          easing: Easing.inOut(Easing.ease),
        }),
      ).start();
    } else {
      Animated.timing(rotateAnim, {
        toValue: 0,
        duration: 1,
        useNativeDriver: true,
      }).start();
    }
  }, [isLoading, rotateAnim]);

  return (
    <Animated.Image
      source={require('../../assets/pokeball.png')}
      style={[
        styles.loading,
        {transform: [{rotateZ: rotateAnimInterpolation}]},
      ]}
    />
  );
};
