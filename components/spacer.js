import { View } from "react-native";

export const Spacer = ({ height, width, borderwidth ,borderColor}) => (
  <View
    style={{ height: height || 0, width: width || 0, borderWidth: borderwidth, borderColor:borderColor }}
  />
);
