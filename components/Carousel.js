import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Carousel from "react-native-snap-carousel";
import RecipeeCards, { RecipeeCardsCarousel } from "./RecipeeCards";
import { useSelector } from "react-redux";
import { useSearchParams } from "expo-router";

const renderItem = ({ item }) => {
  const desiredRange = { start: 1, end: 50 };
  if (item.id >= desiredRange.start && item.id <= desiredRange.end) {
    return (
      <View style={styles.carouselItem}>
        <RecipeeCardsCarousel
          key={item.id}
          name={item.title}
          image={item.image}
          width={350}
        />
      </View>
    );
  }
};

const Carousels = () => {
  const recipees = useSelector((state) => state.recipe.recipee);
  const params = useSearchParams();

  return (
    <Carousel
      data={recipees}
      renderItem={renderItem}
      sliderWidth={350}
      itemWidth={350}
      layout="default"
    />
  );
};

const styles = StyleSheet.create({
  carouselItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  carouselText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
export default Carousels;
