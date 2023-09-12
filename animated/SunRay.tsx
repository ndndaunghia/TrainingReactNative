import React, {memo, useMemo} from 'react';
import {Animated, StyleSheet, View} from 'react-native';

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

const _SunRay = ({
  totalSunRays,
  r,
  sunRayWidth,
  sunRayHeight,
  index,
  animatedRotateValue,
  animatedTranslateValue,
}: {
  totalSunRays: number;
  r: number;
  sunRayWidth: number;
  sunRayHeight: number;
  index: number;
  animatedRotateValue: Animated.Value;
  animatedTranslateValue: Animated.Value;
}) => {
  const containerBaseStyle = useMemo(() => {
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
                (index * (2 * Math.PI)) / totalSunRays + 'rad',
                Math.PI + (index * (2 * Math.PI)) / totalSunRays + 'rad',
              ],
            }),
          },
          {
            translateY: sunRayHeight / 2,
          },
        ],
      },
    ];
  }, []);

  const sunRayBaseStyle = useMemo(() => {
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
  }, [sunRayHeight, sunRayWidth, r]);

  const sunTailBaseStyle = useMemo(() => {
    return [
      styles.sunTail,
      {
        opacity: animatedTranslateValue.interpolate({
          inputRange: [0, 1, 2],
          outputRange: [0, 1, 0],
        }),
        transform: [
          {
            translateY: animatedTranslateValue.interpolate({
              inputRange: [0, 1, 2],
              outputRange: [-100, 100, 1000],
            }),
          },
        ],
      },
    ];
  }, [animatedTranslateValue, animatedTranslateValue]);

  return (
    <Animated.View style={containerBaseStyle}>
      <View style={sunRayBaseStyle} />
      <Animated.View style={sunTailBaseStyle} />
    </Animated.View>
  );
};

export const SunRay = memo(_SunRay);
