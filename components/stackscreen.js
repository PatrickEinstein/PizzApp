import { Stack } from "expo-router";
import Icon from "react-native-vector-icons/Feather";
import { Feather } from "react-native-vector-icons";
import { View, Animated, Image, Easing } from "react-native";
import React, { useRef, useEffect } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import LogoImage from "../assets/images/pizza.png";

export function CustomTitle({ viewheight, viewwidth }) {
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
      }}
    >
      {/* <Animated.Image */}
      <Image
        source={require("../assets/images/pizza.png")} // Replace with your image path
        style={{
          width: 150,
          height: 100,
          // transform: [{ rotate: spin }],
        }}
      />
    </View>
  );
}
function Stackscreen({
  onPress,
  title,
  icon,
  height,
  width,
  backgroundColor,
  titleicon,
  color,
  help,
}) {
  return (
    <Stack.Screen
      options={{
        title: title,
        headerTitleStyle: { color: color },
        headerTitle: titleicon,
        headerStyle: {
          backgroundColor: backgroundColor,
          height: 100,
        },

        headerShadowVisible: false,

        headerTitleAlign: "center",

        headerLeft: () => (
          <Feather
            name={help}
            size={30}
            color={color}
            onPress={() => console.log("Help button pressed")}
            style={{ marginRight: 10 }}
          />
        ),
        headerRight: () => (
          <TouchableOpacity onPress={onPress}>
            <Icon name={icon} size={30} color={color} />
          </TouchableOpacity>
        ),
      }}
    />
  );
}

export default Stackscreen;
