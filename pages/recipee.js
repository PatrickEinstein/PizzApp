import React, { useEffect } from "react";
import { Text, TouchableOpacity, View, FlatList, Image } from "react-native";
import RecipeeCards from "../components/RecipeeCards";
import { ScrollView } from "react-native-gesture-handler";
// import Carousels from "../components/Carousel";
import { Stack, useRouter, useSearchParams } from "expo-router";
import { useFetch } from "../constants/hook/useFetch";
import { useSelector } from "react-redux";
import Logo from "../assets/images/pizza.png";
import Stackscreen, { CustomTitle } from "../components/stackscreen";
import {
  RenderItem1,
  RenderItem2,
  RenderItem3,
  AdminRecipeeCard,
} from "../components/RenderItems";
// import MyCarousel from "../components/Carousel2";
import { NoRollLogo, RollLogo } from "../components/animatedLogo";
import { useTelephone } from "../constants/hook/Telephone";

export const Recipee = () => {
  const recipees = useSelector((state) => state.recipe.recipee);
  const adminRecipe = useSelector(
    (state) => state.recipe.adminRecipee.recipees
  );

  // console.log(`adminRecipee==>`, adminRecipe);
  const { isLoading, error } = useFetch();
  useTelephone();

  if (isLoading) {
    return (
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
    );
  }

  if (error) {
    return <Text>Ooops, check your network</Text>;
  }

  return (
    <ScrollView>
      {/* <Stackscreen title="RECIPE" icon="" /> */}
      {/* <View>
        <MyCarousel />
      </View> */}
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
          Admin
        </Text>

        <FlatList
          data={adminRecipe}
          renderItem={AdminRecipeeCard}
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
          Summer Toppings
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
          Winter Toppings
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
          Gourment Toppings
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
          Pasta Sauces
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
          Summer Sauces
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
          Winter Sauces
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
          Pasta Shapes
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
    </ScrollView>
  );
};

export default Recipee;
