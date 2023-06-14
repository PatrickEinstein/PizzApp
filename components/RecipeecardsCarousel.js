import { View, Text, TouchableOpacity, Image } from "react-native";

const RecipeeCardsCarousel = ({
  name,
  image,
  width,
  time,
  description,
  ingredients,
  method,
  title,
}) => {
  // console.log(image);

  const onPress = () => {};

  return (
    <TouchableOpacity
      style={{
        // margin: 10,
        width: width,
        height: "auto",
      }}
      onPress={onPress}
    >
      <Image
        src={image}
        style={{
          objectFit: "cover",
          height: 200,
          width: "100%",
          borderRadius: 20,
        }}
      />
      {/* <Text
        style={{
          textAlign: "center",
          fontSize: 15,
          fontWeight: "bold",
          marginTop: 10,
        }}
      >
        {name}
      </Text> */}
    </TouchableOpacity>
  );
};
export default RecipeeCardsCarousel;
