import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useSelector } from "react-redux";
import { useWindowDimensions } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import { ScrollView } from "react-native";
import { TabBar } from "react-native-tab-view";
import { Ionicons } from "@expo/vector-icons";
import Stackscreen, { CustomTitle } from "../components/stackscreen";
import { useRouter } from "expo-router";
import { NoRollLogo } from "../components/animatedLogo";

const FirstRoute = () => {
  const selected = useSelector((state) => state.recipe.selectedRecipe);
  const item = selected[0];
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView
        style={{
          padding: 10,
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
          }}
        >
          {item.description}
        </Text>
      </ScrollView>
    </View>
  );
};

const SecondRoute = () => {
  const selected = useSelector((state) => state.recipe.selectedRecipe);
  const item = selected[0];
  const ing = item.ingredients;
  const itemsText = ing.map((item, index) => {
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <ScrollView
          style={{
            padding: 10,
          }}
        >
          <Text
            key={index}
            style={{
              fontWeight: "bold",
              marginBottom: 10,
            }}
          >
            {item}
          </Text>
        </ScrollView>
      </View>
    );
  });

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView
        style={{
          padding: 10,
        }}
      >
        <View>{itemsText}</View>
      </ScrollView>
    </View>
  );
};

const ThirdRoute = () => {
  const selected = useSelector((state) => state.recipe.selectedRecipe);
  const item = selected[0];
  const ing = item.method;

  const renderSteps = () => {
    return ing.map((item, index) => {
      const stepNumber = `Step ${index + 1}`;
      const stepDescription = Object.values(item)[0];
      return (
        <ScrollView
          style={{
            padding: 10,
          }}
        >
          <Text
            key={index}
            style={{
              fontWeight: "bold",
            }}
          >
            {stepNumber}: {stepDescription}
            {"\n"} {"\n"}
          </Text>
        </ScrollView>
      );
    });
  };
  // {renderSteps().map((step, index) => (
  //   <Text key={index}>{step}</Text>
  // ))}

  return (
    <View style={{ flex: 1, backgroundColor: "white", height: 500 }}>
      <ScrollView
        style={{
          padding: 10,
        }}
      >
        {renderSteps()}
      </ScrollView>
    </View>
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

const Description = () => {
  const router = useRouter();
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes, setRoutes] = React.useState([
    { key: "first", title: "Description" },
    { key: "second", title: "Ingredients" },
    { key: "third", title: "Preparation" },
  ]);
  const selected = useSelector((state) => state.recipe.selectedRecipe);
  const item = selected[0];

  return (
    <>
      <View
        style={{
          padding: 20,
          backgroundColor: "white",
        }}
      >
        <View flexDirection="row" justifyContent="space-between">
          <TouchableOpacity onPress={() => router.push("/BottomNavs")}>
            <Text
              style={{
                paddingTop: 25,
              }}
            >
              <Ionicons name="home" size={30} color="black" />
            </Text>
          </TouchableOpacity>

          <Text
            style={{
              fontSize: 25,
              paddingTop: 25,
              marginLeft: 10,
            }}
          >
            Description
          </Text>
          <NoRollLogo />
        </View>
        <Image
          src={item.image}
          style={{
            objectFit: "cover",
            height: 200,
            width: "100%",
            marginRight: "auto",
            marginLeft: "auto",
            borderRadius: 20,
            backgroundColor: "white",
          }}
        />
      </View>

      <View
        style={{
          marginTop: "auto",
          backgroundColor: "white",
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            marginBottom: 10,
            marginTop: 10,
            marginLeft: 20,
            backgroundColor: "white",
          }}
        >
          {item.name}
        </Text>
        {/* <Text>{item.title}</Text> */}
      </View>
      <TabView
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={renderTabBar}
        navigationState={{ index, routes }}
      />
    </>
  );
};

export default Description;
