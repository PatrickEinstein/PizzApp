import Carousel, { Pagination } from "react-native-snap-carousel";
import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import RecipeeCardsCarousel from "./RecipeecardsCarousel";
import { useSelector } from "react-redux";

const MyCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const recipees = useSelector((state) => state.recipe.recipee);
  const carouselRef = useRef(null);

  useEffect(() => {
    const autoScroll = setInterval(() => {
      const nextSlide = (activeSlide + 1) % recipees.length;
      const isLastSlide = nextSlide === recipees.length - 4;
      carouselRef.current.snapToItem(nextSlide, !isLastSlide);
      setActiveSlide(nextSlide);
    }, 2000);

    return () => clearInterval(autoScroll);
  }, [activeSlide]);

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
        dotsLength={5}
        activeDotIndex={activeSlide}
        containerStyle={{
          backgroundColor: "rgba(0, 0, 0, 0.75)",
          padding: 0,
          margin: 0,
          top: -140,
        }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          backgroundColor: "rgba(0, 0, 0, 0.75)",
        }}
        inactiveDotStyle={
          {
            // Define styles for inactive dots here
          }
        }
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        animatedDuration={500}
        style={{
          margin: 0,
        }}
      />
    );
  };

  return (
    <View>
      <Carousel
        ref={carouselRef}
        data={recipees}
        renderItem={renderItem}
        onSnapToItem={(index) => setActiveSlide(index)}
        loop={true}
        loopClonesPerSide={recipees.length}
        windowSize={50}
        sliderWidth={350}
        itemWidth={350}
        style={{
          paddingTop: 0,
        }}
      />
      {pagination()}
    </View>
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

export default MyCarousel;
