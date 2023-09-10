import React, { useEffect, useState } from "react";
import { View, ScrollView, StyleSheet, FlatList } from "react-native";
import AdminRecipeeCard from "../components/AdminCard";
import BootLoader from "../components/BootLoader";
import Carousel, { Pagination } from "react-native-snap-carousel";

const useInterval = (callback, delay) => {
  useEffect(() => {
    const interval = setInterval(callback, delay);
    return () => clearInterval(interval);
  }, [callback, delay]);
};

const NewCarousel = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeSlide, setActiveSlide] = useState(0);
  const [carouselRef, setCarouselRef] = useState(null);

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

  const allRecipes = categories.flatMap(
    (category) => category.filteredFormattedRecipes
  );

  useEffect(() => {
    const autoScroll = setInterval(() => {
      const nextSlide = (activeSlide + 1) % allRecipes.length;
      carouselRef?.snapToItem(nextSlide);
      setActiveSlide(nextSlide);
    }, 2000);

    return () => clearInterval(autoScroll);
  }, [activeSlide, carouselRef]);

  const pagination = () => {
    return (
      <Pagination
        dotsLength={allRecipes.length}
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
    <ScrollView>
      {isLoading && <BootLoader />}
      <View style={styles.cardContainer}>
        <Carousel
          ref={(ref) => setCarouselRef(ref)}
          data={allRecipes}
          renderItem={({ item }) => (
            <AdminRecipeeCard
              width={330}
              name={item.name}
              cover={item.cover}
              description={item.descriptions}
              ingredients={item.ingredients}
              preparations={item.preparations}
              title={item.title}
              covervideo={item.covervideo}
            />
          )}
          sliderWidth={300}
          itemWidth={330}
          onSnapToItem={(index) => setActiveSlide(index)}
        />
      </View>
      {pagination()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop:"5%"
  },
});

export default NewCarousel;
