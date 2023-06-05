import Carousel, { Pagination } from "react-native-snap-carousel-virtualized";
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import RecipeeCardsCarousel from "./RecipeeCards";
import { useSelector } from "react-redux";

const MyCarousel3 = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const entries = useSelector((state) => state.entries); // Update with your Redux state selector

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

  const pagination = () => {
    return (
      <Pagination
        dotsLength={entries.length}
        activeDotIndex={activeSlide}
        containerStyle={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: "rgba(255, 255, 255, 0.92)",
        }}
        inactiveDotStyle={
          {
            // Define styles for inactive dots here
          }
        }
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  };

  return (
    <View>
      <Carousel
        data={entries}
        renderItem={renderItem}
        sliderWidth={350}
        itemWidth={350}
        onSnapToItem={(index) => setActiveSlide(index)}
      />
      {pagination()}
    </View>
  );
};

const styles = StyleSheet.create({
  carouselItem: {
    // Define styles for carousel item here
  },
});

export default MyCarousel3;
