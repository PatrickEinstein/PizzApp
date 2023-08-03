import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View, FlatList, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Logo from "../assets/images/pizza.png";
import { useDispatch } from "react-redux";
import AdminRecipeeCard from "../components/AdminCard";

const useInterval = (callback, delay) => {
  useEffect(() => {
    const interval = setInterval(callback, delay);
    return () => clearInterval(interval);
  }, [callback, delay]);
};

const Recipee = () => {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  console.log(categories);

  const GetAdminData = async () => {
    const getAdminData = await fetch(
      "https://all-servers.vercel.app/getcollection",
      {
        method: "GET",
      }
    );
    const gottenAdminData = await getAdminData.json();
    setCategories(gottenAdminData.NewUserCollectionItem);
  };

  useInterval(() => {
    GetAdminData();
    setIsLoading(false);
  }, 3000);

  return isLoading ? (
    <View justifyContent="center" alignItems="center">
      <Image
        source={Logo}
        style={{
          width: 200,
          height: 200,
          marginLeft: 50,
          marginRight: 50,
        }}
      />
      <Text>Loading, please wait</Text>
    </View>
  ) : (
    <ScrollView>
      {categories.map(({ _id, name, filteredFormattedRecipes }) => (
        <View key={_id}>
          <Text
            style={{
              textAlign: "left",
              fontSize: 25,
              fontWeight: "bold",
              marginTop: 10,
              paddingLeft: 10,
            }}
          >
            Category: {name}
          </Text>
          {/* {filteredFormattedRecipes.map(({_id}) => (
            <FlatList
              key={_id} // Use a unique identifier as the key
              data={filteredFormattedRecipes}
              renderItem={AdminRecipeeCard}
              keyExtractor={(item) => item?.name}
              contentContainerStyle={{ flexGrow: 1 }}
              horizontal
              style={{
                padding: 10,
              }}
            />
          ))} */}
        </View>
      ))}
    </ScrollView>
  );
};

export default Recipee;
