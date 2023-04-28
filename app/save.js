//import liraries
import { Text } from "react-native";
import { useState } from "react";
import { View } from "react-native";
import * as React from "react";
import { TextInput } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { toggleSaved } from "../Redux/Reducers";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Spacer } from "../components/spacer";
import Stackscreen from "../components/stackscreen";
import MenuList from "../components/menulist";
import { useRouter } from "expo-router";
// create a component
const Save = () => {
  const router = useRouter();

  const disapatch = useDispatch();
  const [Value, setValue] = useState("");
  const [recipee, setRecipee] = useState("");

  const [visible, setVisible] = useState(false);
  const onPress = () => setVisible((prev) => !prev);

  const onHandlechange = (newValue) => {
    setValue(newValue);
  };
  const onHandleReciperrchange = (newValue) => {
    setRecipee(newValue);
  };

  const onSave = () => {
    const newValue = Value;
    setValue("");
    setRecipee("");
    disapatch(
      toggleSaved({
        setvalues: newValue,
        recipe: recipee,
      })
    );
    router.push('/open')
  };

  const onDelete = () => {};

  return (
    <View
      style={{
        alignItems: "center",

        backgroundColor: "#fff",
        height: "100%",
        width: "100%",
      }}
    >
      <Stackscreen
        onPress={() => router.push("/")}
        title="Save Recipee"
        icon="home"
      />
      <TextInput
        style={{
          marginTop: 30,
          marginBottom: 5,
          height: 60,
          width:"70%",
          paddingTop:2,
          paddingBottom: 2,
        }}
        placeholder="recipe name"
        mode="outlined"
        multiline={true}
        value={recipee}
        onChangeText={onHandleReciperrchange}
      />
      <TextInput
        style={{
          marginTop: 20,
          marginBottom: 30,
          height: 100,
          width:"70%"
        }}
        placeholder="note"
        mode="outlined"
        multiline={true}
        value={Value}
        onChangeText={onHandlechange}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginLeft: 40,
          marginBottom: 50,
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          aria-label="Save"
          onPress={onSave}
          style={{
            backgroundColor: "maroon",
            height: 40,
            width: 150,
            padding: 10,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
            }}
          >
            Save
          </Text>
        </TouchableOpacity>
        <Spacer width={40} />
        {/* <TouchableOpacity
          aria-label="Save"
          onPress={onSave}
          style={{
            backgroundColor: "maroon",
            height: 40,
            width: 100,
            padding: 10,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
            }}
          >
            Save
          </Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

export default Save;
