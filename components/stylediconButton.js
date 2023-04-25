
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
  color
}) => {
  const buttonStyle = [
    { borderRadius: 0, padding: 10 },
    clickedLabel === label ? { backgroundColor: "#990000" , color:"white"} : {},
    style,
  ];

  return (
    <View>
      <View>
        <TouchableOpacity
          style={buttonStyle}
          onPress={onPress}
          disabled={disabled}
        >
          <Text
            style={{ color: color, fontWeight: "bold", textAlign: "center" }}
          >
            {label}
          </Text>
        </TouchableOpacity>
        {isVisible && (
          <Text style={{ color: "yellow", textAlign: "center" }}>
            {helperText}
          </Text>
        )}
      </View>
    </View>
  );
};

export default StyledIconButton;
