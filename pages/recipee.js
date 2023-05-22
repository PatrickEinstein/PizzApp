import React, { useEffect } from "react";
import { Text, TouchableOpacity, View, FlatList } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import Stackscreen from "../components/stackscreen";
import RecipeeCards from "../components/RecipeeCards";
import { ScrollView } from "react-native-gesture-handler";
import Carousels from "../components/Carousel";
import { Stack, useRouter, useSearchParams } from "expo-router";
import { useFetch } from "../constants/hook/useFetch";
import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { selectedRecipe } from "../Redux/Reducers";

const renderItem1 = ({ item }) => {
  // const dispatch = useDispatch()
  const desiredRange = { start: 1, end: 10 }; // Define the desired ID range

  if (item.id >= desiredRange.start && item.id <= desiredRange.end) {
    return (
      <RecipeeCards
        key={item.id}
        name={item.title}
        image={item.image}
        width={250}
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

const renderItem2 = ({ item }) => {
  const desiredRange = { start: 11, end: 20 }; // Define the desired ID range

  if (item.id >= desiredRange.start && item.id <= desiredRange.end) {
    return (
      <RecipeeCards
        key={item.id}
        name={item.title}
        image={item.image}
        width={250}
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
const renderItem3 = ({ item }) => {
  const desiredRange = { start: 21, end: 30 }; // Define the desired ID range

  if (item.id >= desiredRange.start && item.id <= desiredRange.end) {
    return (
      <RecipeeCards
        key={item.id}
        name={item.title}
        image={item.image}
        width={250}
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

function Recipee() {
  const recipees = useSelector((state) => state.recipe.recipee);
  const params = useSearchParams();
  // const { isLoading, error, refetch } =useFetch()
  const Fetch = useFetch();
  useEffect(() => {
    Fetch;
  }, []);
  return (
    <ScrollView>
      <View
        justifyContent="center"
        alignItems="center"
        style={{
          height: "auto",
          marginBottom: 20,
        }}
      >
        <Carousels />
      </View>

      <FlatList
        data={recipees}
        renderItem={renderItem1}
        keyExtractor={(item) => item?.id}
        contentContainerStyle={{ flexGrow: 1 }}
        horizontal
        style={{
          padding: 10,
        }}
      />
      <FlatList
        data={recipees}
        renderItem={renderItem2}
        keyExtractor={(item) => item?.id}
        contentContainerStyle={{ flexGrow: 1 }}
        horizontal
        style={{
          padding: 10,
        }}
      />
      <FlatList
        data={recipees}
        renderItem={renderItem3}
        keyExtractor={(item) => item?.id}
        contentContainerStyle={{ flexGrow: 1 }}
        horizontal
        style={{
          padding: 10,
        }}
      />
    </ScrollView>
  );
}

export default Recipee;
