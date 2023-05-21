import React from "react";
import { Text, TouchableOpacity, View, FlatList } from "react-native";
import { useSelector } from "react-redux";
import Icon from "react-native-vector-icons/Feather";
import Stackscreen from "../components/stackscreen";
import RecipeeCards from "../components/RecipeeCards";
import { ScrollView } from "react-native-gesture-handler";
// import Carousels from "../components/Carousel";
import { Stack, useRouter, useSearchParams } from "expo-router";
import { useFetch } from "../constants/hook/useFetch";

const data = [
  { id: "1", name: "Item 1" },
  { id: "2", name: "Item 2" },
  { id: "3", name: "Item 3" },
  { id: "3", name: "Item 4" },
  { id: "3", name: "Item 5" },
  { id: "3", name: "Item 6" },
  { id: "3", name: "Item 7" },
  { id: "3", name: "Item 8" },
  // Add more items as needed
];

const renderItem2 = ({ item }) => <RecipeeCards name={item.name} />;

const renderItem = ({ item }) => (
  <View style={{ padding: 10 }}>
    <Text>{item.name}</Text>
  </View>
);

function Recipee() {
  const params = useSearchParams();

  const { isLoading, error, refetch } = useFetch();

  return (
    <ScrollView>
      <View justifyContent="center" alignItems="center">
        {/* <View
          justifyContent="center"
          alignItems="center"
          style={{
            width: "90%",
            height: 200,
            borderRadius: 30,
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          <Carousels />
        </View> */}

        <FlatList
          data={data}
          renderItem={renderItem2}
          keyExtractor={(item) => item?.id}
          contentContainerStyle={{ flexGrow: 1 }}
          horizontal
          style={{
            padding: 10,
          }}
        />
        <FlatList
          data={data}
          renderItem={renderItem2}
          keyExtractor={(item) => item?.id}
          contentContainerStyle={{ flexGrow: 1 }}
          horizontal
          style={{
            padding: 10,
          }}
        />
        <FlatList
          data={data}
          renderItem={renderItem2}
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
}

export default Recipee;
