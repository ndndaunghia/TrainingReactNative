import React from 'react';
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

const SecondItem = ({
  totalSecondItems,
  r,
  secondWidth,
  secondHeight,
  index,
  animationSunRayValue,
}) => {
  const containerBaseStyle = () => {
    return [
      styles.container,
      {
        transform: [
          {
            translateX: Math.sin((index * (2 * Math.PI)) / totalSecondItems) * r,
          },
          {
            translateY:
              r -
              Math.cos((index * (2 * Math.PI)) / totalSecondItems) * r -
              secondHeight / 2,
          },
          {
            rotate: animationSunRayValue.interpolate({
              inputRange: [0, 1],
              outputRange: [
                (index * (2 * 180)) / totalSecondItems + 'deg',
                180 + (index * (2 * 180)) / totalSecondItems + 'deg',
              ],
            }),
          },
          {
            translateY: secondHeight / 2,
          },
        ],
      },
    ];
  };

  const secondItemStyle = () => {
    return [
      styles.sunRay,
      {
        borderLeftWidth: secondWidth / 2,
        borderRightWidth: secondWidth / 2,
        borderTopWidth: secondHeight,
        borderTopEndRadius: r / 2,
        borderTopStartRadius: r / 2,
      },
    ];
  };

//  

  return (
    <Animated.View style={containerBaseStyle()}>
      <View style={secondItemStyle()} />
    </Animated.View>
  );
};

export default SecondItem;
