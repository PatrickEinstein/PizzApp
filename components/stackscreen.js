import { Stack } from "expo-router";
import Icon from "react-native-vector-icons/Feather";
import { Feather } from "react-native-vector-icons";
import { View, Animated, Image, Easing } from "react-native";
import React, { useRef, useEffect } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import LogoImage from "../assets/images/pizza.png";

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
  onPress2,
}) {
  return (
    <Stack.Screen
      options={{
        title: title,
        headerTitleStyle: { color: color },
        // headerTitle: titleicon,
        headerStyle: {
          backgroundColor: backgroundColor,
          // height: 10,
        },

        headerShadowVisible: false,

        headerTitleAlign: "center",

        headerLeft: () => (
          <Feather
            name={help}
            size={30}
            color={color}
            onPress={onPress2}
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
