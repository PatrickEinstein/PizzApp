import React, { useEffect } from "react";
import { Text, TouchableOpacity, View, FlatList, Image } from "react-native";
import { StyleSheet } from "react-native";
import RecipeeCards from "../components/RecipeeCards";
import { ScrollView } from "react-native-gesture-handler";
import Carousels from "../components/Carousel";
import { Stack, useRouter, useSearchParams } from "expo-router";
import { useFetch } from "../constants/hook/useFetch";
import { useSelector } from "react-redux";
import { Logo } from "../assets";

const RenderItem1 = ({ item }) => {
  const desiredRange = { start: 1, end: 5 }; // Define the desired ID range

  if (item.id >= desiredRange.start && item.id <= desiredRange.end) {
    return (
      <RecipeeCards
        key={item.id}
        name={item.title}
        image={item.image}
        width={180}
        ingredients={item.ingredients}
        method={item.method}
        description={item.description}
        time={item.time}
      />
    );
  }

  // Return null if the item's ID is not within the desired range
  return null;
};

const RenderItem2 = ({ item }) => {
  const desiredRange = { start: 6, end: 10 }; // Define the desired ID range

  if (item.id >= desiredRange.start && item.id <= desiredRange.end) {
    return (
      <RecipeeCards
        key={item.id}
        name={item.title}
        image={item.image}
        width={180}
        ingredients={item.ingredients}
        method={item.method}
        description={item.description}
        time={item.time}
        title={item.title}
      />
    );
  }

  //Return null if the item's ID is not within the desired range
  return null;
};
const RenderItem3 = ({ item }) => {
  const desiredRange = { start: 11, end: 15 }; // Define the desired ID range

  if (item.id >= desiredRange.start && item.id <= desiredRange.end) {
    return (
      <RecipeeCards
        key={item.id}
        name={item.title}
        image={item.image}
        width={180}
        ingredients={item.ingredients}
        method={item.method}
        description={item.description}
        time={item.time}
      />
    );
  }

  // Return null if the item's ID is not within the desired range
  return null;
};
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

export const Recipee = () => {
  const recipees = useSelector((state) => state.recipe.recipee);

  const { isLoading, error } = useFetch();

  if (isLoading) {
    return (<Image source={Logo} style={styles.logo} />);
  }

  if (error) {
    return <Text>Ooops, check your network</Text>;
  }

  return (
    <ScrollView>
      <View
        justifyContent="center"
        alignItems="center"
        style={{
          height: "auto",
          // marginBottom: 20,
        }}
      >
        <Carousels />
      </View>
      <View>
        <Text
          style={{
            textAlign: "left",
            fontSize: 25,
            fontWeight: "bold",
            marginTop: 10,
            paddingLeft: 10,
          }}
        >
          Summer Toppings
        </Text>
        <FlatList
          data={recipees}
          renderItem={RenderItem1}
          keyExtractor={(item) => item?.id}
          contentContainerStyle={{ flexGrow: 1 }}
          horizontal
          style={{
            padding: 10,
          }}
        />
      </View>
      <View>
        <Text
          style={{
            textAlign: "left",
            fontSize: 25,
            fontWeight: "bold",
            marginTop: 10,
            paddingLeft: 10,
          }}
        >
          Pizza Toppings
        </Text>

        <FlatList
          data={recipees}
          renderItem={RenderItem2}
          keyExtractor={(item) => item?.id}
          contentContainerStyle={{ flexGrow: 1 }}
          horizontal
          style={{
            padding: 10,
          }}
        />
      </View>
      <View>
        <Text
          style={{
            textAlign: "left",
            fontSize: 25,
            fontWeight: "bold",
            marginTop: 10,
            paddingLeft: 10,
          }}
        >
          Crunchies Spellazinni
        </Text>
        <FlatList
          data={recipees}
          renderItem={RenderItem3}
          keyExtractor={(item) => item?.id}
          contentContainerStyle={{ flexGrow: 1 }}
          horizontal
          style={{
            padding: 10,
          }}
        />
      </View>
    </ScrollView>
  );
};

export default Recipee;
