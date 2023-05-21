import React, { useState } from "react";
import { TextInput, Button } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";

const Buttons = ({ icon, text, onPress, width, marginTop, borderRadius }) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: "100%",
        height: "auto",
      }}
    >
      <Button
        icon={icon}
        mode="contained"
        // onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={{
          width: width,
          marginTop: marginTop,
          backgroundColor: isPressed ? "grey" : "#990000",
          borderRadius: borderRadius,
        }}
      >
        {text}
      </Button>
    </TouchableOpacity>
  );
};

export default Buttons;
