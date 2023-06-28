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
import { useSelector } from "react-redux";
const ImageUrl1 = [
  {
    link: "https://i.ibb.co/DzxPCB1/img12.png",
  },
];
const ImageUrl2 = [
  {
    link: "https://i.ibb.co/f2Fc4wj/image.png",
  },
];

const openLink = async (link) => {
  try {
    await Linking.openURL(link);
  } catch (error) {
    console.error("Failed to open link:", error);
  }
};

const FirstRoute = () => {
  const adminRecipe = useSelector((state) => state.recipe.adminRecipee.courses);
  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        {adminRecipe.map(({ idx, image }) => (
          <CoursesTemplate
            background={image}
            key={idx}
            // onClick={() =>
            //   openLink(
            //     "https://fareharbor.com/embeds/book/onceinrome/items/?flow=173458&full-items=yes&back=https://www.romepizzaschool.com/&a=yes&g4=yes"
            //   )
            // }
          />
        ))}
      </View>
      <View style={{ flex: 1 }}>
        {ImageUrl1.map(({ idx, link }) => (
          <CoursesTemplate
            background={link}
            key={idx}
            onClick={() =>
              openLink(
                "https://fareharbor.com/embeds/book/onceinrome/items/?flow=173458&full-items=yes&back=https://www.romepizzaschool.com/&a=yes&g4=yes"
              )
            }
          />
        ))}
      </View>
    </ScrollView>
  );
};

const SecondRoute = () => {
  const adminRecipe = useSelector((state) => state.recipe.adminRecipee.courses);
  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        {adminRecipe.map(({ idx, image }) => (
          <CoursesTemplate
            background={image}
            key={idx}
            // onClick={() =>
            //   openLink(
            //     "https://fareharbor.com/embeds/book/onceinrome/items/?flow=173458&full-items=yes&back=https://www.romepizzaschool.com/&a=yes&g4=yes"
            //   )
            // }
          />
        ))}
      </View>
      <View style={{ flex: 1 }}>
        {ImageUrl2.map(({ idx, link }) => (
          <CoursesTemplate
            background={link}
            key={idx}
            onClick={() =>
              openLink(
                "https://fareharbor.com/embeds/book/onceinrome/items/?flow=173459&full-items=yes&back=https://www.romepizzaschool.com/&a=yes&g4=yes"
              )
            }
          />
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
