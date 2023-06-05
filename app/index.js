import * as React from "react";
import { View, Text, ScrollView, SafeAreaView, Image } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store from "../Redux/store";
import { useState } from "react";
import { persistStore } from "redux-persist";
import Stackscreen from "../components/stackscreen";
import HomePage from "../pages";
import Logo from "../assets/images/pizza.png";
import { StyleSheet } from "react-native";
import { CustomTitle } from "../components/stackscreen";
import { useSelector } from "react-redux";
import BottomNavs from "./BottomNavs";
import { NoRollLogo } from "../components/animatedLogo";

const styles = StyleSheet.create({
  logo: {
    width: 400,
    height: 400,
    resizeMode: "contain",
    position: "absolute",
    marginTop: 50,
    marginLeft: "auto",
    marginRight: "auto",
    borderWidth: 0,
    borderColor: "transparent",
  },
});

const persistor = persistStore(store);

const Home = () => {
  const screen = useSelector((state) => state.recipe.loggedInUser.user);
  console.log(screen);
  const [visible, setVisible] = useState(false);
  const onPress = () => setVisible((prev) => !prev);
  return (
    <Provider context={null} store={store}>
      <PersistGate
        loading={
          <>
            <Stackscreen title="" />
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
            icon=""
            help=""
            backgroundColor="white"
            titleicon={NoRollLogo}
          />
          {screen ? <BottomNavs /> : <HomePage />}
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

export default Home;
