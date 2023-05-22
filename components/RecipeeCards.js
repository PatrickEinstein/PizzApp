import { View, Text, TouchableOpacity, Image } from "react-native";
import { useDispatch } from "react-redux";
import { selectedRecipe } from "../Redux/Reducers";

const RecipeeCards = ({
  name,
  image,
  width,
  time,
  description,
  ingredients,
  method,
}) => {
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      style={{
        margin: 10,
      }}
      onPress={() =>
        dispatch(
          selectedRecipe({
            description: description,
            method: method,
            ingredients: ingredients,
            time: time,
          })
        )
      }
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
