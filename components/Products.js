import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useWindowDimensions } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import { ScrollView } from "react-native";
import Stackscreen, { CustomTitle } from "./stackscreen";
import { TabBar } from "react-native-tab-view";
import { useRouter } from "expo-router";
import CoursesTemplate from "./CoursesTemplate";

const ImageUrl = [
  { link: "https://i.ibb.co/ZYNyWbV/img11.jpg" },
  { link: "https://i.ibb.co/PwSM8Ld/img10.jpg" },
  { link: "https://i.ibb.co/YL0CVms/img9.jpg" },
  { link: "https://i.ibb.co/phqPmwm/img8.jpg" },
  { link: "https://i.ibb.co/nLQg8FT/img7.jpg" },
  { link: "https://i.ibb.co/brTxLDy/img6.jpg" },
  { link: "https://i.ibb.co/RPK6MBR/img5.jpg" },
  { link: "https://i.ibb.co/zXX9Q09/img4.jpg" },
  { link: "https://i.ibb.co/pPkKnPS/img3.jpg" },
  { link: "https://i.ibb.co/JrqXJ7h/img2.jpg" },
  { link: "https://i.ibb.co/x6TwB0b/img1.jpg" },
];

const FirstRoute = () => {
  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        {ImageUrl.map(({ idx, link }) => (
          <CoursesTemplate background={link} key={idx} />
        ))}
      </View>
    </ScrollView>
  );
};

const renderScene = SceneMap({
  first: FirstRoute,
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

const Products = () => {
  const router = useRouter();
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes, setRoutes] = React.useState([
    { key: "first", title: "Products" },
    // { key: "second", title: "Rome COurses" },
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
        title="PRODUCTS"
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

export default Products;
