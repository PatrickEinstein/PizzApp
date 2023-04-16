import { View, Text } from "react-native";
import Switches from "../../components/switch";
import { useEffect, useState } from "react";
import {
  toggleFats,
  toggleTwoballsize,
  togglect,
  toggleoldoughin,
  toggleoldoughout,
  toggleautolysis,
  togglebiga,
  togglepoolish,
  toggledisplayon,
} from "../../Redux/Reducers";
import { useDispatch } from "react-redux";

export const Settings = () => {
  const dispatch = useDispatch();
  const [twoBallSize, setTwoBallSize] = useState(0);
  const [fats, setFats] = useState(0);
  const [CT, setCT] = useState(0);
  const [oldDoughIn, setOldDoughIn] = useState(0);
  const [oldDoughOut, setOldDoughOut] = useState(0);
  const [autolysis, setAutolysis] = useState(0);
  const [biga, setBiga] = useState(0);
  const [poolish, setPoolish] = useState(0);
  const [displayOn, setDisplayOn] = useState(0);

  const onToggleTwoBallSize = () => {
    setTwoBallSize((prev) => !prev), dispatch(toggleTwoballsize(twoBallSize));
  };
// console.log(`ballsize ==> ${twoBallSize}`)
  const onToggleFats = () => {
    setFats((prev) => !prev), dispatch(toggleFats(fats));
  };
 
  const onToggleCT = () => {
    setCT((prev) => !prev),
    dispatch(togglect(CT));
  };
  // console.log(`fats ==> ${fats}`)
  const onToggleoldDoughIn = () => {
    setOldDoughIn((prev) => !prev);
    dispatch(toggleoldoughin(oldDoughIn));
  };
  const onToggleoldDoughOut = () => {
    setOldDoughOut((prev) => !prev);
    dispatch(toggleoldoughout(oldDoughOut));
  };
  const onToggleautolysis = () => {
    setAutolysis((prev) => !prev), dispatch(toggleautolysis(autolysis));
  };

  const onTogglebiga = () => {
    setBiga((prev) => !prev);
    dispatch(togglebiga(biga));
  };
  const onTogglePolish = () => {
    setPoolish((prev) => !prev);
    dispatch(togglepoolish(poolish));
  };
  const onToggleDisplayon = () => {
    setDisplayOn((prev) => !prev);
    dispatch(toggledisplayon(displayOn));
  };
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text>Two Balls Size</Text>
        <Switches value={twoBallSize} onToggleSwitch={onToggleTwoBallSize} />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text>Fats</Text>
        <Switches value={fats} onToggleSwitch={onToggleFats} />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text>CT</Text>
        <Switches value={CT} onToggleSwitch={onToggleCT} />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text>old Dough In</Text>
        <Switches value={oldDoughIn} onToggleSwitch={onToggleoldDoughIn} />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text>Old Dough out</Text>
        <Switches value={oldDoughOut} onToggleSwitch={onToggleoldDoughOut} />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text>Autolysis</Text>
        <Switches value={autolysis} onToggleSwitch={onToggleautolysis} />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text>Biga</Text>
        <Switches value={biga} onToggleSwitch={onTogglebiga} />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text>poolish</Text>
        <Switches value={poolish} onToggleSwitch={onTogglePolish} />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text>Display On</Text>
        <Switches value={displayOn} onToggleSwitch={onToggleDisplayon} />
      </View>
    </View>
  );
};
