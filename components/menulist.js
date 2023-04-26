import * as React from "react";
import { Text, View } from "react-native";
import { Menu } from "react-native-paper";
import { useRouter } from "expo-router";
import { useNavigation, useRootNavigation } from "expo-router";
import { TouchableOpacity } from "react-native";

const MenuList = ({ navigation }) => {
  const router = useRouter();
  const navigate = useNavigation();

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

        <TouchableOpacity
          onPress={() => {
            router.push("/settings");
          }}
        >
          <Menu.Item leadingIcon="cog-outline" title="settings" />
        </TouchableOpacity>

        <Menu.Item leadingIcon="pipe-wrench" onPress={() => {}} title="Tools" />
        <Menu.Item
          leadingIcon="briefcase-search"
          onPress={() => {}}
          title="About"
        />
        <TouchableOpacity>
          <Menu.Item
            leadingIcon="book-open-blank-variant"
            onPress={() => {
              router.push("/glossary");
            }}
            title="Glossary"
          />
        </TouchableOpacity>
        <Menu.Item leadingIcon="star" onPress={() => {}} title="Rate" />
      </View>
    </View>
  );
};

export default MenuList;
