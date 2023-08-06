import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { TextInput } from "react-native-paper";
import SnackBar from "../components/snackbar";
import Stackscreen from "../components/stackscreen";
import { useRouter } from "expo-router";
import Buttons from "../components/Buttton";

function Input() {
  const router = useRouter();
  const [change, setChange] = useState(0);
  const [email, setEmail] = useState("");
  const [visible, setVisible] = useState(false);
  const [response, setResponse] = useState("");
  const [otp, setOTP] = useState("");
  const [goback, setGoback] = useState(false);
  const [password, setPassword] = useState("");
  useEffect(() => {
    onChangeEmail(email);
  }, [email]);

  //   useEffect(() => {
  //     onChangePassword(password);
  //   }, [password]);

  useEffect(() => {
    verifyOtp(otp);
  }, [otp]);

  const onChangeEmail = async (text) => {
    setEmail(text);
    if (text.length > 10) {
      try {
        const submit = await fetch(
          "https://all-servers.vercel.app/forgetPasswordgetotp",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: text,
            }),
          }
        );

        const submitted = await submit.json();

        if (submitted.status === true) {
          setResponse(submitted.message);
          setVisible(true);
          setChange(1);
          console.log(submitted);
          console.log(response);
        } else {
          setVisible(true);
          setResponse(submitted.message);
          console.log(submitted);
          console.log(response);
          return;
        }
        console.log(submitted);
        console.log(response);
      } catch (err) {
        setVisible(true);
        setResponse(submitted.message);
      }
    } else {
      setVisible(true);
      setResponse("Please enter a valid email address.");
    }
  };
  const onChangePassword = async (text) => {
    setPassword(text);
    if (password.length > 3) {
      try {
        const submit = await fetch(
          "https://all-servers.vercel.app/changePasswordotp",
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

        if (submitted.status === true) {
          setResponse(submitted.message);
          setVisible(true);
          setGoback(true);
          console.log(submitted);
          console.log(response);
        } else {
          setVisible(true);
          setResponse(submitted.message);
          console.log(submitted);
          console.log(response);
          return;
        }
        console.log(submitted);
        console.log(response);
      } catch (err) {
        setVisible(true);
        setResponse(submitted.message);
      }
    } else {
      setVisible(true);
      setResponse("please create a new password.");
    }
  };
  const verifyOtp = async (text) => {
    setOTP(text);
    if (text.length > 2) {
      try {
        const submit = await fetch(
          "https://all-servers.vercel.app/verifypasswordotp",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              otp: text,
            }),
          }
        );

        const submitted = await submit.json();

        if (submitted.status === true) {
          setResponse(submitted.message);
          setVisible(true);
          setChange(2);
          console.log(submitted);
          console.log(response);
        } else {
          setVisible(true);
          setResponse(submitted.message);
          console.log(submitted);
          console.log(response);
          return;
        }
        console.log(submitted);
        console.log(response);
      } catch (err) {
        setVisible(true);
        setResponse(submitted.message);
      }
    } else {
      setVisible(true);
      setResponse("Please enter a valid otp code.");
    }
  };

  return (
    <View>
      <Stackscreen
        title="Change Password"
        help="arrow-left"
        onPress2={() => router.push("/")}
      />

      {(() => {
        switch (change) {
          case 0:
            return (
              <View
                style={{
                  padding: 10,
                  marginTop: 100,
                }}
              >
                <SnackBar
                  visible={visible}
                  onDismissSnackBar={() => setVisible(false)}
                  message={response}
                />
                <View>
                  <TextInput
                    value={email}
                    onChangeText={setEmail}
                    mode="flat"
                    label="Email"
                    style={{
                      width: "100%",
                      backgroundColor: "white",
                    }}
                  />
                </View>
              </View>
            );
          case 1:
            return (
              <View
                style={{
                  padding: 10,
                  marginTop: 100,
                }}
              >
                <SnackBar
                  visible={visible}
                  onDismissSnackBar={() => setVisible(false)}
                  message={response}
                />
                <View>
                  <TextInput
                    value={otp}
                    onChangeText={setOTP}
                    mode="flat"
                    label="Input OTP"
                    style={{
                      width: "100%",
                      backgroundColor: "white",
                    }}
                  />
                </View>
              </View>
            );
          case 2:
            return (
              <View
                style={{
                  padding: 10,
                  marginTop: 100,
                }}
              >
                <SnackBar
                  visible={visible}
                  onDismissSnackBar={() => setVisible(false)}
                  message={response}
                />
                <View>
                  <TextInput
                    value={password}
                    onChangeText={setPassword}
                    mode="flat"
                    label="New Password"
                    style={{
                      width: "100%",
                      backgroundColor: "white",
                    }}
                  />
                </View>
                <Buttons
                  text={goback ? "Login" : " Submit"}
                  width="100%"
                  marginTop={30}
                  backgroundColor="#990000"
                  borderRadius={10}
                  onPress={goback ? () => router.push("/") : onChangePassword}
                />
              </View>
            );
        }
      })()}
    </View>
  );
}

export default Input;
