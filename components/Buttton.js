import React, { useState } from "react";
import { TextInput, Button } from "react-native-paper";

const Buttons = ({
  icon,
  text,
  onPress,
  width,
  marginTop,
  borderRadius,
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  return (
    <Button
      icon={icon}
      mode="contained"
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={{
        width: width,
        marginTop: marginTop,
        backgroundColor: isPressed ? "grey" : "#990000",
        // borderRadius: borderRadius,
      }}
    >
      {text}
    </Button>
  );
};

export default Buttons;
