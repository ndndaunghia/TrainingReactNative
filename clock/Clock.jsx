import { useEffect, useState, useCallback } from 'react';
import { Animated, StyleSheet, View, Easing, Text } from 'react-native';
import SecondItem from './SecondItem';
import HourItem from './HourItem';

const r = 100;
const borderWidth = 10;
const secondWidth = 2;
const secondHeight = 10;
const duration = 60000;
const oneDay = 60 * 60 * 24;
const secondItems = Array.from({ length: 60 });
const hourItems = Array.from({ length: 12 });

export default function TheSun() {
  const [animationSunRay] = useState(
    secondItems.map(() => new Animated.Value(0)),
  );

  const animationHour = new Animated.Value(0);
  const animationMinute = new Animated.Value(0);
  const animationSecond = new Animated.Value(0);

  const [currentTime, setCurrentTime] = useState(new Date());
  // const [currentSecond, setCurrentSecond] = useState(0);

  // const animatedRun = useCallback(() => {
  //   Animated.loop(animationSecond, {
  //     Animated.spring(animatedAlarm, (
  //       toValue: 1,
  //       damping: 3,
  //       useNativeDriver: true,
  //     ))
  //   }).start(({ finished }) => {
  //     if (finished) {
  //       animationSecond.setValue(0);
  //       animatedRun();
  //     }
  //   });
  // });
  // Animated.timing(animationMinute, {
  //   toValue: 1,
  //   duration: duration,
  //   easing: Easing.linear,
  //   useNativeDriver: true,
  // }),
  //   Animated.timing(animationHour, {
  //     toValue: 1,
  //     duration: duration * 60 * 60,
  //     easing: Easing.linear,
  //     useNativeDriver: true,
  //   }),
  //   ]).start();

  //   const getTime = useCallback(() => {
  //     return (
  //       currentTime.getHours() +
  //       ' : ' +
  //       currentTime.getMinutes() +
  //       ' : ' +
  //       currentTime.getSeconds()
  //     );
  //   }, []);

  // console.log(currentTime);

  const renderSecondItem = () => {
    return secondItems.map((_, index) => {
      return (
        <SecondItem
          key={index}
          index={index}
          r={r - borderWidth}
          secondHeight={index % 5 == 0 ? 30 : secondHeight}
          secondWidth={secondWidth}
          animationSunRayValue={animationSunRay[index]}
          totalSunRays={secondItems.length}
        />
      );
    });
  };

  const renderHourItem = () => {
    return hourItems.map((_, index) => {
      return (
        <HourItem
          key={index}
          index={index + 1}
          r={r - borderWidth - 25}
          content={index + 1}
          totalHourItems={hourItems.length}
        />
      );
    });
  };

  // useEffect(() => {
  //   Animated.loop(
  //     Animated.timing(animationSecond, {
  //       toValue: 360,
  //       duration: 1000,
  //       easing: Easing.linear,
  //       useNativeDriver: true,
  //     }),
  //   ).start();
  // });

  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  let formatCurrentTime = currentTime.toLocaleTimeString().slice(0, -2);
  const [hours, minutes, seconds] = formatCurrentTime.split(':');
  let currentSecond =
    Number(hours) * 60 * 60 + Number(minutes) * 60 + Number(seconds);
  // console.log(currentSecond);

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {renderSecondItem()}

        <View style={styles.innerClockContainer}>
          <View style={styles.innerClockBaseStyle}>{renderHourItem()}</View>
          <View style={styles.wrapperClockwise}>
            <Animated.View
              style={[
                styles.hourHandWrapper,
                {
                  //   transform: [
                  //     {
                  //       rotate: animationHour.interpolate({
                  //         inputRange: [0, 1],
                  //         outputRange: [0 + 'deg', 30 + 'deg'],
                  //       }),
                  //     },
                  //   ],
                },
              ]}>
              <View style={styles.hourHand}></View>
            </Animated.View>
            <Animated.View
              style={[
                styles.minuteHandWrapper,
                {
                  //   transform: [
                  //     {
                  //       rotate: animationMinute.interpolate({
                  //         inputRange: [0, 1],
                  //         outputRange: [0 + 'deg', 6 + 'deg'],
                  //       }),
                  //     },
                  //   ],
                },
              ]}>
              <View style={styles.minuteHand}></View>
            </Animated.View>
            <Animated.View
              style={[
                styles.secondHandWrapper,
                {
                  transform: [
                    {
                      rotate: animationSecond.interpolate({
                        inputRange: [0, 360],
                        outputRange: ['0 deg', '360 deg'],
                      }),
                    },
                  ],
                },
              ]}>
              <View style={styles.secondHand}></View>
            </Animated.View>
          </View>
        </View>
      </View>
      <View>
        <Text>{currentTime.toLocaleTimeString()}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
    marginBottom: 50,
    width: r * 2,
    height: r * 2,
    borderRadius: r,
    borderWidth: borderWidth,
    borderColor: 'black',
  },
  innerClockContainer: {
    borderRadius: r,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red'
  },
  innerClockBaseStyle: {
    borderRadius: r,
    width: '80%',
    height: '80%',
    // backgroundColor: '#ffea00',
    position: 'absolute',
    alignItems: 'center',
  },
  wrapperClockwise: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'black',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  hourHandWrapper: {
    position: 'absolute',
    width: 3,
    height: 80,
  },
  hourHand: {
    width: 3,
    height: 40,
    backgroundColor: 'black',
  },
  minuteHandWrapper: {
    width: 2,
    height: 100,
  },
  minuteHand: {
    width: 2,
    height: 50,
    backgroundColor: 'grey',
  },
  secondHandWrapper: {
    width: 1,
    height: 120,
    position: 'absolute',
  },
  secondHand: {
    width: 1,
    height: 60,
    backgroundColor: 'red',
  },
});
