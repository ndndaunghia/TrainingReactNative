import { useEffect, useState, useRef } from "react";
import {
  Animated,
  StyleSheet,
  View,
  Easing,
  Text,
  TextInput,
} from "react-native";
import SecondItem from "./SecondItem";
import HourItem from "./HourItem";

const r = 100;
const borderWidth = 10;
const secondWidth = 2;
const secondHeight = 10;
const secondItems = Array.from({ length: 60 });
const hourItems = Array.from({ length: 12 });

export default function Clock() {
  const textInputRef = useRef(null);

  const [animationSunRay] = useState(
    secondItems.map(() => new Animated.Value(0))
  );

  const animationHour = new Animated.Value(0);
  const animationMinute = new Animated.Value(0);
  const animationSecond = new Animated.Value(0);
  const animationClock = new Animated.Value(0);

  const [currentTime, setCurrentTime] = useState(new Date());
  const [time, setTime] = useState("");

  const renderSecondItem = () => {
    return secondItems.map((_, index) => {
      return (
        <SecondItem
          key={index}
          index={index}
          r={r - borderWidth}
          secondHeight={index % 5 == 0 ? 18 : secondHeight}
          secondWidth={secondWidth}
          animationSunRayValue={animationSunRay[index]}
          totalSecondItems={secondItems.length}
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

  const handleAlarmRing = () => {
    Animated.timing(animationClock, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start(({ finished }) => {
      if (finished) {
        setTime("");
        textInputRef.current.clear();
      }
    });
  };

  const updateClockHands = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourAngle = hours * 30 + minutes * 0.5;
    const minuteAngle = minutes * 6 + seconds * 0.1;
    const secondAngle = seconds * 6;

    animationHour.setValue(hourAngle);
    animationMinute.setValue(minuteAngle);
    animationSecond.setValue(secondAngle);

    // Start the animations.
    Animated.timing(animationHour, {
      toValue: hourAngle,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();

    Animated.timing(animationMinute, {
      toValue: minuteAngle,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();

    Animated.timing(animationSecond, {
      toValue: secondAngle,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (currentTime.toLocaleTimeString() == time) {
      handleAlarmRing();
    }
  }, [time, currentTime]);
  updateClockHands();

  return (
    <View style={styles.wrapper}>
      <Animated.View
        style={[
          styles.container,
          {
            transform: [
              {
                scale: animationClock.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 1.5],
                }),
              },
            ],
          },
        ]}
      >
        {renderSecondItem()}

        <View style={styles.innerClockContainer}>
          <View style={styles.innerClockBaseStyle}>{renderHourItem()}</View>
          <View style={styles.wrapperClockwise}>
            <Animated.View
              style={[
                styles.hourHandWrapper,
                {
                  transform: [
                    {
                      rotate: animationHour.interpolate({
                        inputRange: [0, 360],
                        outputRange: ["0deg", "360deg"],
                      }),
                    },
                  ],
                },
              ]}
            >
              <View style={styles.hourHand}></View>
            </Animated.View>

            <Animated.View
              style={[
                styles.minuteHandWrapper,
                {
                  transform: [
                    {
                      rotate: animationMinute.interpolate({
                        inputRange: [0, 360],
                        outputRange: ["0deg", "360deg"],
                      }),
                    },
                  ],
                },
              ]}
            >
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
                        outputRange: ["0deg", "360deg"],
                      }),
                    },
                  ],
                },
              ]}
            >
              <View style={styles.secondHand}></View>
            </Animated.View>
          </View>
        </View>
      </Animated.View>
      <View>
        <Text>{currentTime.toLocaleTimeString()}</Text>
      </View>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.inputStyles}
          ref={textInputRef}
          onChangeText={(text) => setTime(text)}
        ></TextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    alignItems: "center",
    marginBottom: 50,
    width: r * 2,
    height: r * 2,
    borderRadius: r,
    borderWidth: borderWidth,
    borderColor: "black",
  },
  innerClockContainer: {
    borderRadius: r,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: 'red'
  },
  innerClockBaseStyle: {
    borderRadius: r,
    width: "80%",
    height: "80%",
    // backgroundColor: '#ffea00',
    position: "absolute",
    alignItems: "center",
  },
  wrapperClockwise: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "black",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  hourHandWrapper: {
    position: "absolute",
    width: 3,
    height: 80,
  },
  hourHand: {
    width: 3,
    height: 40,
    backgroundColor: "black",
  },
  minuteHandWrapper: {
    width: 2,
    height: 100,
  },
  minuteHand: {
    width: 2,
    height: 50,
    backgroundColor: "grey",
  },
  secondHandWrapper: {
    width: 1,
    height: 120,
    position: "absolute",
  },
  secondHand: {
    width: 1,
    height: 60,
    backgroundColor: "red",
  },
  inputWrapper: {
    borderWidth: 1,
    borderColor: "black",
    marginVertical: 20,
  },
  inputStyles: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
});
