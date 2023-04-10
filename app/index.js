import * as React from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import TabViewExample from "../Tabs/tab";
import { useState } from "react";
import { Stack, useRouter } from "expo-router";
import { COLORS } from "../constants/index";
import MenuList from "../components/menulist";
import { store } from "../Redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";


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
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: true,
          headerLeft: () => <Icon name="search" size={15} color="#000" />,

          headerRight: () => (
            <Icon
              name="home"
              size={30}
              color="#000"
              onPress={() => setVisible((prev) => !prev)}
            />
          ),
          
        }}
      />
    <TabViewExample/>
    
   
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
       ) : (
        <Text>" "</Text>
        )}
     </SafeAreaView>
     </PersistGate>
     </Provider>
  );
};

export default Home;
