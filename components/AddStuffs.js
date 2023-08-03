import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useWindowDimensions } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import { ScrollView } from "react-native";
import Stackscreen, { CustomTitle } from "./stackscreen";
import { TabBar } from "react-native-tab-view";
import { useRouter } from "expo-router";
import CoursesTemplate from "./CoursesTemplate";
import { Linking } from "react-native";

const FirstRoute = () => {
  return <ScrollView></ScrollView>;
};

const SecondRoute = () => {
  return (
    <ScrollView>
      <Text>Hi</Text>
    </ScrollView>
  );
};

const ThirdRoute = () => {
  return (
    <ScrollView>
      <Text>Hi</Text>
    </ScrollView>
  );
};
const FourthRoute = () => {
  return (
    <ScrollView>
      <Text>Hi</Text>
    </ScrollView>
  );
};
const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
  fourth: FourthRoute,
});

const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: "black" }}
    style={{ backgroundColor: "white", borderColor: "#ffcc33", height: 50 }}
    labelStyle={{
      color: "black",
      fontSize: 10,
    }}
  />
);

const AddStuffs = () => {
  const router = useRouter();
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes, setRoutes] = React.useState([
    { key: "first", title: "Add Online Courses" },
    { key: "second", title: "Add Rome Courses" },
    { key: "third", title: "Add Products" },
    { key: "fourth", title: "Add Recipee" },
  ]);

  return (
    <View
      style={{
        backgroundColor: "white",
        height: "100%",
        width: "100%",
      }}
    >
      <Stackscreen
        onPress={() => router.push("/BottomNavs")}
        title="Dashboard"
        color="black"
      />
      <TabView
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={renderTabBar}
        navigationState={{ index, routes }}
      />
    </View>
  );
};

export default AddStuffs;
