import { useEffect, useState } from 'react';
import { Animated, Button, StyleSheet, Text, View, Easing } from 'react-native';
import SunRay from './SunRay';

const r = 100;
const sunRayWidth = 2;
const sunRayHeight = 10;
const duration = 500;
const sunRays = Array.from({ length: 60});
export default function TheSun() {
  const [animationSunRay] = useState(sunRays.map(() => new Animated.Value(0)));
  const [animationSunTail] = useState(sunRays.map(() => new Animated.Value(0)));
  const [animatedSunSpin] = useState(new Animated.Value(0));
  const [isShow, setShow] = useState(false);

  const toggle = () => {
    setShow((prevValue) => !prevValue);
  };

  const renderSunRay = () => {
    return sunRays.map((_, index) => {
      return (
        <SunRay
          key={index}
          index={index}
          r={r}
          sunRayHeight={sunRayHeight}
          sunRayWidth={sunRayWidth}
          animationSunRayValue={animationSunRay[index]}
          animationSunTailValue={animationSunTail[index]}
          totalSunRays={sunRays.length}
        />
      );
    });
  };

  useEffect(() => {
    Animated.stagger(
      duration / 2,
      animationSunRay.map((animation, index) => {
        const animations = [
          Animated.timing(animation, {
            toValue: isShow ? 1 : 0,
            duration,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
          Animated.timing(animationSunTail[index], {
            toValue: isShow ? 1 : 2,
            duration,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
        ];

        return Animated.parallel(animations);
      }),
    ).start(({ finished }) => {
      if (finished) {
        if (isShow) {
          Animated.spring(animatedSunSpin, {
            toValue: 1,
            mass: 2,
            useNativeDriver: true,
          }).start(() => {
            animatedSunSpin.setValue(0);
          });
        } else {
          animationSunTail.forEach((animation) => {
            animation.setValue(0);
          });
        }
      }
    });
  }, [isShow]);
  return (
    <View style={styles.wrapper}>
      <Animated.View
        style={[
          styles.container,
          {
            transform: [
              {
                scale: animatedSunSpin.interpolate({
                  inputRange: [0, 0.3, 1],
                  outputRange: [1, 1.2, 1],
                }),
              },
              {
                rotate: animatedSunSpin.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0deg', 360 * 2 + 'deg'],
                }),
              },
            ],
          },
        ]}>
        {renderSunRay()}

        <View style={styles.innerSunContainer}>
          <View style={styles.innerSunBaseStyle} />
          <Text style={styles.sunTitle}>Sun</Text>
        </View>
      </Animated.View>

      <Button title="Toggle" onPress={toggle} />
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
    // backgroundColor: 'green',
    borderRadius: r,
  },
  innerSunContainer: {
    borderRadius: r,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red'
  },
  innerSunBaseStyle: {
    borderRadius: r,
    width: '80%',
    height: '80%',
    // backgroundColor: '#ffea00',
    position: 'absolute',
  },
  sunTitle: {
    color: 'purple',
    fontWeight: 'bold',
  },
});
