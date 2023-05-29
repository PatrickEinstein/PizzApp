import React from "react";
import { View, Text } from "react-native";
import Buttons from "../components/Buttton";
import { useRouter } from "expo-router";
import Stackscreen, { CustomTitle } from "../components/stackscreen";

function Welcome() {
  const router = useRouter();
  return (
    <>
      <Stackscreen
        backgroundColor="white"
        titleicon={CustomTitle}
        icon="home"
      />
      <View
        justifyContent="center"
        alignItems="center"
        style={{
          padding: 8,
          backgroundColor: "white",
          height: "100%",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginBottom: 10,
          }}
        >
          {" "}
          Welcome Amir
        </Text>

        <Text
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 15,
            padding:15
          }}
        >
          Lorem ipsum dolor sit amet consectetur. Vitae nam ultricies fermentum
          diam laoreet facilisis. Purus erat ut facilisi risus. Hendrerit velit
          blandit integer interdum senectus massa. In diam ornare orci mauris
          lectus arcu ut id. Bibendum ullamcorper sapien quis lectus. Habitasse
          rhoncus ac eget.
        </Text>
        <View
          alignItems="flex-end"
          style={{
            marginLeft: 120,
          }}
        >
          <Buttons
            color="white"
            icon={"door"}
            text="Start"
            width="40%"
            marginTop={130}
            backgroundColor="#990000"
            borderRadius={10}
            onPress={() => router.push("/BottomNavs")}
          />
        </View>
      </View>
    </>
  );
}

export default Welcome;
