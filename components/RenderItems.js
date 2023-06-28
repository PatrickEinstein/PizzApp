import AdminCard from "./AdminCard";
import RecipeeCards from "./RecipeeCards.js";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    position: "absolute",
    top: 200,
    left: 100,
    borderWidth: 0,
    borderColor: "transparent",
  },
});

const AdminRecipeeCard = ({ item }) => {
  return (
    <AdminCard
      category={item.category}
      title={item.title}
      key={item._id}
      _id={item._id}
      name={item.title}
      image={item.image}
      width={180}
      preparation={item.preparation}
      ingredients={item.ingredients}
      method={item.preparation}
      description={item.description}
      time={item.time}
    />
  );

  // Return null if the item's ID is not within the desired range
  return <Text>Admin has no items yet</Text>;
};
const RenderItem1 = ({ item }) => {
  const desiredRange = { start: 1, end: 5 }; // Define the desired ID range

  if (item.id >= desiredRange.start && item.id <= desiredRange.end) {
    return (
      <RecipeeCards
        _id={item._id}
        name={item.title}
        image={item.image}
        width={180}
        ingredients={item.ingredients}
        method={item.method}
        description={item.description}
        time={item.time}
      />
    );
  }

  // Return null if the item's ID is not within the desired range
  return null;
};

const RenderItem2 = ({ item }) => {
  const desiredRange = { start: 6, end: 10 }; // Define the desired ID range

  if (item.id >= desiredRange.start && item.id <= desiredRange.end) {
    return (
      <RecipeeCards
        _id={item._id}
        name={item.title}
        image={item.image}
        width={180}
        ingredients={item.ingredients}
        method={item.method}
        description={item.description}
        time={item.time}
        title={item.title}
      />
    );
  }

  //Return null if the item's ID is not within the desired range
  return null;
};

const RenderItem3 = ({ item }) => {
  const desiredRange = { start: 11, end: 15 }; // Define the desired ID range

  if (item.id >= desiredRange.start && item.id <= desiredRange.end) {
    return (
      <RecipeeCards
        _id={item._id}
        name={item.title}
        image={item.image}
        width={180}
        ingredients={item.ingredients}
        method={item.method}
        description={item.description}
        time={item.time}
      />
    );
  }

  // Return null if the item's ID is not within the desired range
  return null;
};

const RenderItem4 = ({ item }) => {
  const desiredRange = { start: 16, end: 20 }; // Define the desired ID range

  if (item.id >= desiredRange.start && item.id <= desiredRange.end) {
    return (
      <RecipeeCards
        _id={item._id}
        name={item.title}
        image={item.image}
        width={180}
        ingredients={item.ingredients}
        method={item.method}
        description={item.description}
        time={item.time}
      />
    );
  }

  // Return null if the item's ID is not within the desired range
  return null;
};

const RenderItem5 = ({ item }) => {
  const desiredRange = { start: 21, end: 25 }; // Define the desired ID range

  if (item.id >= desiredRange.start && item.id <= desiredRange.end) {
    return (
      <RecipeeCards
        _id={item._id}
        name={item.title}
        image={item.image}
        width={180}
        ingredients={item.ingredients}
        method={item.method}
        description={item.description}
        time={item.time}
      />
    );
  }

  // Return null if the item's ID is not within the desired range
  return null;
};
const RenderItem6 = ({ item }) => {
  const desiredRange = { start: 26, end: 30 }; // Define the desired ID range

  if (item.id >= desiredRange.start && item.id <= desiredRange.end) {
    return (
      <RecipeeCards
        _id={item._id}
        name={item.title}
        image={item.image}
        width={180}
        ingredients={item.ingredients}
        method={item.method}
        description={item.description}
        time={item.time}
      />
    );
  }

  // Return null if the item's ID is not within the desired range
  return null;
};
const RenderItem7 = ({ item }) => {
  const desiredRange = { start: 31, end: 35 }; // Define the desired ID range

  if (item.id >= desiredRange.start && item.id <= desiredRange.end) {
    return (
      <RecipeeCards
        _id={item._id}
        name={item.title}
        image={item.image}
        width={180}
        ingredients={item.ingredients}
        method={item.method}
        description={item.description}
        time={item.time}
      />
    );
  }

  // Return null if the item's ID is not within the desired range
  return null;
};
const RenderItem8 = ({ item }) => {
  const desiredRange = { start: 36, end: 40 }; // Define the desired ID range

  if (item.id >= desiredRange.start && item.id <= desiredRange.end) {
    return (
      <RecipeeCards
        _id={item._id}
        name={item.title}
        image={item.image}
        width={180}
        ingredients={item.ingredients}
        method={item.method}
        description={item.description}
        time={item.time}
      />
    );
  }

  // Return null if the item's ID is not within the desired range
  return null;
};
const RenderItem9 = ({ item }) => {
  const desiredRange = { start: 40, end: 45 }; // Define the desired ID range

  if (item.id >= desiredRange.start && item.id <= desiredRange.end) {
    return (
      <RecipeeCards
        _id={item._id}
        name={item.title}
        image={item.image}
        width={180}
        ingredients={item.ingredients}
        method={item.method}
        description={item.description}
        time={item.time}
      />
    );
  }

  // Return null if the item's ID is not within the desired range
  return null;
};
const RenderItem10 = ({ item }) => {
  const desiredRange = { start: 46, end: 50 }; // Define the desired ID range

  if (item.id >= desiredRange.start && item.id <= desiredRange.end) {
    return (
      <RecipeeCards
        _id={item._id}
        name={item.title}
        image={item.image}
        width={180}
        ingredients={item.ingredients}
        method={item.method}
        description={item.description}
        category={item.category}
        time={item.time}
      />
    );
  }

  // Return null if the item's ID is not within the desired range
  return null;
};

export {
  RenderItem1,
  RenderItem2,
  RenderItem3,
  RenderItem4,
  RenderItem5,
  RenderItem6,
  RenderItem7,
  RenderItem8,
  RenderItem9,
  RenderItem10,
  AdminRecipeeCard,
};
