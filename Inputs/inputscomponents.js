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
  handleIncrement,
  handleDecrement,
  handleChangeText,
  ...props
}) => {
  // const { colors } = useTheme();

  // const handleIncrement = () => {
  //   let newValue = (+value) + 1;
  //   if (newValue > 100) {
  //     newValue = 100;
  //   }
  //   onIncrement(newValue);
  // };

  // const handleDecrement = () => {
  //   let newValue = (+value) - 1;
  //   if (newValue < 0) {
  //     newValue = 0;
  //   }
  //   onDecrement(newValue);
  // };

  // const handleChangeText = (newValue) => {
  //   onChange(newValue);
  // };

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
          icon="minus"
          onPress={onDecrement}
          iconColor="white"
          // color={colors.secondary}
          style={{ borderRadius: 0, backgroundColor: "red" }}
        />
        <View
          style={{
            flex: 1,
            paddingHorizontal: 5,
           
            margin: 1,
            width: 100,
            // textAlign: "center",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              width:'auto',
              flexWrap:"nowrap"
            }}
            onChangeText={onChange}
          >
            {value}
          </Text>
        </View>

        {/* <TextInput
          value={value}
          onChangeText={onChange}
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
          defaultValue={value}
        /> */}
        <IconButton
          icon="plus"
          onPress={onIncrement}
          // color={colors.primary}
          iconColor="white"
          style={{ borderRadius: 0, backgroundColor: "red" }}
        />
      </View>
    </View>
  );
};

export default InputWithAdornments;
