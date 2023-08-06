import Carousel, { Pagination } from "react-native-snap-carousel";
import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";
import RecipeeCardsCarousel from "./RecipeecardsCarousel";
import { useSelector } from "react-redux";
import L1 from "../assets/P1.png";
import L2 from "../assets/P2.png";
import L3 from "../assets/P3.png";
import L4 from "../assets/P4.png";
import L6 from "../assets/P6.png";
import L7 from "../assets/P7.png";

const MyCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const recipees = [L1, L2, L3, L4, L6, L7];
  const carouselRef = useRef(null);

  useEffect(() => {
    const autoScroll = setInterval(() => {
      const nextSlide = (activeSlide + 1) % recipees.length;
      const isLastSlide = nextSlide === recipees.length;
      carouselRef.current.snapToItem(nextSlide, !isLastSlide);
      setActiveSlide(nextSlide);
    }, 2000);

    return () => clearInterval(autoScroll);
  }, [activeSlide]);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.carouselItem}>
        <Image source={item} style={{ width: 350, height: 200 }} />
      </View>
    );
  };

  const pagination = () => {
    return (
      <Pagination
        dotsLength={recipees.length}
        activeDotIndex={activeSlide}
        containerStyle={{ paddingVertical: 8 }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: "rgba(0, 0, 0, 0.92)",
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  };

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        marginRight: "auto",
        marginLeft: "auto",
      }}
    >
      <Carousel
        ref={carouselRef}
        data={recipees}
        renderItem={renderItem}
        onSnapToItem={(index) => setActiveSlide(index)}
        loop={true}
        loopClonesPerSide={recipees.length}
        windowSize={50}
        sliderWidth={320}
        sliderHeight={200}
        itemWidth={300}
        style={{
          height: 200,
          
        }}
      />
      {pagination()}
    </View>
  );
};

const styles = StyleSheet.create({
  carouselItem: {
    marginTop: 20,
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
