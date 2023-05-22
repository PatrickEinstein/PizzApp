import { View, Text, TouchableOpacity, Image } from "react-native";

const RecipeeCards = ({
  name,
  image,
  width,
  height,
  time,
  description,
  ingredients,
  method,
  // onPress,
}) => {
  return (
    <TouchableOpacity
      style={{
        margin: 10,
      }}
      // onPress={onPress}
    >
      <View
        justifyContent="center"
        alignItems="center"
        style={{
          width: width,
          height: 200,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 15,
            fontWeight: "bold",
          }}
        >
          {name}
        </Text>
        <Image
          src={image}
          style={{
            objectFit: "cover",
            height: "100%",
            width: "100%",
            borderRadius: 20,
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default RecipeeCards;
