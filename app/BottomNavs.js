import React, { useState } from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome"; // Example icon library
import Recipee from "../pages/recipee";
import TabViewExample from "../Tabs/tab";
import Stackscreen, { CustomTitle } from "../components/stackscreen";
import MenuList from "../components/menulist";
import { useRouter } from "expo-router";
import Courses from "../components/Courses";
import Products from "../components/Products";

function RECIPEES() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Recipee />
    </View>
  );
}

function PIZZACALC() {
  const [open, setOpen] = useState(0);
  console.log(open);
  return (
    <>
      <Stackscreen
        icon="menu"
        height={70}
        onPress={() => setOpen((prev) => !prev)}
      />
      {open ? (
        <View
          style={{
            position: "absolute",
            top: 5,
            right: 0,
            zIndex: 10,
            padding: 5,
          }}
        >
          <MenuList />
        </View>
      ) : null}
      <TabViewExample />
    </>
  );
}

function COURSES() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Courses />
    </View>
  );
}

function PRODUCTS() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Products />
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function BottomNavs() {
  const router = useRouter();
  return (
    <>
      <Stackscreen
        titleicon={CustomTitle}
        onPress={() => router.push("/")}
        icon="search"
      />

      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "RECIPEES") {
              iconName = focused ? "book" : "book";
            } else if (route.name === "PIZZA CALC") {
              iconName = focused ? "calculator" : "calculator";
            } else if (route.name === "COURSES") {
              iconName = focused ? "graduation-cap" : "graduation-cap";
            } else if (route.name === "PRODUCTS") {
              iconName = focused ? "shopping-cart" : "shopping-cart";
            }

            // Example of using FontAwesome icons
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          backgroundColor: "grey",
          activeTintColor: "black",
          inactiveTintColor: "gray",
          labelStyle: { fontSize: 12, textAlign: "center" },
          style: { justifyContent: "center", backgroundColor: "#990000" },
        }}
      >
        <Tab.Screen
          name="RECIPEES"
          component={RECIPEES}
          options={{ headerTitleAlign: "center" }}
        />
        <Tab.Screen
          name="PIZZA CALC"
          component={PIZZACALC}
          options={{ headerTitleAlign: "center" }}
        />
        <Tab.Screen
          name="COURSES"
          component={COURSES}
          options={{ headerTitleAlign: "center" }}
        />
        <Tab.Screen
          name="PRODUCTS"
          component={PRODUCTS}
          options={{ headerTitleAlign: "center" }}
        />
      </Tab.Navigator>
    </>
  );
}
