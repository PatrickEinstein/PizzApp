import React from "react";
import { TouchableOpacity, Text, View } from "react-native";

const StyledIconButton = ({
  label,
  onPress,
  disabled,
  helperText,
  style,
  isVisible,
  clickedLabel,
  color,
}) => {
  const buttonStyle = [
    { borderRadius: 0, padding: 10 },
    clickedLabel === label
      ? { backgroundColor: "#990000", color: "black" }
      : {},
    style,
  ];

  return (
    <View>
      <TouchableOpacity
        style={buttonStyle}
        onPress={onPress}
        disabled={disabled}
      >
        <Text
          style={{
            color: color,
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: 0,
            marginTop: 0,
          }}
        >
          {label}
        </Text>
      </TouchableOpacity>
      {/* {isVisible && (
        <Text style={{ color: "yellow", textAlign: "center" }}>
          {helperText}
        </Text>
      )} */}
    </View>
  );
};

export default StyledIconButton;
