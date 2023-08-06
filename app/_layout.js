import React from "react";
import { ReactDOM } from "react";
// import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import store from "../Redux/store";
import { persistStore } from "redux-persist";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import HomePage from "../pages";
import { createStackNavigator } from "@react-navigation/stack";
import BottomNavs from "./BottomNavs";
import Glossary from "./glossary";
import Welcome from "./Welcome";
import Settings from "./settings";
import Save from "./save";
import Open from "./open";
import Description from "./description";
import AdminDescription from "./adminDescription";
import AdminDetails from "./edit";
const persistor = persistStore(store);
SplashScreen.preventAutoHideAsync();
const Stack = createStackNavigator();
const Layout = () => {
  const [fontsLoaded] = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <PersistGate loading={null} persistor={persistor}>
      <Provider context={null} store={store}>
        {/* <Stack onLayout={onLayoutRootView} /> */}
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="signinandout" component={HomePage} />
          <Stack.Screen name="index" component={BottomNavs} />
          <Stack.Screen name="edit" component={AdminDetails} />
          <Stack.Screen name="glossary" component={Glossary} />
          <Stack.Screen name="open" component={Open} />
          <Stack.Screen name="description" component={Description} />
          <Stack.Screen name="save" component={Save} />
          <Stack.Screen name="adminDescription" component={AdminDescription} />
          <Stack.Screen name="settings" component={Settings} />
          <Stack.Screen name="welcome" component={Welcome} />
        </Stack.Navigator>
      </Provider>
    </PersistGate>
  );
};

export default Layout;
// /a69023f0-6339-4fbd-aac7-b971f7e45331
