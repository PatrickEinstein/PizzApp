//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import InputWithAdornments from "../Inputs/inputscomponents";
import { useDispatch } from "react-redux";
import { toggleSaved } from "../Redux/Reducers";
import { TouchableOpacity } from "react-native-gesture-handler";

// create a component
const Save = () => {
  const disapatch = useDispatch();
  cons[(Value, setValue)];

  const onHandlechange = () => {
    const newValue = Value;
    setValue(newValue);
  };

  const onSave = () => {
    const newValue = Value;
    disapatch(toggleSaved(newValue));
  };

  const onDelete = () => {};

  return (
    <View>
      <InputWithAdornments
        display={false}
        value={value}
        onChange={onHandlechange}
      />

      <TouchableOpacity aria-label="Save" onPress={onSave} />
    </View>
  );
};

export default Save;
