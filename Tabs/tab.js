import * as React from "react";
import { View, useWindowDimensions } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import Inputs from "../Inputs/neapolitan";
import Inputs2 from "../Inputs/panpizza";
import { ScrollView } from "react-native";
import { Settings } from "../app/settings/settings";


const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: "white", marginLeft: 10, marginTop:20 }}>
    <ScrollView>
      <Inputs />
    </ScrollView>
  </View>
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: "white", marginLeft: 10, marginTop:20 }}>
    <ScrollView>
      <Inputs2/>
    </ScrollView>
  </View>
);
const ThirdRoute = () => (
<View style={{ flex: 1, backgroundColor: "white", marginLeft: 10, marginTop:20 }}>
    <ScrollView>
      <Settings/>
    </ScrollView>
  </View>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
});

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Neapolitan" },
    { key: "second", title: "Pan Pizza" },
    { key: "third", title: "Settings" },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    ></TabView>
  );
}
