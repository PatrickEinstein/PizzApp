import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useWindowDimensions } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import { ScrollView } from "react-native";
import Stackscreen, { CustomTitle } from "./stackscreen";
import { TabBar } from "react-native-tab-view";
import { useRouter } from "expo-router";
import CoursesTemplate from "./CoursesTemplate";

const FirstRoute = () => {
  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        {[1, 2, 3, 4].map((idx) => (
          <CoursesTemplate key={idx} />
        ))}
      </View>
    </ScrollView>
  );
};

const SecondRoute = () => {
  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        {[1, 2, 3, 4].map((idx) => (
          <CoursesTemplate key={idx} />
        ))}
      </View>
    </ScrollView>
  );
};

const ThirdRoute = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white", height: 500 }}></View>
  );
};
const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
});

const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: "black" }}
    style={{ backgroundColor: "white", borderColor: "#ffcc33", height: 50 }}
    labelStyle={{
      color: "black",
    }}
  />
);

const Courses = () => {
  const router = useRouter();
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes, setRoutes] = React.useState([
    { key: "first", title: "Online Courses" },
    { key: "second", title: "Rome COurses" },
    // { key: "third", title: "Preparation" },
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
        // icon="home"
        // help="menu"
        title="COURSES"
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

export default Courses;
