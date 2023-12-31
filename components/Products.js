import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useWindowDimensions } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import { ScrollView } from "react-native";
import Stackscreen, { CustomTitle } from "./stackscreen";
import { TabBar } from "react-native-tab-view";
import { useRouter } from "expo-router";
import CoursesTemplate from "./CoursesTemplate";
import { useSelector } from "react-redux";

const openLink = async (link) => {
  try {
    await Linking.openURL(link);
  } catch (error) {
    console.error("Failed to open link:", error);
  }
};

const FirstRoute = () => {
  const [categories, setCategories] = useState({});

  const GetAdminData = async () => {
    try {
      const getAdminData = await fetch(
        "https://all-servers.vercel.app/getupload",
        {
          method: "GET",
        }
      );
      const gottenAdminData = await getAdminData.json();
      setCategories(gottenAdminData.categories);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      GetAdminData();
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        {categories.products && categories.products.map(({ _id, image, link }) => (
          <CoursesTemplate background={image} key={_id}  onClick={()=>  link ? openLink(link) : null} />

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
      {/* <Stackscreen
        onPress={() => router.push("/BottomNavs")}
        // icon="home"
        // help="menu"
        title="PRODUCTS"
        color="black"
      /> */}
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
