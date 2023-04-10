import * as React from "react";
import { Text, View } from "react-native";
import { Menu } from "react-native-paper";
import { useRouter } from "expo-router";
import { Settings } from "../app/settings/settings";
const MenuList = ({ navigation }) => {
  const router = useRouter();


  return (
    <View
      style={{
        paddingTop: 10,
        backgroundColor: "white",
        height: 400,
        width: 150,
      }}
    >
      <View style={{ flex: 1 }}>
        <Menu.Item leadingIcon="folder" onPress={() => {}} title="open" />
        <Menu.Item leadingIcon="content-save" onPress={() => {}} title="save" />
        <Menu.Item leadingIcon="link" onPress={() => {}} title="share" />
        <Menu.Item
          leadingIcon="cog-outline"
          title="settings"
          onPress={() => router.push('/settings/settings')}
        />
        <Menu.Item leadingIcon="pipe-wrench" onPress={() => {}} title="Tools" />
        <Menu.Item
          leadingIcon="briefcase-search"
          onPress={() => {}}
          title="About"
        />
        <Menu.Item
          leadingIcon="book-open-blank-variant"
          onPress={() => {}}
          title="Glossary"
        />
        <Menu.Item leadingIcon="star" onPress={() => {}} title="Rate" />
      </View>
    </View>
  );
};

export default MenuList;
