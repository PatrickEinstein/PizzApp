import React, { useState } from "react";
import { View, Text, Picker } from "react-native";

const MySelect = ({ selectedValue, onValueChange }) => {
  return (
    <View>
      <Picker
        selectedValue={selectedValue}
        style={{
          width: 40,
          color: "maroon",
          backgroundColor: "maroon",
          color: "white",
        }}
        onValueChange={onValueChange}
      >
        <Picker.Item label="1" value={+1} />
        <Picker.Item label="2" value={+2} />
        <Picker.Item label="3" value={+3} />
        <Picker.Item label="4" value={+4} />
        <Picker.Item label="5" value={+5} />
        <Picker.Item label="6" value={+6} />
      </Picker>
    </View>
  );
};

export default MySelect;
