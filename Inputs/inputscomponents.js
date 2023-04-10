import React from "react";
import { Text, TextInput, View } from "react-native";
import { IconButton, useTheme } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";

const InputWithAdornments = ({
  value,
  onChange,
  onIncrement,
  onDecrement,
  width,
  viewWidth,
  borderColor,
  label,
  name,
  ...props
}) => {
  const { colors } = useTheme();

  const handleIncrement = () => {
    let newValue = parseInt(value) + 1;
    if (newValue > 100) {
      newValue = 100;
    }
    onIncrement(newValue);
  };

  const handleDecrement = () => {
    let newValue = parseInt(value) - 1;
    if (newValue < 0) {
      newValue = 0;
    }
    onDecrement(newValue);
  };

  const handleChangeText = (newValue) => {
    onChange(newValue);
  };

  return (
    <View sx={{ alignItems: "center", justifyContent: "center" }}>
      <Text marginLeft="30%">
        {label}
        <Icon name={name} size={15} color="grey" />
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderWidth: 1,
          borderColor: borderColor,
          width: viewWidth,
        }}
      >
        <IconButton
          icon="plus"
          onPress={handleIncrement}
          // color={colors.primary}
          iconColor="white"
          style={{ borderRadius: 0, backgroundColor: "red" }}
        />

        <TextInput
          value={value}
          onChangeText={handleChangeText}
          style={{
            flex: 1,
            paddingHorizontal: 10,
            width: "auto",
            margin: 1,
            width: 100,
            textAlign: "center",
          }}
          keyboardType="numeric"
          maxLength={3}
          {...props}
        />

        <IconButton
          icon="minus"
          onPress={handleDecrement}
          iconColor="white"
          // color={colors.secondary}
          style={{ borderRadius: 0, backgroundColor: "red" }}
        />
      </View>
    </View>
  );
};

export default InputWithAdornments;
