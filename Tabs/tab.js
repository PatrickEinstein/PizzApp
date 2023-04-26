import * as React from "react";
import { View, useWindowDimensions } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import Inputs from "../Inputs/neapolitan";
import Inputs2 from "../Inputs/panpizza";
import { ScrollView } from "react-native";
import { Settings } from "../app/settings";
import { TabBar } from "react-native-tab-view";

// yellow: {
//     100: "#fff2cc",
//     200: "#ffe599",
//     300: "#ffd966",
//     400: "#ffcc33",
//     500: "#ffbf00",
//     600: "#cc9900",
//     700: "#997300",
//     800: "#664c00",
//     900: "#332600"
// },

const FirstRoute = () => (
  <View
    style={{ flex: 1, backgroundColor: "white", marginLeft: 10, marginTop: 20 }}
  >
    <ScrollView>
      <Inputs />
    </ScrollView>
  </View>
);

const SecondRoute = () => (
  <View
    style={{ flex: 1, backgroundColor: "white", marginLeft: 10, marginTop: 20 }}
  >
    <ScrollView>
      <Inputs2 />
    </ScrollView>
  </View>
);
const ThirdRoute = () => (
  <View
    style={{ flex: 1, backgroundColor: "white", marginLeft: 10, marginTop: 20 }}
  >
    <ScrollView>
      <Settings />
    </ScrollView>
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
    indicatorStyle={{ backgroundColor: "white" }}
    style={{ backgroundColor: "#990000", borderColor: "#ffcc33" }}
  />
);

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes, setRoutes] = React.useState([
    { key: "first", title: "Neapolitan" },
    { key: "second", title: "Pan Pizza" },
    // { key: "third", title: "Settings" },
  ]);

  return (
    <TabView
     
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
    />
  );
}
