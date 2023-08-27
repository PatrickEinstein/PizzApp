import React, { useEffect, useState } from "react";
import { View, ScrollView, useWindowDimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { Linking } from "react-native";
import BlogCard from "./BlogCard";
import BootLoader from "./BootLoader";

const FirstRoute = () => {
  const [categories, setCategories] = useState({});
  const [isLoading, setisLoading] = useState(true);

  const GetAdminData = async () => {
    try {
      const getAdminData = await fetch(
        "https://all-servers.vercel.app/getBlogs",
        {
          method: "GET",
        }
      );
      const gottenAdminData = await getAdminData.json();
      setCategories(gottenAdminData);
      setisLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    // Fetch data when the component mounts
    // GetAdminData();

    // Fetch data again every 10 seconds
    const interval = setInterval(() => {
      GetAdminData();
      setisLoading(false);
    }, 10000);

    return () => clearInterval(interval); // Clear the interval when the component unmounts
  }, []);

  return (
    <ScrollView style={{ flex: 1, width: "100%", }}>
      {isLoading && <BootLoader/>}
      {categories.message &&
        categories.message.map(({ _id, coverpicture, title, link, avatar, body, subtitle }) => (
          <BlogCard
            key={_id}
            title={title}
            subtitle={subtitle}
            coverpicture={coverpicture}
            avatar={avatar}
            body={body}
          />
        ))}
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

const openLink = async (link) => {
  try {
    await Linking.openURL(link);
  } catch (error) {
    console.error("Failed to open link:", error);
  }
};

const Blogs = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([{ key: "first", title: "Blogs" }]);

  return (
    <View
      style={{
        backgroundColor: "white",
        height: "100%",
        width: "100%",
      }}
    >
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

export default Blogs;
