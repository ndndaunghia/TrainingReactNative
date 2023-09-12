import { useRef, useState } from 'react';
import {
  Animated,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// export default function App() {
//   const animation = useRef(new Animated.Value(0)).current;
//   const [btnClicked, setBtnClicked] = useState(false);
//   const startAnimation = () => {
//     Animated.spring(animation, {
//       toValue: btnClicked ? 0 : 1,
//       useNativeDriver: true,
//       friction: 3,
//       tension: 3,
//       // speed: 20,
//       // tension: 1
//     }).start();
//     // Animated.timing(animation, {
//     //   toValue: btnClicked ? 0 : 1,
//     //   duration: 500,
//     //   useNativeDriver: true
//     // }).start();
//     // Animated.decay(animation, {
//     //   velocity: Ơ
//     // })
//   };
//   return (
//     <View style={styles.container}>
//       <Animated.View
//         style={[
//           styles.box,
//           {
//             borderRadius: btnClicked ? 50 : 0,
//             transform: [
//               {
//                 translateY: animation.interpolate({
//                   inputRange: [0, 1],
//                   outputRange: [0, -100],
//                 }),
//               },
//               {
//                 rotate: animation.interpolate({
//                   inputRange: [0, 1],
//                   outputRange: ['0deg', '360deg'],
//                 }),
//               },
//               {
//                 translateX: animation.interpolate({
//                   inputRange: [0, 1],
//                   outputRange: [0, 150],
//                 }),
//               },
//               {
//                 scale: animation.interpolate({
//                   inputRange: [0, 1],
//                   outputRange: [1, 0.5],
//                 }),
//               },
//             ],
//           },
//         ]}></Animated.View>
//       <TouchableOpacity
//         style={styles.clickBtn}
//         onPress={() => {
//           setBtnClicked(!btnClicked);
//           startAnimation();
//         }}>
//         <Text>Click</Text>
//       </TouchableOpacity>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   box: {
//     width: 100,
//     height: 100,
//     backgroundColor: '#4caf50',
//     marginBottom: 50,
//   },
//   clickBtn: {
//     backgroundColor: '#6fbf73',
//     paddingVertical: 10,
//     paddingHorizontal: 30,
//     borderRadius: 20,
//   },
// });
const ARR = [1, 2, 3, 4];
const WIDTH = 100;
const SUB_WIDTH = 20;
const R = WIDTH / 2;
const ANGLE = (2 * Math.PI) / ARR.length;
export default function App() {
  const animation = useRef(new Animated.Value(0)).current;
  const [btnClicked, setBtnClicked] = useState(false);
  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: btnClicked ? 0 : 1,
      // duration: 500,
      useNativeDriver: true,
    }).start();
    
  };
  const sunRayStyle = (index) => {
    const base = R - SUB_WIDTH / 2;
    const x = base - (R + SUB_WIDTH / 2 + 10) * Math.sin(ANGLE * index);
    const y = base - (R + SUB_WIDTH / 2 + 10) * Math.cos(ANGLE * index);

    return {
      top: y,
      left: x,
      transform: [{ rotate: `${180 - index * 90}deg` }],
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
