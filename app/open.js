import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import Icon from "react-native-vector-icons/Feather";
import Stackscreen from "../components/stackscreen";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { NoRollLogo } from "../components/animatedLogo";
function Open() {
  const router = useRouter();

  const savedstuffs = useSelector((state) => state.recipe.saved);
  return (
    <View>
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
          Saved Recipees
        </Text>
        <NoRollLogo />
      </View>

      {savedstuffs?.map(({ setvalues, recipe }) => (
        <View
          key={recipe}
          style={{
            height: 100,
            width: "100%",
            padding: 20,
            borderWidth: 3,
            flexDirection: "row",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity onPress={() => router.push("/")}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: "80%",
              }}
            >
              <Icon
                name="folder"
                size={30}
                color="white"
                style={{
                  width: 70,
                  height: 60,
                  borderRadius: 50,
                  backgroundColor: "green",
                  paddingTop: 9,
                  paddingLeft: 20,
                }}
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <Text>{setvalues}</Text>
                <Text>{recipe}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}

export default Open;
