import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Carousel from "react-native-snap-carousel";

const Carousels = () => {
  const data = [
    { id: "1", title: "Item 1" },
    { id: "2", title: "Item 2" },
    { id: "3", title: "Item 3" },
    { id: "3", title: "Item 4" },
    { id: "3", title: "Item 5" },
    { id: "3", title: "Item 6" },
    { id: "3", title: "Item 7" },
    { id: "3", title: "Item 8" },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.carouselItem}>
      <Text style={styles.carouselText}>{item.title}</Text>
    </View>
  );

  return (
    <Carousel
      data={data}
      renderItem={renderItem}
      sliderWidth={300}
      itemWidth={300}
      layout="default"

    />
  );
};

const styles = StyleSheet.create({
  carouselItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#990000",
    borderRadius: 5,
    height: 200,
    padding: 10,
  },
  carouselText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
export default Carousels;
