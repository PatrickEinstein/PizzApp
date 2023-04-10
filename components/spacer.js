import { View } from "react-native";

export const Spacer = ({ height, width }) => (
    <View style={{ height: height || 0, width: width || 0 }} />
  );