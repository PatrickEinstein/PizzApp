import React, { useEffect } from "react";
import { TextInput } from "react-native-paper";
import { View, Text, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Buttons from "../components/Buttton";
import { useRouter } from "expo-router";
import { saveLoggedInUser } from "../Redux/Reducers";
import { useNavigation } from "@react-navigation/native";
import SnackBar from "../components/snackbar";
import { useDispatch } from "react-redux";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const router = useRouter();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [response, setResponse] = React.useState("");
  const [visible, setVisible] = React.useState(false);

  const Submit = async (e) => {
    try {
      //"http://192.168.43.16:8080/pizzaSignIn"
      const submit = await fetch(
        "https://nice-red-piglet-veil.cyclic.app/pizzaSignIn",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        }
      );

      const submitted = await submit.json();
      setResponse(submitted.message);
      console.log(submitted);
      console.log(response);
      setVisible(true);

      if (submitted.status === "200") {
        setVisible(true);
        setVisible(true);
        router.push("/Welcome");
        dispatch(saveLoggedInUser(submitted));
      } else {
        return;
      }
    } catch (err) {
      setResponse(err.message);
    }
  };

  return (
    <View>
      <SnackBar
        visible={visible}
        onDismissSnackBar={() => setVisible(false)}
        message={response}
      />
      <View>
        <TextInput
          value={email}
          onChangeText={(text) => setEmail(text)}
          mode="flat"
          label="Email"
          style={{
            width: "100%",
            backgroundColor: "white",
          }}
        />
        <TextInput
          value={password}
          onChangeText={(text) => setPassword(text)}
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
        // icon={"door"}
        width="100%"
        marginTop={30}
        backgroundColor="#990000"
        borderRadius={10}
        onPress={Submit}
        // onPress={() => router.push("/Welcome")}
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
          backgroundColor="white"
          borderRadius={10}
          color="black"
        />
        <Buttons
          icon={"instagram"}
          width="10%"
          marginTop={30}
          backgroundColor="white"
          borderRadius={10}
          color="black"
        />
        <Buttons
          icon={"music-clef-treble"}
          width="10%"
          marginTop={30}
          backgroundColor="white"
          borderRadius={10}
          color="black"
        />
      </View>
    </View>
  );
};

export default SignIn;
