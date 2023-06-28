import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { TextInput } from "react-native-paper";
import { View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import FileInputComponent from "./DropZone";
import Buttons from "./Buttton";
import SnackBar from "../components/snackbar";
import { Text } from "react-native";
import { useRouter } from "expo-router";
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

function Details({ show }) {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");
  const [image, setImage] = useState();
  const [response, setResponse] = React.useState("");
  const [visible, setVisible] = React.useState(false);
  const [selectedValue, setSelectedValue] = useState("Select a category");

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
    console.log(`image==>`, image);

    const preset_key = "ivpdncki";
    const cloudName = "dsdkmnf0b";

    if (image) {
      setImage(image);

      // const formData = new FormData();
      // formData.append("file", image);
      // formData.append("filepath", image.uri ? image.uri : image.path);
      // formData.append("upload_preset", preset_key);

      // const UploadedImage = await fetch(
      //   "https://api.cloudinary.com/v1_1/dsdkmnf0b/image/upload",
      //   {
      //     method: "POST",
      //      headers: { "Content-Type": "application/json" },
      //     body: formData,
      //   }
      // );
      // const UploadedImageResponse = await UploadedImage.json();
      // console.log(`cloud==>`, UploadedImageResponse.secure_url);
      // setImage(UploadedImageResponse.secure_url);
      // console.log(`image==>`, image);

      const UploadImage = await fetch(
        "https://vote-verse-server-production-6153.up.railway.app/upload",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            category: selectedValue,
            title: title,
            description: description,
            ingredients: ingredients,
            preparation: preparation,
            image: image.uri,
          }),
        }
      );

      const UploadResponse = await UploadImage.json();
      setResponse(UploadResponse.message);
      setVisible(true);

      console.log(`UploadResponse==>`, UploadResponse);

      // Redirect to "/BottomNavs" after a delay of 3 seconds
      setTimeout(() => {
        router.push("/BottomNavs");
      }, 3000);
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

export default Details;
