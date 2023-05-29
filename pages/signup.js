import React from "react";
import { TextInput, Button } from "react-native-paper";
import { Text, View } from "react-native";
import Buttons from "../components/Buttton";
import { Buttons2 } from "../components/Buttton";
import { useRouter } from "expo-router";

import SnackBar from "../components/snackbar";

const SignUp = () => {
  const router = useRouter();
  const [fullname, setFullname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmpassword] = React.useState("");
  const [visible, setVisible] = React.useState(false);
  const [response, setResponse] = React.useState();

  const Submit = async () => {
    if (
      password !== confirmPassword ||
      password === "" ||
      confirmPassword === ""
    ) {
      setVisible(true);
      return;
    }
    // console.log(`${email}: ${password} : ${confirmPassword} : ${phone}`);
    try {
      const submit = await fetch("http://192.168.43.15:8080/pizzaSignUp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname: fullname,
          email: email,
          phone: phone,
          password: password,
        }),
      });

      router.push("/Welcome");

      const submitted = await submit.json();
      setResponse(submitted);
      console.log(response);
      setVisible(true);
      // dispatch(saveLoggedInUser())
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <View
      style={{
        height: 650,
      }}
    >
      <SnackBar
        visible={visible}
        onDismissSnackBar={() => setVisible(false)}
        message={response}
      />

      <TextInput
        value={fullname}
        onChangeText={(text) => setFullname(text)}
        mode="flat"
        label="Full name"
        style={{
          width: "98%",
          backgroundColor: "white",
          height: 60,
        }}
      />
      <TextInput
        value={email}
        onChangeText={(text) => setEmail(text)}
        mode="flat"
        label="Email"
        style={{
          width: "98%",
          backgroundColor: "white",
          height: 60,
        }}
      />
      <TextInput
        value={phone}
        onChangeText={(text) => setPhone(text)}
        mode="flat"
        label="Phone number"
        style={{
          width: "98%",
          backgroundColor: "white",
          height: 60,
        }}
      />
      <TextInput
        value={password}
        onChangeText={(text) => setPassword(text)}
        mode="flat"
        label="Password"
        style={{
          width: "98%",
          backgroundColor: "white",
          height: 60,
        }}
      />
      <TextInput
        value={confirmPassword}
        onChangeText={(text) => setConfirmpassword(text)}
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
        onPress={() => router.push("/Welcome")}
      />

      <View>
        <Text
          style={{
            textAlign: "center",
            marginTop: 20,
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          OR
        </Text>
        <Buttons2
          text="Sign up with google"
          icon={"google"}
          width="100%"
          marginTop={30}
          backgroundColor="white"
          borderRadius={10}
        />
        <Buttons2
          text="Sign up with email"
          icon={"gmail"}
          width="100%"
          marginTop={30}
          backgroundColor="white"
          borderRadius={10}
        />
        <Buttons2
          text="Sign up with facebook"
          icon={"facebook"}
          width="100%"
          marginTop={30}
          backgroundColor="white"
          borderRadius={10}
        />
      </View>
    </View>
  );
};

export default SignUp;
