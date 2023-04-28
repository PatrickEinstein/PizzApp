import React, { useRef } from "react";
import { Text, TextInput, View, TouchableWithoutFeedback } from "react-native";
import { IconButton, useTheme } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
import { ScrollView } from "react-native";
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
  g,
  display,
  height,
  marginLeft,
  marginRight,
  marginTop,
  ...props
}) => {
  const inputRef = React.useRef(null);

  const handlePress = () => {
    inputRef.current.blur();
  };

  return (
    <View sx={{ alignItems: "center", justifyContent: "center" }}>
      <Text
        style={{
          textAlign: "center",
          display: display,
        }}
      >
        {label}
        <Icon name={name} size={15} color="grey" />
      </Text>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderColor: borderColor,
          margin: 0,
          marginRight: 0,
          padding: 0,
          width: viewWidth,
          borderRadius: 20,
        }}
      >
        <IconButton
          icon="minus"
          style={{
            marginHorizontal: 0,
            borderRadius: 0,
            backgroundColor: "#990000",
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
            display: display,
          }}
          iconColor="white"
          onPress={() => {
            onDecrement();
            handlePress();
          }}
        />

        <TextInput
          value={value.toString()}
          onChangeText={onChange}
          style={{
            flex: 1,
            height: height,
            textAlign: "center",
            paddingTop: 5,
            paddingBottom: 5,
            borderColor: "#990000",
            borderWidth: 1,
            marginHorizontal: 0,
            borderLeftWidth: 1,
            // marginLeft: marginLeft,
            // marginRight:marginRight,
            // marginTop:marginTop,
          }}
          keyboardType="numeric"
          maxLength={4}
          minLength={1}
          defaultValue={value.toString()}
          ref={inputRef}
          {...props}
        />

        <IconButton
          icon="plus"
          onPress={() => {
            onIncrement();
            handlePress();
          }}
          iconColor="white"
          style={{
            display: display,
            borderRadius: 0,
            backgroundColor: "#990000",
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
            marginLeft: 0,
          }}
        />
      </View>
    </View>
  );
};

export default InputWithAdornments;
