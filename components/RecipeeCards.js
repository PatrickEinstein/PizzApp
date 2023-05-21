import { View, Text, TouchableOpacity, Image } from "react-native";

const RecipeeCards = ({ name }) => {
  return (
    <TouchableOpacity>
      <View
        justifyContent="center"
        alignItems="center"
        style={{
          width: 200,
          height: 200,
          backgroundColor: "#990000",
          borderRadius: 20,
          margin:10
        }}
      >
        <Text>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RecipeeCards;
