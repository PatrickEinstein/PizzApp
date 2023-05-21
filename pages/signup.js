import React from "react";
import { TextInput, Button } from "react-native-paper";
import { View } from "react-native";
import Buttons from "../components/Buttton";
import { ScrollView } from "react-native-gesture-handler";
const SignUp = () => {
  const [text, setText] = React.useState("");
  return (
    <View
      style={{
        height: 700,
        marginTop: 40,
      }}
    >
      <TextInput
        value={text}
        onChangeText={(text) => setText(text)}
        mode="flat"
        label="Full name"
        style={{
          width: "98%",
          backgroundColor: "white",
          height: 60,
        }}
      />
      <TextInput
        value={text}
        onChangeText={(text) => setText(text)}
        mode="flat"
        label="Email"
        style={{
          width: "98%",
          backgroundColor: "white",
          height: 60,
        }}
      />
      <TextInput
        value={text}
        onChangeText={(text) => setText(text)}
        mode="flat"
        label="Phone number"
        style={{
          width: "98%",
          backgroundColor: "white",
          height: 60,
        }}
      />
      <TextInput
        value={text}
        onChangeText={(text) => setText(text)}
        mode="flat"
        label="Password"
        style={{
          width: "98%",
          backgroundColor: "white",
          height: 60,
        }}
      />
      <TextInput
        value={text}
        onChangeText={(text) => setText(text)}
        mode="flat"
        label="Confirm password"
        style={{
          width: "98%",
          backgroundColor: "white",
          height: 60,
        }}
      />

      <Buttons
        text="Sign Up"
        icon={"door"}
        width="100%"
        marginTop={30}
        backgroundColor="#990000"
        borderRadius={10}
      />

      <View>
        <Buttons
          text="Sign up with google"
          icon={"google"}
          width="100%"
          marginTop={30}
          backgroundColor="white"
          borderRadius={0}
        />
        <Buttons
          text="Sign up with email"
          icon={"gmail"}
          width="100%"
          marginTop={30}
          backgroundColor="white"
          borderRadius={0}
        />
        <Buttons
          text="Sign up with facebook"
          icon={"facebook"}
          width="100%"
          marginTop={30}
          backgroundColor="white"
          borderRadius={0}
        />
      </View>
    </View>
  );
};

export default SignUp;
