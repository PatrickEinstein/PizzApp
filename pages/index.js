import * as React from "react";
import { View, useWindowDimensions } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import SignUp from "./signup";
import SignIn from "./signin";
import { ScrollView } from "react-native";
import { Settings } from "../app/settings";
import { TabBar } from "react-native-tab-view";
import Recipee from "./recipee";

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
      height: 100,
      color: "black",
      paddingTop: 20,
    }}
    labelStyle={{ color: "black" }}
  />
);

export default function HomePage() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes, setRoutes] = React.useState([
    { key: "first", title: "SignIn" },
    { key: "second", title: "SignUp" },
    // { key: "third", title: "Test" },
  ]);

  return (
    <TabView
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
      style={{
        borderRadius: 20,
        marginTop: 40,
      }}
    />
    // </View>
  );
}
