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
        <TouchableOpacity>
          <Menu.Item leadingIcon="folder" onPress={() => {}} title="open" />
        </TouchableOpacity>{" "}
        <TouchableOpacity>
          <Menu.Item
            leadingIcon="content-save"
            onPress={() => {}}
            title="save"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Menu.Item leadingIcon="link" onPress={() => {}} title="share" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            router.push("/settings");
          }}
        >
          <Menu.Item leadingIcon="cog-outline" title="settings" />
        </TouchableOpacity>
        <Menu.Item leadingIcon="pipe-wrench" onPress={() => {}} title="Tools" />
        <TouchableOpacity>
          <Menu.Item
            leadingIcon="briefcase-search"
            onPress={() => {}}
            title="About"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Menu.Item
            leadingIcon="book-open-blank-variant"
            onPress={() => {
              router.push("/glossary");
            }}
            title="Glossary"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          {" "}
          <Menu.Item leadingIcon="star" onPress={() => {}} title="Rate" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MenuList;
