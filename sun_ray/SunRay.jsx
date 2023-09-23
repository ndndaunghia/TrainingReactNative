import React, { memo, useMemo } from 'react';
import { Animated, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    alignItems: 'center',
  },
  sunRay: {
    width: 0,
    height: 0,

    borderBottomWidth: 0,
    borderTopColor: 'red',

    borderRightColor: 'transparent',
    borderLeftColor: 'transparent',
  },
  sunTail: {
    position: 'absolute',
    backgroundColor: 'orange',
    width: 2,
    height: 60,
  },
});

const SunRay = ({
  totalSunRays,
  r,
  sunRayWidth,
  sunRayHeight,
  index,
  animatedRotateValue,
  animatedTranslateValue,
}) => {
  const containerBaseStyle = () => {
    return [
      styles.container,
      {
        transform: [
          {
            translateX: Math.sin((index * (2 * Math.PI)) / totalSunRays) * r,
          },
          {
            translateY:
              r -
              Math.cos((index * (2 * Math.PI)) / totalSunRays) * r -
              sunRayHeight / 2,
          },
          {
            rotate: animatedRotateValue.interpolate({
              inputRange: [0, 1],
              outputRange: [
                (index * (2 * 180)) / totalSunRays + 'deg',
                180 + (index * (2 * 180)) / totalSunRays + 'deg',
              ],
            }),
          },
          {
            translateY: sunRayHeight / 2,
          },
        ],
      },
    ];
  };

  const sunRayBaseStyle = () => {
    return [
      styles.sunRay,
      {
        borderLeftWidth: sunRayWidth / 2,
        borderRightWidth: sunRayWidth / 2,
        borderTopWidth: sunRayHeight,
        borderTopEndRadius: r / 2,
        borderTopStartRadius: r / 2,
      },
    ];
  };

  const sunTailBaseStyle = () => {
    return [
      styles.sunTail,
      {
        opacity: animatedTranslateValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
        }),
        transform: [
          {
            translateY: animatedTranslateValue.interpolate({
              inputRange: [0, 1],
              outputRange: [-100, 100],
            }),
          },
        ],
      },
    ];
  };

  return (
    <Animated.View style={containerBaseStyle()}>
      <View style={sunRayBaseStyle()} />
      <Animated.View style={sunTailBaseStyle()} />
    </Animated.View>
  );
};

export default SunRay;
