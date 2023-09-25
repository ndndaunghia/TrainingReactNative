import React from 'react';
import { Animated, StyleSheet, View, Text } from 'react-native';

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

const HourItem = ({
  totalHourItems,
  r,
  content,
  index,
  //   animationSunRayValue,
}) => {
  const containerBaseStyle = () => {
    return [
      styles.container,
      {
        transform: [
          {
            translateX: Math.sin((index * (2 * Math.PI)) / totalHourItems) * r,
          },
          {
            translateY:
              r -
              Math.cos((index * (2 * Math.PI)) / totalHourItems) * r 
          }
        ],
      },
    ];
  };


  return (
    <Animated.View style={containerBaseStyle()}>
      <View>
      <Text>
        {content}
      </Text>
      </View>
    </Animated.View>
  );
};

export default HourItem;
