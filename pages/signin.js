import React, { useEffect } from "react";
import { TextInput } from "react-native-paper";
import { View, Text, Button, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Buttons, { Buttons2 } from "../components/Buttton";
import { useRouter } from "expo-router";
import SnackBar from "../components/snackbar";
import { useDispatch } from "react-redux";
import { saveLoggedInUser } from "../Redux/Reducers";
import * as Facebook from "expo-auth-session/providers/facebook";
import * as WebBrowser from "expo-web-browser";
import BootLoader from "../components/BootLoader";
WebBrowser.maybeCompleteAuthSession();
const SignIn = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [response, setResponse] = React.useState("");
  const [visible, setVisible] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const Submit = async (e) => {
    setIsLoading(true);
    if (password.length > 3) {
      try {
        const submit = await fetch(
          "https://all-servers.vercel.app/pizzaSignIn",
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
        setVisible(true);
        if (submitted.status === "200") {
          dispatch(saveLoggedInUser(submitted));
          setResponse(submitted.message);
          setVisible(true);
        } else {
          setResponse(submitted.message);
          setVisible(true);
          return;
        }
        console.log(submitted);
        console.log(response);
      } catch (err) {
        console.log(err);
        setResponse("something went wrong, please try again later");
      }
      setIsLoading(false);
    } else {
      setVisible(true);
      setResponse("Please enter a valid password");
    }
  };

  return (
    <ScrollView>
      <SnackBar
        visible={visible}
        onDismissSnackBar={() => setVisible(false)}
        message={response}
      />
        {isLoading && <BootLoader/>}
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
        width="100%"
        marginTop={30}
        backgroundColor="#990000"
        borderRadius={10}
        onPress={Submit}
      />

      <View
        style={{
          marginTop: 40,
        }}
      >
        <TouchableOpacity onPress={() => router.push("/input")}>
          <Text>Forgot your password ?</Text>
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
        backgroundColor="#990000"
        borderRadius={10}
        color="black"
      />
      <Buttons
        icon={"instagram"}
        width="10%"
        marginTop={30}
        backgroundColor="#990000"
        borderRadius={10}
        color="black"
      />
      <Buttons
        icon={"music-clef-treble"}
        width="10%"
        marginTop={30}
        backgroundColor="#990000"
        borderRadius={10}
        color="black"
      />
      </View>
    </ScrollView>
  );
};

export default SignIn;
