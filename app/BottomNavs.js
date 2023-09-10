import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome"; // Example icon library
import { Ionicons } from "@expo/vector-icons";
import Recipee from "../pages/recipee";
import TabViewExample from "../Tabs/tab";
import Stackscreen, { CustomTitle } from "../components/stackscreen";
import MenuList from "../components/menulist";
import { useRouter } from "expo-router";
import Courses from "../components/Courses";
import Products from "../components/Products";
import { Logo } from "../assets/images/pizza.png";
import { NoRollLogo, RollLogo } from "../components/animatedLogo";
import AddStuffs from "../components/AddStuffs";
import Details from "../components/Details";
import { toggleMenuList } from "../Redux/Reducers";
import { useDispatch, useSelector } from "react-redux";
import HomePage from "../pages";
import Blogs from "../components/Blogs";

function RECIPEES() {
  //style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
  return (
    <View style={{ flex: 1, }}>
      <Recipee />
    </View>
  );
}

function PIZZACALC() {
  const open = useSelector((state) => state.recipe.toggleMenuList);
  const isLoggenInUser = useSelector((state) => state.recipe.loggedInUser) 
  const isObjectNotEmpty = (obj) => Object.keys(obj).length > 0;


  return (
    <>
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
    {isObjectNotEmpty(isLoggenInUser) ?  <TabViewExample /> :<HomePage/>  }
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
  const dispatch = useDispatch();
  const router = useRouter();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
     
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "RECIPES") {
            iconName = focused ? "book" : "book";
          } else if (route.name === "PIZZA DOUGH CALCULATOR") {
            iconName = focused ? "calculator" : "calculator";
          } else if (route.name === "COURSES") {
            iconName = focused ? "graduation-cap" : "graduation-cap";
          } else if (route.name === "PRODUCTS") {
            iconName = focused ? "shopping-cart" : "shopping-cart";
          } else if (route.name === "BLOGS") {
            iconName = focused ? "plus-circle" : "plus-circle";
          }

          // Example of using FontAwesome icons
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}

    >
      <Tab.Screen
        name="RECIPES"
        component={RECIPEES}
        options={{
          headerTitleAlign: "center",
          headerLeft: () => <Ionicons name="home" size={24} color="black" />,
          headerRight: () => <NoRollLogo />,
        }}
      />
      <Tab.Screen
        name="PIZZA DOUGH CALCULATOR"
        component={PIZZACALC}
        options={{
          headerTitleAlign: "center",
          headerLeft: () => (
            <TouchableOpacity>
              <Text
                style={{
                  marginLeft: 20,
                }}
              >
                <Ionicons name="help-circle" size={24} color="black" />
              </Text>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => dispatch(toggleMenuList())}>
              <Text
                style={{
                  marginRight: 20,
                }}
              >
                <Ionicons name="menu" size={24} color="black" />
              </Text>
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="COURSES"
        component={COURSES}
        options={{
          headerTitleAlign: "center",
          headerLeft: () => <Ionicons name="home" size={24} color="black" />,
          headerRight: () => <NoRollLogo />,
        }}
      />
      <Tab.Screen
        name="PRODUCTS"
        component={PRODUCTS}
        options={{
          headerTitleAlign: "center",
          headerLeft: () => <Ionicons name="home" size={24} color="black" />,
          headerRight: () => <NoRollLogo />,
        }}
      />
       <Tab.Screen
        name="BLOGS"
        component={Blogs}
        options={{
          headerTitleAlign: "center",
          headerLeft: () => <Ionicons name="home" size={24} color="black" />,
          headerRight: () => <NoRollLogo />,
        }}
      />
    </Tab.Navigator>
  );
}
