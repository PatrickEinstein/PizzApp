import React, { useState } from "react";
import { Button } from "react-native";
import { View, Text, TouchableOpacity, StyleSheet,Image } from "react-native";
import * as DocumentPicker from "expo-document-picker";

const FileInputComponent = ({ style, image, setImage }) => {
  const [name, setName] = useState();
  console.log(`image`, image);
  const handleFileSelect = async () => {
    try {
      const res = await DocumentPicker.getDocumentAsync({});

      if (res.type === "success") {
        setImage(res);
        setName(res.name);
        console.log(res);
      } else {
        console.log("File selection cancelled.");
      }
    } catch (err) {
      console.log("Error while selecting a file:", err);
    }
  };
  return (
    <View
      style={{
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
      }}
    >
      <View style={style}>
        <View
          style={{
            borderWidth: 2,
            borderColor: "#990000",
            borderStyle: "dashed",
            borderRadius: 4,
            // padding: 16,
            width: "90%",
            height: "90%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {image ? (
            <Image
              src={image}
              style={{
                objectFit: "cover",
                height: "100%",
                width: "100%",
                borderRadius: 20,
              }}
            />
          ) : (
            <Text>Select an image</Text>
          )}
        </View>
      </View>
      <Button title="Select File" onPress={handleFileSelect} />
    </View>
  );
};

export default FileInputComponent;
