import React from "react";
import { ImageBackground, TouchableOpacity } from "react-native";
import { View, Text, ScrollView } from "react-native";

function CoursesTemplate({ background, onClick, title }) {
  return (
    <View
      style={{
        width: "100%",
      }}
    >
      <TouchableOpacity onPress={onClick}>
        <ImageBackground
          source={{ uri: background }}
          style={{
            width: "100%",
            height: 200,
            borderRadius: 20,

            overflow: "hidden",
          }}
        ></ImageBackground>
      </TouchableOpacity>

      <View
        style={{
          backgroundColor: "white",
        }}
      >
       
        <Text
          style={{
            fontSize: 15,
            marginBottom: 10,
            marginLeft: 20,
            backgroundColor: "white",
          }}
        >
       {title}
        </Text>
      </View>
    </View>
  );
}

export default CoursesTemplate;
