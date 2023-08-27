import React, { useEffect, useState } from "react";
import { TextInput, Button } from "react-native-paper";
import { ScrollView, Text, View } from "react-native";
import Buttons from "../components/Buttton";
import { Buttons2 } from "../components/Buttton";
import { useRouter } from "expo-router";
import { useDispatch } from "react-redux";
import SnackBar from "../components/snackbar";
import { saveLoggedInUser } from "../Redux/Reducers";
import * as Facebook from "expo-auth-session/providers/facebook";
import * as Google from "expo-auth-session/providers/google";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as WebBrowser from "expo-web-browser";
import { AuthSession } from "expo-auth-session";

//276191175383-chv89i65r0p35hck2vd6pbqlaa6dsin4.apps.googleusercontent.com//web
//276191175383-7mke6hp95aibh2bt1ne8vc1lhv3omk70.apps.googleusercontent.com//ios id for google sign in
//276191175383-fitfq7bqkbi3bp7irol7vk8u7e96aro5.apps.googleusercontent.com //android

WebBrowser.maybeCompleteAuthSession();
const SignUp = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [fullname, setFullname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmpassword] = React.useState("");
  const [visible, setVisible] = React.useState(false);
  const [responses, setResponse] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const [request, response, promptAsync] = Facebook.useAuthRequest({
    clientId: "334492429005026",
  });
  const [Grequest, Gresponse, GpromptAsync] = Google.useAuthRequest({
    androidClientId:
      "276191175383-fitfq7bqkbi3bp7irol7vk8u7e96aro5.apps.googleusercontent.com",
    iosClientId:
      "276191175383-7mke6hp95aibh2bt1ne8vc1lhv3omk70.apps.googleusercontent.com",
    // webClientId:
    //   "276191175383-chv89i65r0p35hck2vd6pbqlaa6dsin4.apps.googleusercontent.com",
  });

  // FACEBOOK API
  useEffect(() => {
    if (response && response.type === "success" && response.authentication) {
      (async () => {
        const userInfoResponse = await fetch(
          `https://graph.facebook.com/me?access_token=${response.authentication.accessToken}&fields=id,name,picture.type(large)`
        );
        const userInfo = await userInfoResponse.json();
        dispatch(saveLoggedInUser(userInfo));
        // console.log(`userInfo`, user);
      })();
    }
    handleSignInWithGoogle();
  }, [response,Gresponse]);

  // FACEBOOK API
  const handlePressAsync = async () => {
    const result = await promptAsync();
    console.log(`result`, result);
    if (result.type !== "success") {
      alert("Uh oh, something went wrong");
      return;
    }
  };

  // GOOGLE API
  const handleSignInWithGoogle = async () => {
    const user = await AsyncStorage.getItem("@user");
    if (!user) {
      if (Gresponse?.type === "success") {
        await getUserInfo(Gresponse.authentication.accessToken);
      }
    } else {
      dispatch(saveLoggedInUser(user));
    }
  };

  // GOOGLE API
  const getUserInfo = async (token) => {
    if (!token) return;

    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const user = await response.json();
      await AsyncStorage.setItem("@user", JSON.stringify(user));
      dispatch(saveLoggedInUser(user));
    } catch (error) {
      alert("Uh oh, something went wrong");
    }
  };

  const Submit = async () => {
    setIsLoading(true);
    try {
      const submit = await fetch("https://all-servers.vercel.app/pizzaSignUp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname: fullname,
          email: email,
          phone: phone,
          password: password,
          confirmPassword: confirmPassword,
        }),
      });

      const submitted = await submit.json();
      console.log(submitted);
      setResponse(submitted.message);
      setVisible(true);
      if (submitted.status === "200") {
        setVisible(true);
        setVisible(true);
        alert("verifying ... click again");
        router.push("/BottomNavs");
        dispatch(saveLoggedInUser(submitted));
      } else {
        alert("verifying ... click again");
        return;
      }
      setIsLoading(false);
    } catch (err) {
      setResponse("verifying ... click again");
    }
  };

  return (
    <ScrollView>
      <SnackBar
        visible={visible}
        onDismissSnackBar={() => setVisible(false)}
        message={responses}
      />
      {isLoading && <BootLoader/>}
      <View>
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
          // icon={"door"}
          width="100%"
          marginTop={30}
          backgroundColor="#990000"
          borderRadius={10}
          onPress={Submit}
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
            borderRadius={10}
            disabled={!Grequest}
            onPress={() => GpromptAsync()}
          />
          <Buttons2
            text="Sign up with facebook"
            icon={"facebook"}
            disabled={!request}
            onPress={handlePressAsync}
            width="100%"
            marginTop={30}
            backgroundColor="white"
            borderRadius={10}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;
