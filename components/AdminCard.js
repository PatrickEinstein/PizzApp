import { View, Text, TouchableOpacity, Image } from "react-native";
import { useDispatch } from "react-redux";
import { selectedRecipe } from "../Redux/Reducers";
import { useRouter } from "expo-router";

const AdminCard = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  return filteredFormattedRecipes.map(
    ({
      _id,
      name,
      image,
      width,
      time,
      description,
      ingredients,
      method,
      title,
      preparation,
      category,
    }) => (
      <TouchableOpacity
        style={{
          margin: 5,
          width: width,
          height: "auto",
          alignItems: "center",
          position: "relative",
        }}
        onPress={() => {
          dispatch(
            selectedRecipe([
              {
                id: _id,
                description: description,
                method: preparation,
                ingredients: ingredients,
                time: time,
                image: image,
                name: name,
                title: title,
              },
            ])
          );
          router.push("/adminDescription");
        }}
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
    )
  );
};
export default AdminCard;
