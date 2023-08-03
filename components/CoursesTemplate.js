import React from "react";
import { ImageBackground, TouchableOpacity } from "react-native";
import { View, Text, ScrollView } from "react-native";

function CoursesTemplate({ background, onClick }) {
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
            height: 300,
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
            fontWeight: "bold",
            fontSize: 20,
            marginBottom: 10,
            marginLeft: 20,
            backgroundColor: "white",
          }}
        >
          Title
        </Text>
        <Text
          style={{
            fontSize: 15,
            marginBottom: 10,
            marginLeft: 20,
            backgroundColor: "white",
          }}
        >
          Lorem ipsum dolor sit amet consectetur. Vestibulum vitae magna
          ultricies tristique. lorem ipsum doloe met si
        </Text>
      </View>
    </View>
  );
}

export default CoursesTemplate;
