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
  toggleflour2,
  toggleflour3,
  toggleflour4,
  toggleflour5,
  toggleflour6,
} from "../../Redux/Reducers";
import { useDispatch } from "react-redux";
import { Spacer } from "../../components/spacer";

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
  const [flour2, setFlour2] = useState(0);
  const [flour3, setFlour3] = useState(0);
  const [flour4, setFlour4] = useState(0);
  const [flour5, setFlour5] = useState(0);
  const [flour6, setFlour6] = useState(0);
  const onToggleTwoBallSize = () => {
    setTwoBallSize((prev) => !prev), dispatch(toggleTwoballsize(twoBallSize));
  };
  // console.log(`ballsize ==> ${twoBallSize}`)
  const onToggleFats = () => {
    setFats((prev) => !prev), dispatch(toggleFats(fats));
  };

  const onToggleCT = () => {
    setCT((prev) => !prev), dispatch(togglect(CT));
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
  const onToggleFlour2 = () => {
    setFlour2((prev) => !prev), dispatch(toggleflour2(flour2));
  };
  const onToggleFlour3 = () => {
    setFlour3((prev) => !prev), dispatch(toggleflour3(flour3));
  };
  const onToggleFlour4 = () => {
    setFlour4((prev) => !prev), dispatch(toggleflour4(flour4));
  };
  const onToggleFlour5 = () => {
    setFlour5((prev) => !prev), dispatch(toggleflour5(flour5));
  };
  const onToggleFlour6 = () => {
    setFlour6((prev) => !prev), dispatch(toggleflour6(flour6));
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
      <Spacer height={20} />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text>Fats</Text>
        <Switches value={fats} onToggleSwitch={onToggleFats} />
      </View>
      <Spacer height={20} />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text>CT</Text>
        <Switches value={CT} onToggleSwitch={onToggleCT} />
      </View>
      <Spacer height={20} />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text>old Dough In</Text>
        <Switches value={oldDoughIn} onToggleSwitch={onToggleoldDoughIn} />
      </View>
      <Spacer height={20} />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text>Old Dough out</Text>
        <Switches value={oldDoughOut} onToggleSwitch={onToggleoldDoughOut} />
      </View>
      <Spacer height={20} />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text>Autolysis</Text>
        <Switches value={autolysis} onToggleSwitch={onToggleautolysis} />
      </View>
      <Spacer height={20} />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text>Biga</Text>
        <Switches value={biga} onToggleSwitch={onTogglebiga} />
      </View>
      <Spacer height={20} />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text>poolish</Text>
        <Switches value={poolish} onToggleSwitch={onTogglePolish} />
      </View>
      <Spacer height={20} />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text>Display On</Text>
        <Switches value={displayOn} onToggleSwitch={onToggleDisplayon} />
      </View>
      <Spacer height={20} />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}>
        <Text>flour02</Text>
        <Switches value={flour2} onToggleSwitch={onToggleFlour2} />
      </View>
      <Spacer height={20} />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}>
          <Text>flour03</Text>
          <Switches value={flour3} onToggleSwitch={onToggleFlour3} />
      </View>
      <Spacer height={20} />
      <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
      }}>
        <Text>flour04</Text>
        <Switches value={flour4} onToggleSwitch={onToggleFlour4} />

      </View>
      <Spacer height={20} />
      <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
      }}>
        <Text>flour05</Text>
        <Switches value={flour5} onToggleSwitch={onToggleFlour5} />
      </View>
      <Spacer height={20} />
      <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
      }}>
        <Text>flour06</Text>
        <Switches value={flour6} onToggleSwitch={onToggleFlour6} />
      </View>
    </View>
  );
};
