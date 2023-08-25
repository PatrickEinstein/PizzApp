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
import * as WebBrowser from "expo-web-browser";
import { AuthSession } from "expo-auth-session";

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

  WebBrowser.maybeCompleteAuthSession();
  const [user, setUser] = useState(null);
  const [request, response, promptAsync] = Facebook.useAuthRequest({
    clientId: "334492429005026",
  });

  useEffect(() => {
    if (response && response.type === "success" && response.authentication) {
      (async () => {
        const userInfoResponse = await fetch(
          `https://graph.facebook.com/me?access_token=${response.authentication.accessToken}&fields=id,name,picture.type(large)`
        );
        const userInfo = await userInfoResponse.json();
        // setUser(userInfo);
        dispatch(saveLoggedInUser(userInfo));
        // console.log(`userInfo`, user);
      })();
    }
  }, [response]);

  const handlePressAsync = async () => {
    const result = await promptAsync();
    console.log(`result`, result);
    if (result.type !== "success") {
      alert("Uh oh, something went wrong");
      return;
      // setEmail(result.email);
      // setPhone(result.phoneNumber);
    }
  };

  // function Profile({ user }) {
  //   return (
  //     <View>
  //       <Image source={{ uri: user.picture.data.url }} />
  //       <Text>{user.name}</Text>
  //       <Text>{user.id}</Text>
  //     </View>
  //   );
  // }

  const Submit = async () => {
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
      <View>
        {/* {user && <Profile user={user} />} */}
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
            // onPress={}
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
