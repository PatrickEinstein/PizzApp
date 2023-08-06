import * as React from "react";
import { TouchableOpacity, View, useWindowDimensions } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import SignUp from "./signup";
import SignIn from "./signin";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native";
import { Settings } from "../app/settings";
import { TabBar } from "react-native-tab-view";
import Recipee from "./recipee";
import Stackscreen from "../components/stackscreen";
import { Text } from "react-native";
import { NoRollLogo } from "../components/animatedLogo";
import { useRouter } from "expo-router";

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: "white", padding: 20 }}>
    <ScrollView>
      <SignIn />
    </ScrollView>
  </View>
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: "white", padding: 20 }}>
    <ScrollView>
      <SignUp />
    </ScrollView>
  </View>
);
const ThirdRoute = () => (
  <View style={{ flex: 1, backgroundColor: "white" }}>
    <Recipee />
  </View>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
});

const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: "grey", width: "40%", marginLeft: 2 }}
    style={{
      backgroundColor: "white",
      borderColor: "#black",
      height: "auto",
      color: "black",
      paddingTop: 2,
    }}
    labelStyle={{ color: "black" }}
  />
);

export default function HomePage() {
  const layout = useWindowDimensions();
  const router = useRouter();
  const [index, setIndex] = React.useState(0);
  const [routes, setRoutes] = React.useState([
    { key: "first", title: "SignIn" },
    { key: "second", title: "SignUp" },
  ]);

  return (
    <>
      {/* <View
        flexDirection="row"
        justifyContent="space-between"
        backgroundColor="white"
        sx={{
          background: "white",
        }}
      >
        <TouchableOpacity onPress={() => router.push("/welcome")}>
          <Text
            style={{
              paddingTop: 25,
            }}
          >
            <Ionicons name="home" size={30} color="black" />
          </Text>
        </TouchableOpacity>

        <Text
          style={{
            fontSize: 25,
            paddingTop: 25,
            textAlign: "center",
          }}
        >
          Welcome
        </Text>
        <NoRollLogo />
      </View> */}
      <TabView
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={renderTabBar}
        navigationState={{ index, routes }}
        style={{
          borderRadius: 20,
        }}
      />
    </>
  );
}
