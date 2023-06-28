import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { TextInput } from "react-native-paper";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Buttons from "../components/Buttton";
import SnackBar from "../components/snackbar";
import FileInputComponent from "../components/DropZone";
import { Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { useRouter } from "expo-router";
import { NoRollLogo } from "../components/animatedLogo";
const styles = StyleSheet.create({
  dropzone: {
    borderWidth: 2,
    borderColor: "#990000",
    padding: 16,
    width: "80%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
});

function AdminDetails() {
  const selected = useSelector((state) => state.recipe.selectedRecipe);
  const item = selected[0];
  const router = useRouter();

  const [title, setTitle] = useState(item.name);
  const [description, setDescription] = useState(item.description);
  const [ingredients, setIngredients] = useState(item.ingredients);
  const [preparation, setPreparation] = useState(item.method);
  const [image, setImage] = useState(item.image);
  const [response, setResponse] = useState("");
  const [visible, setVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState(item.category);
  const [show, setShow] = useState(true);
  const Categories = [
    {
      name: "Select a category",
    },
    {
      name: "course",
    },
    {
      name: "recipees",
    },
    {
      name: "product",
    },
  ];

  const onSubmit = async () => {
    const preset_key = "ivpdncki";
    const cloudName = "dsdkmnf0b";
    if (image) {
      // const formData = new FormData();
      // formData.append("file", image);
      // formData.append("filepath", image.path);
      // formData.append("upload_preset", preset_key);

      // const UploadedImage = await fetch(
      //   "https://api.cloudinary.com/v1_1/dsdkmnf0b/image/upload",
      //   {
      //     method: "POST",
      //     headers: { "Content-Type": "application/json" },
      //     body: formData,
      //   }
      // );
      // const UploadedImageResponse = await UploadedImage.json();
      // console.log(UploadedImageResponse.secure_url);
      // setImage(UploadedImageResponse.secure_url);
      const getAdminData = await fetch(
        "https://vote-verse-server-production-6153.up.railway.app/update",
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            _id: item._id,
            category: selectedValue,
            title: title,
            description: description,
            ingredients: ingredients,
            preparation: preparation,
            image: image.uri ? image.uri : image,
          }),
        }
      );
      const gottenAdminData = await getAdminData.json();
      setResponse(gottenAdminData.message);
      setVisible(true);

      setInterval(() => {
        router.push("/BottomNavs");
      }, 3000);

      console.log(`admindataget`, gottenAdminData);
    } else {
      setVisible(true);
      setResponse("Please provide an image");
    }
  };
  return (
    <ScrollView
      style={{
        marginRight: "5%",
        marginLeft: "5%",
      }}
    >
      <View flexDirection="row" justifyContent="space-between">
        <TouchableOpacity onPress={() => router.push("/BottomNavs")}>
          <Text
            style={{
              paddingTop: 25,
            }}
          >
            <Ionicons name="home" size={30} color="black" />
          </Text>
        </TouchableOpacity>

        <Text
          style={{
            fontSize: 25,
            paddingTop: 25,
            marginLeft: 10,
          }}
        >
          Edit Your Uploads
        </Text>
        <NoRollLogo />
      </View>
      <SnackBar
        visible={visible}
        onDismissSnackBar={() => setVisible(false)}
        message={response}
      />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <FileInputComponent
          style={styles.dropzone}
          image={image}
          setImage={setImage}
        />
      </View>
      {/* PICKER */}
      {/* PICKER */}
      <Text>Edit your uploads</Text>
      <Text>Category</Text>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        style={{
          color: "red",
        }}
      >
        {Categories.map(({ name }) => (
          <Picker.Item label={name} value={name} key={name} />
        ))}
      </Picker>
      {/* PICKER */}
      {/* PICKER */}
      <TextInput
        value={title}
        onChangeText={(text) => setTitle(text)}
        mode="flat"
        label="title"
        multiline={true}
        style={{
          width: "98%",
          backgroundColor: "white",
          height: 60,
          marginBottom: 10,
        }}
      />
      <TextInput
        value={description}
        onChangeText={(text) => setDescription(text)}
        mode="flat"
        multiline={true}
        label="description"
        style={{
          width: "98%",
          backgroundColor: "white",
          height: 80,
          numberOfLines: 10,
          marginBottom: 10,
        }}
      />
      {show ? (
        <>
          <TextInput
            value={ingredients}
            onChangeText={(text) => setIngredients(text)}
            mode="flat"
            label="ingredients"
            multiline={true}
            style={{
              width: "98%",
              backgroundColor: "white",
              height: 80,
              marginBottom: 10,
            }}
          />
          <TextInput
            value={preparation}
            onChangeText={(text) => setPreparation(text)}
            mode="flat"
            label="preparation"
            multiline={true}
            style={{
              width: "98%",
              backgroundColor: "white",
              height: 80,
              marginBottom: 10,
            }}
          />
        </>
      ) : null}
      <Buttons
        text="Upload"
        width="100%"
        marginTop={30}
        backgroundColor="#990000"
        borderRadius={10}
        onPress={onSubmit}
      />
    </ScrollView>
  );
}

export default AdminDetails;
