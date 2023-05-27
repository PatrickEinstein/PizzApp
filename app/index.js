import * as React from "react";
import { View, Text, ScrollView, SafeAreaView, Image } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store from "../Redux/store";
import { useState } from "react";
import { persistStore } from "redux-persist";
import Stackscreen from "../components/stackscreen";
import HomePage from "../pages";
import { Logo, Logo2 } from "../assets";
import { StyleSheet } from "react-native";
import SnackBar from "../components/snackbar";

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    position: "absolute",
    top: 200,
    left: 100,
    borderWidth: 0,
    borderColor: "transparent",
  },
});

const persistor = persistStore(store);
//<Text>Loading ...</Text>
const Home = () => {
  const [visible, setVisible] = useState(false);
  const onPress = () => setVisible((prev) => !prev);
  return (
    <Provider context={null} store={store}>
      <PersistGate
        loading={
          <>
            <Stackscreen title="Rome Pizza and  Pasta" />
            <Image source={Logo} style={styles.logo} />
          </>
        }
        persistor={persistor}
      >
        <SafeAreaView
          style={{
            flex: 1,
            backgroundColor: "#990000",
          }}
        >
          <Stackscreen onPress={onPress} icon="menu" title="Welcome" />
          <HomePage />
          {/* <SnackBar /> */}
          {/* <Description /> */}
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

export default Home;
