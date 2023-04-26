import * as React from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store from "../Redux/store";
import TabViewExample from "../Tabs/tab";
import { useState } from "react";
import { Stack } from "expo-router";
import { COLORS } from "../constants/index";
import MenuList from "../components/menulist";
import { persistStore } from "redux-persist";

import Icon from "react-native-vector-icons/Feather";
import { Feather } from "react-native-vector-icons";

const Home = () => {
  const [visible, setVisible] = useState(false);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStore(store)}>
        <SafeAreaView
          style={{
            flex: 1,
            backgroundColor: COLORS.lightWhite,
            position: "relative",
          }}
        >
          <Stack.Screen
            options={{
              title: "PizzApp",
              headerTitleStyle: { color: "white" },
              headerStyle: {
                backgroundColor: "#990000",
                borderColor: "#990000",
              },
              headerShadowVisible: false,

              headerTitleAlign: "center",
              //headerLeft: () => <Icon name="help" size={15} color="white" />,

              headerLeft: () => (
                <Feather
                  name="help-circle"
                  size={30}
                  color="#FFF"
                  onPress={() => console.log("Help button pressed")}
                  style={{ marginRight: 10 }}
                />
              ),
              headerRight: () => (
                <Icon
                  name="menu"
                  // name="help-circle"
                  size={30}
                  color="white"
                  onPress={() => setVisible((prev) => !prev)}
                />
              ),
            }}
          />
          <TabViewExample />

          {visible ? (
            <View
              style={{
                position: "absolute",
                top: 5,
                right: 0,
              }}
            >
              <MenuList />
            </View>
          ) : null}
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

export default Home;
