import React from "react";
import { View, Text, ScrollView } from "react-native";

function CoursesTemplate() {
  return (
    <View
      style={{
        width: "100%",
      }}
    >
      <View
        style={{
          padding: 20,
          backgroundColor: "aqua",
          width: "90%",
          marginRight: "auto",
          marginLeft: "auto",
          height: 200,
          borderRadius: 20,
          margin: 10,
        }}
      >
        <Text>courses</Text>
      </View>

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
