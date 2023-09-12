import { useRef, useState } from 'react';
import {
  Animated,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Easing,
} from 'react-native';

const ARR = [1, 2, 3, 4];
const WIDTH = 100;
const SUB_WIDTH = 20;
const R = WIDTH / 2;
const ANGLE = (2 * Math.PI) / ARR.length;
export default function TheSun() {
  const animation = useRef(new Animated.Value(0)).current;
  const [btnClicked, setBtnClicked] = useState(false);
  const [animatedRotates] = useState(ARR.map(() => new Animated.Value(0)));
  const startAnimation = () => {
    // animatedRotates
    //   .map((animation, index) => {
    Animated.timing(animation, {
      toValue: btnClicked ? 1 : 0,
      easing: Easing.linear,
      useNativeDriver: true,
      // });
    }).start();
  };
  const sunRayStyle = (index) => {
    const base = R - SUB_WIDTH / 2;
    const x = base - (R + SUB_WIDTH / 2 + 10) * Math.sin(ANGLE * index);
    const y = base - (R + SUB_WIDTH / 2 + 10) * Math.cos(ANGLE * index);

    return {
      top: y,
      left: x,
      // transform: [{ rotate: `${180 - index * 90}deg` }],
    };
  };
  const renderSunRay = () => {
    return ARR.map((item, index) => {
      return (
        <Animated.View
          style={[
            styles.sunRay,
            sunRayStyle(index),
            {
              transform: [
                {
                  rotate: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [
                      `${0 - index * 90}deg`,
                      `${180 - index * 90}deg`,
                    ],
                  }),
                },
              ],
            },
          ]}
          key={index}></Animated.View>
      );
    });
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.sunItem}>
        <Text style={styles.sunText}>The Sun</Text>
        {renderSunRay()}
      </View>
      <TouchableOpacity
        style={styles.btnItem}
        onPress={() => {
          setBtnClicked(!btnClicked);
          startAnimation();
        }}>
        <Text>Click</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sunItem: {
    width: WIDTH,
    height: WIDTH,
    backgroundColor: '#fdd835',
    borderRadius: R,
    // justifyContent: 'center',
    // alignItems: 'center',
    position: 'relative',
  },
  sunText: {
    top: '42%',
    left: '20%',
  },

  sunRay: {
    position: 'absolute',
    width: SUB_WIDTH,
    height: SUB_WIDTH,
    backgroundColor: 'transparent',
    borderLeftWidth: SUB_WIDTH / 2,
    borderRightWidth: SUB_WIDTH / 2,
    borderTopWidth: SUB_WIDTH,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: 'red',
    // backgroundColor: 'red',
    // borderRadius: SUB_WIDTH / 2,
  },
  btnItem: {
    marginTop: 100,
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 10,
    backgroundColor: '#96c267',
  },
});
