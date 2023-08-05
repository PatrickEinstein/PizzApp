import { View, Text, TouchableOpacity, Image } from "react-native";
import { useDispatch } from "react-redux";
import { selectedRecipe } from "../Redux/Reducers";
import { useRouter } from "expo-router";

const AdminCard = ({
  _id,
  cover,
  description,
  ingredients,
  preparations,
  title,
  covervideo,
}) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const onPress = () => {
    dispatch(
      selectedRecipe([
        {
          _id: _id,
          cover: cover,
          description: description,
          ingredients: ingredients,
          preparation: preparations,
          title: title,
          covervideo: covervideo,
        },
      ])
    );
    router.push("/adminDescription");
  };

  return (
    <TouchableOpacity
      style={{
        height: "auto",
        alignItems: "center",
        position: "relative",
      }}
      onPress={onPress}
    >
      <img
        src={cover}
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
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default AdminCard;
