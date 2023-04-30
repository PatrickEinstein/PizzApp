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
import Stackscreen from "../components/stackscreen";

const persistor = persistStore(store);

const Home = () => {
  const [visible, setVisible] = useState(false);
  const onPress = () => setVisible((prev) => !prev);
  return (
    <Provider context={null} store={store}>
      <PersistGate loading={<Text>Loading ...</Text>} persistor={persistor}>
        <SafeAreaView
          style={{
            flex: 1,
            backgroundColor: COLORS.lightWhite,
            position: "relative",
          }}
        >
          <Stackscreen onPress={onPress} icon="menu"  title="PizzApp"/>
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
  )
};

export default Home;
