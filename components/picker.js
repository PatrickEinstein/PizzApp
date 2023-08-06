import React, { useRef, useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { View } from "react-native";
import { Text } from "react-native";

export const Pickers = ({ selectedValue, onValueChange }) => {
  // console.log(`value in picker`, selectedValue)
  return (
    <View>
      
      <Picker
        selectedValue={selectedValue}
        onValueChange={onValueChange}
        style={{
          color: "black",
          width: 150,
        }}
      >
         <Text>{selectedValue}</Text>
         
        <Picker.Item label="1" value="1" />
        <Picker.Item label="2" value="2" />
        <Picker.Item label="3" value="3" />
        <Picker.Item label="4" value="4" />
        <Picker.Item label="5" value="5" />
        <Picker.Item label="6" value="6" />
      </Picker>
     
    </View>
  );
};
