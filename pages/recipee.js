import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View, FlatList, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Logo from "../assets/images/pizza.png";
import { useDispatch } from "react-redux";
import AdminRecipeeCard from "../components/AdminCard";
import MyCarousel from "../components/Carousel2";
import BootLoader from "../components/BootLoader";
import NewCarousel from "../components/NewCarousel";

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

  return (
    <ScrollView>
      <View>
        {/* <MyCarousel /> */}
        <NewCarousel/>
      </View>
      {isLoading && <BootLoader />}
      {categories.map(({ _id, name, filteredFormattedRecipes }) => (
        <View>
          <Text
            key={_id}
            style={{
              textAlign: "left",
              fontSize: 25,
              fontWeight: "bold",
              marginTop: 10,
              paddingLeft: 10,
            }}
          >
            {name}
          </Text>
          <ScrollView horizontal={true} key={name} showsHorizontalScrollIndicator={false}>
            {filteredFormattedRecipes.map(
              ({
                _id,
                name,
                cover,
                descriptions,
                ingredients,
                preparations,
                title,
                covervideo,
              }) => (
                <AdminRecipeeCard
                  key={cover}
                  name={name}
                  cover={cover}
                  description={descriptions}
                  ingredients={ingredients}
                  preparations={preparations}
                  title={title}
                  covervideo={covervideo}
                  width={170}
                />
              )
            )}
          </ScrollView>
        </View>
      ))}
    </ScrollView>
  );
};
export default Recipee;
