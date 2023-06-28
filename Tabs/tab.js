import * as React from "react";
import { View, useWindowDimensions } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import Inputs from "../Inputs/neapolitan";
import Inputs2 from "../Inputs/panpizza";
import { ScrollView } from "react-native";
import { Settings } from "../app/settings";
import { TabBar } from "react-native-tab-view";

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: "white", marginLeft: 10 }}>
    <ScrollView>
      <Inputs />
    </ScrollView>
  </View>
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: "white", marginLeft: 10 }}>
    <ScrollView>
      <Inputs2 />
    </ScrollView>
  </View>
);
// const ThirdRoute = () => (
//   <View
//     style={{ flex: 1, backgroundColor: "white", marginLeft: 10, marginTop: 20 }}
//   >
//     <ScrollView>
//       <BottomNavs />
//     </ScrollView>
//   </View>
// );

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  // third: ThirdRoute,
});

const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: "white" }}
    style={{
      backgroundColor: "white",
      borderColor: "#black",
      height: "auto",
      color: "black",
      paddingTop: 2,
    }}
    labelStyle={{
      color: "black",
    }}
  />
);

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes, setRoutes] = React.useState([
    { key: "first", title: "Neapolitan" },
    { key: "second", title: "Pan Pizza" },
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
