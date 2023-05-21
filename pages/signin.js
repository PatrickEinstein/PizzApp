import React from "react";
import { TextInput } from "react-native-paper";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Buttons from "../components/Buttton";
import { useRouter } from "expo-router";

const SignIn = () => {
  const router = useRouter();
  const [text, setText] = React.useState("");
  return (
    <View
      style={{
        height: "auto",
        justifyContent: "space-between",
      }}
    >
      <View>
        <TextInput
          value={text}
          onChangeText={(text) => setText(text)}
          mode="flat"
          label="Email/phone number"
          style={{
            width: "100%",
            backgroundColor: "white",
          }}
        />
        <TextInput
          value={text}
          onChangeText={(text) => setText(text)}
          mode="flat"
          label="Password"
          style={{
            width: "100%",
            backgroundColor: "white",
          }}
        />
      </View>
      <Buttons
        text="Sign In"
        icon={"door"}
        width="100%"
        marginTop={30}
        backgroundColor="#990000"
        borderRadius={10}
        onPress={() => {
          router.push("/BottomNavs");
        }}
      />

      <View
        style={{
          marginTop: 40,
        }}
      >
        <TouchableOpacity>
          <Text>Forgot your password ?</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Dont't have an account ? Sign up</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          margin: 0,
          alignItems: "center",
          marginTop: 50,
        }}
      >
        <Buttons
          icon={"facebook"}
          width="10%"
          marginTop={30}
          backgroundColor="grey"
          borderRadius={10}
        />
        <Buttons
          icon={"instagram"}
          width="10%"
          marginTop={30}
          backgroundColor="grey"
          borderRadius={10}
        />
        <Buttons
          icon={"music-clef-treble"}
          width="10%"
          marginTop={30}
          backgroundColor="grey"
          borderRadius={10}
        />
      </View>
    </View>
  );
};

export default SignIn;
