import * as React from "react";
import { View, Text, ScrollView, SafeAreaView, Image } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store from "../Redux/store";
import { useState } from "react";
import { persistStore } from "redux-persist";
import Stackscreen, { CustomTitle } from "../components/stackscreen";
import HomePage from "../pages";
import Logo from "../assets/images/pizza.png";
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

const Home = () => {
  const [visible, setVisible] = useState(false);
  const onPress = () => setVisible((prev) => !prev);
  return (
    <Provider context={null} store={store}>
      <PersistGate
        loading={
          <>
            <Stackscreen
              title="Rome Pizza and  Pasta"
              backgroundColor="#990000"
            />
            <Image source={Logo} style={styles.logo} />
          </>
        }
        persistor={persistor}
      >
        <SafeAreaView
          style={{
            flex: 1,
          }}
        >
          <Stackscreen
            title="Welcome"
            icon="menu"
            help="help-circle"
            backgroundColor="white"
            titleicon={CustomTitle}
          />
          <HomePage />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

export default Home;
