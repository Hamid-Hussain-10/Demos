import React, { useRef } from "react";
import { View, Text, StyleSheet, Animated, PanResponder } from "react-native";

const SWIPE_WIDTH = 280;
const THUMB_SIZE = 48;

const SwipeButton = ({ onComplete }) => {
  const translateX = useRef(new Animated.Value(0)).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,

      onPanResponderMove: (_, gesture) => {
        if (gesture.dx >= 0 && gesture.dx <= SWIPE_WIDTH - THUMB_SIZE) {
          translateX.setValue(gesture.dx);
        }
      },

      onPanResponderRelease: (_, gesture) => {
        if (gesture.dx > SWIPE_WIDTH * 0.6) {
          Animated.timing(translateX, {
            toValue: SWIPE_WIDTH - THUMB_SIZE,
            duration: 200,
            useNativeDriver: true,
          }).start(() => {
            onComplete && onComplete();
          });
        } else {
          Animated.spring(translateX, {
            toValue: 0,
            useNativeDriver: true,
          }).start();
        }
      },
    })
  ).current;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Get Started</Text>

      <Animated.View
        {...panResponder.panHandlers}
        style={[
          styles.thumb,
          {
            transform: [{ translateX }],
          },
        ]}
      />
    </View>
  );
};

export default SwipeButton;

const styles = StyleSheet.create({
  container: {
    width: SWIPE_WIDTH,
    height: 56,
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 20,
    overflow: "hidden",
  },
  text: {
    position: "absolute",
    alignSelf: "center",
    fontSize: 16,
    fontWeight: "600",
    color: "#34849B",
  },
  thumb: {
    width: THUMB_SIZE,
    height: THUMB_SIZE,
    borderRadius: THUMB_SIZE / 2,
    backgroundColor: "#4CB2B3",
    marginLeft: 4,
  },
});
