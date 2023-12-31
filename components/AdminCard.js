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
  // console.log(`covervideo ==>`,covervideo)

  const onPress = () => {
    dispatch(
      selectedRecipe([
        {
          _id: _id,
          cover: cover,
          description: description,
          ingredients: ingredients,
          preparations: preparations,
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
        marginLeft: 5,
        marginRight:5,
        width:170
      }}
      onPress={onPress}
    >
      <Image
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
