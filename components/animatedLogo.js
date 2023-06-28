import { View, Animated, Image, Easing } from "react-native";
import React, { useRef, useEffect } from "react";

export function RollLogo() {
  const rotation = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    const spinAnimation = Animated.timing(rotation, {
      toValue: 1,
      duration: 1000, // Adjust the duration as needed
      easing: Easing.linear,
      useNativeDriver: true,
    });

    Animated.loop(spinAnimation).start();

    return () => {
      spinAnimation.stop();
    };
  }, []);

  const spin = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        width: 500,
        height: 500,
        backgroundColor: " white",
      }}
    >
      <Animated.Image
        source={require("../assets/images/pizza.png")} // Replace with your image path
        style={{
          width: 150,
          height: 150,
          transform: [{ rotate: spin }],
        }}
      />
    </View>
  );
}
export function NoRollLogo() {
  const rotation = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    const spinAnimation = Animated.timing(rotation, {
      toValue: 1,
      duration: 1000, // Adjust the duration as needed
      easing: Easing.linear,
      useNativeDriver: true,
    });

    Animated.loop(spinAnimation).start();

    return () => {
      spinAnimation.stop();
    };
  }, []);

  const spin = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        width: 100,
        height: 100,
        backgroundColor: "transparent",
      }}
    >
      <Image
        source={require("../assets/images/pizza.png")} // Replace with your image path
        style={{
          width: 70,
          height: 70,
        }}
      />
    </View>
  );
}
