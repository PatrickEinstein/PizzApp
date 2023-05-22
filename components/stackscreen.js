import { Stack } from "expo-router";
import Icon from "react-native-vector-icons/Feather";
import { Feather } from "react-native-vector-icons";

import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

function Stackscreen({ onPress, title, icon, height, width }) {
  return (
    <Stack.Screen
      options={{
        title: title,
        headerTitleStyle: { color: "white" },
        headerStyle: {
          backgroundColor: "#990000",
          height: height,
          borderColor: "#990000",
        },
        headerShadowVisible: false,

        headerTitleAlign: "center",
        //headerLeft: () => <Icon name="help" size={15} color="white" />,

        headerLeft: () => (
          <Feather
            name="help-circle"
            size={30}
            color="#FFF"
            onPress={() => console.log("Help button pressed")}
            style={{ marginRight: 10 }}
          />
        ),
        headerRight: () => (
          <TouchableOpacity onPress={onPress}>
            <Icon
              name={icon}
              // name="help-circle"
              size={30}
              color="white"
              //   onPress={onPress}
            />
          </TouchableOpacity>
        ),
      }}
    />
  );
}

export default Stackscreen;
