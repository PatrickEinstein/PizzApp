import * as React from "react";
import { Text, View } from "react-native";
import { Menu } from "react-native-paper";
import { useRouter } from "expo-router";
import { useNavigation, useRootNavigation } from "expo-router";
import { TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { saveLoggedInUser } from "../Redux/Reducers";

const MenuList = () => {
  const router = useRouter();
  const dispatch = useDispatch()

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "black",
      }}
    >
      <TouchableOpacity
        style={{
          backgroundColor: "white",
        }}
      >
        <Menu.Item
          leadingIcon="folder"
          onPress={() => router.push("/open")}
          title="open"
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "white",
          marginBottom: 20,
        }}
      >
        <Menu.Item
          leadingIcon="content-save"
          onPress={() => {
            router.push("/save");
          }}
          title="save"
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "white",
          marginBottom: 20,
        }}
      >
        <Menu.Item leadingIcon="link" onPress={() => {}} title="share" />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "white",
        }}
        onPress={() => {
          router.push("/settings");
        }}
      >
        <Menu.Item leadingIcon="cog-outline" title="settings" />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "white",
          marginBottom: 20,
        }}
      >
        <Menu.Item leadingIcon="pipe-wrench" onPress={() => {}} title="Tools" />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "white",
        }}
      >
        <Menu.Item
          leadingIcon="briefcase-search"
          onPress={() => {}}
          title="About"
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "white",
        }}
      >
        <Menu.Item
          leadingIcon="book-open-blank-variant"
          onPress={() => {
            router.push("/glossary");
          }}
          title="Glossary"
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "white",
        }}
      >
        <Menu.Item leadingIcon="star" onPress={() => {}} title="Rate" />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "white",
        }}
      >
        <Menu.Item leadingIcon="door" onPress={() => {
          router.push("signinandout")
          dispatch(saveLoggedInUser({}));
        }} title="Log Out" />
      </TouchableOpacity>
    </View>
  );
};

export default MenuList;
