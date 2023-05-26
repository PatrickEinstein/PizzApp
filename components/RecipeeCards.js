import { View, Text, TouchableOpacity, Image } from "react-native";
import { useDispatch } from "react-redux";
import { selectedRecipe } from "../Redux/Reducers";
import { useRouter } from "expo-router";

const RecipeeCards = ({
  name,
  image,
  width,
  time,
  description,
  ingredients,
  method,
  title
}) => {
  const dispatch = useDispatch();
  const router = useRouter();
  // console.log(image);

  const onPress = () => {
    dispatch(
      selectedRecipe([{
        description: description,
        method: method,
        ingredients: ingredients,
        time: time,
        image : image,
        name : name,
        title:title
      }])
    );
    router.push("/description");
  };

  return (
    <TouchableOpacity
      style={{
        margin: 10,
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
      <Text
        style={{
          textAlign: "center",
          fontSize: 15,
          fontWeight: "bold",
          marginTop: 10,
        }}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default RecipeeCards;
