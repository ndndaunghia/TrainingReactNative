import { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Easing,
} from 'react-native';
import SunRay from './SunRay';

const r = 50;
const sunRayWidth = 20;
const sunRayHeight = 40;
const duration = 1000;
const sunRays = Array.from({ length: (2 * (Math.PI * r)) / sunRayWidth });
export default function TheSun() {
  const [animatedRotates] = useState(sunRays.map(() => new Animated.Value(0)));
  const [animatedTranslates] = useState(
    sunRays.map(() => new Animated.Value(0)),
  );
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
          animatedRotateValue={animatedRotates[index]}
          animatedTranslateValue={animatedTranslates[index]}
          totalSunRays={sunRays.length}
        />
      );
    });
  };

  useEffect(() => {
    animatedRotates.map((animation, index) => {
      const animations = [
        Animated.timing(animation, {
          toValue: isShow ? 1 : 0,
          duration,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(animatedTranslates[index], {
          toValue: isShow ? 1 : 0,
          duration,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ];

      return Animated.parallel(animations).start(({ finished }) => {
        Animated.spring(animatedSunSpin, {
          toValue: isShow && finished ? 1 : 0,
          useNativeDriver: true,
        }).start();
      });
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
  },
  innerSunContainer: {
    borderRadius: r,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerSunBaseStyle: {
    borderRadius: r,
    width: '80%',
    height: '80%',
    backgroundColor: '#ffea00',
    position: 'absolute',
  },
  sunTitle: {
    color: 'purple',
    fontWeight: 'bold',
  },
});
