import { View, Text, TouchableOpacity, Image } from "react-native";
import { useDispatch } from "react-redux";
import { selectedRecipe } from "../Redux/Reducers";
import { useRouter } from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome";
import { Feather } from "@expo/vector-icons"; // Assuming you have installed react-native-vector-icons library
import { useState } from "react";

const AdminCard = ({
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
}) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleEdit = () => {
    console.log(category);
    dispatch(
      selectedRecipe([
        {
          _id: _id,
          category: category,
          description: description,
          ingredients: ingredients,
          method: preparation,
          time: time,
          image: image,
          name: name,
          title: title,
        },
      ])
    );
    router.push("/edit");
  };

  const onPress = () => {
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
  };
  const Delete = async () => {
    const getAdminData = await fetch(
      "https://vote-verse-server-production-6153.up.railway.app/deleteUpload",
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          _id: _id,
        }),
      }
    );
    const gottenAdminData = await getAdminData.json();
    router.push("/BottomNavs");
    console.log(gottenAdminData);
  };

  return (
    <TouchableOpacity
      style={{
        margin: 5,
        width: width,
        height: "auto",
        alignItems: "center",
        position: "relative",
      }}
      onPress={onPress}
    >
      <TouchableOpacity
        onPress={Delete}
        style={{ position: "absolute", top: "50%", left: 10, zIndex: 5 }}
      >
        <Feather name="trash" size={50} color="white" />
      </TouchableOpacity>
      {/* <Text>{_id}</Text> */}
      <Image
        src={image}
        style={{
          objectFit: "cover",
          height: 200,
          width: "100%",
          borderRadius: 20,
        }}
      />
      <TouchableOpacity
        onPress={handleEdit}
        style={{ position: "absolute", top: "50%", right: 10, zIndex: 5 }}
      >
        <Feather name="edit" size={50} color="white" />
      </TouchableOpacity>

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

export default AdminCard;
