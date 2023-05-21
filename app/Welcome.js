import React from "react";
import { View, Text } from "react-native";
import Buttons from "../components/Buttton";
import { useRouter } from "expo-router";

function Welcome() {
  const router = useRouter()
  return (
    <View
      justifyContent="center"
      alignItems="center"
      style={{
        padding: 8,
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          marginBottom:10
        }}
      >
        {" "}
        Welcome Amir
      </Text>
      <Text>
        Welcome Amir, Lorem ipsum dolor sit amet consectetur. Vitae nam
        ultricies fermentum diam laoreet facilisis. Purus erat ut facilisi
        risus. Hendrerit velit blandit integer interdum senectus massa. In diam
        ornare orci mauris lectus arcu ut id. Bibendum ullamcorper sapien quis
        lectus. Habitasse rhoncus ac eget.
      </Text>
      <View
        alignItems="flex-end"
        style={{
          padding: 8,
        }}
      >
        <Buttons
          icon={"door"}
          text="Start"
          width="40%"
          marginTop={150}
          backgroundColor="grey"
          borderRadius={5}
          onPress={() => router.push("/BottomNavs")}
        />
      </View>
    </View>
  );
}

export default Welcome;
