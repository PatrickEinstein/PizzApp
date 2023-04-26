import { View, Text } from "react-native";
import Switches from "../components/switch";
import { useState } from "react";
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
} from "../Redux/Reducers";
import { useDispatch } from "react-redux";
import { Spacer } from "../components/spacer";
import MySelect from "../components/picker";
import { set } from "react-native-reanimated";

const Settings = () => {
  const dispatch = useDispatch();
  const [myValue, setMyValue] = useState(1);
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
  console.log(myValue);
  const onToggleTwoBallSize = () => {
    setTwoBallSize((prev) => !prev);
    dispatch(toggleTwoballsize(twoBallSize));
  };

  const onToggleFats = () => {
    setFats((prev) => !prev);
    dispatch(toggleFats(fats));
  };

  const onToggleCT = () => {
    setCT((prev) => !prev);
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
    setAutolysis((prev) => !prev);
    dispatch(toggleautolysis(autolysis));
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
    setFlour2((prev) => !prev);
    dispatch(toggleflour2(flour2));
  };
  const onToggleFlour3 = () => {
    setFlour3((prev) => !prev);
    dispatch(toggleflour3(flour3));
  };
  const onToggleFlour4 = () => {
    setFlour4((prev) => !prev);
    dispatch(toggleflour4(flour4));
  };
  const onToggleFlour5 = () => {
    setFlour5((prev) => !prev);
    dispatch(toggleflour5(flour5));
  };
  const onToggleFlour6 = () => {
    setFlour6((prev) => !prev);
    dispatch(toggleflour6(flour6));
  };

  const options = [
    { label: 1, value: 1 },
    { label: 2, value: 2 },
    { label: 3, value: 3 },
    { label: 4, value: 4 },
    { label: 5, value: 5 },
  ];

  const onValueChange = (itemValue) => {
    setSelectedValue(itemValue);
    try {
      switch (selectedValue) {
        case 2:
          setFlour2(true);
          dispatch(toggleflour2(flour2));

        case 3:
          setFlour2(true);
          setFlour3(true);
          setFlour4(false);
          setFlour5(false);
          setFlour6(false);
          dispatch(toggleflour2(flour2));
          dispatch(toggleflour2(flour2));
          dispatch(toggleflour3(flour3));
          dispatch(toggleflour4(flour4));
          dispatch(toggleflour5(flour5));
          dispatch(toggleflour6(flour6));
        case 4:
          setFlour2(true);
          setFlour3(true);
          setFlour4(true);
          setFlour5(false);
          setFlour6(false);
          dispatch(toggleflour2(flour2));
          dispatch(toggleflour2(flour2));
          dispatch(toggleflour3(flour3));
          dispatch(toggleflour4(flour4));
          dispatch(toggleflour5(flour5));
          dispatch(toggleflour6(flour6));

        case 5:
          setFlour2(true);
          setFlour3(true);
          setFlour4(true);
          setFlour5(true);
          setFlour6(false);
          dispatch(toggleflour2(flour2));
          dispatch(toggleflour2(flour2));
          dispatch(toggleflour3(flour3));
          dispatch(toggleflour4(flour4));
          dispatch(toggleflour5(flour5));
          dispatch(toggleflour6(flour6));
        case 6:
          setFlour2(true);
          setFlour3(true);
          setFlour4(true);
          setFlour5(true);
          setFlour6(true);
          dispatch(toggleflour2(flour2));
          dispatch(toggleflour2(flour2));
          dispatch(toggleflour3(flour3));
          dispatch(toggleflour4(flour4));
          dispatch(toggleflour5(flour5));
          dispatch(toggleflour6(flour6));
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 20,
          marginTop: 20,
        }}
      >
        <Text>Flour No</Text>
        <MySelect
          options={options}
          selectedValue={myValue}
          onValueChange={setMyValue}
          width={50}
          color="maroon"
        />
      </View>
      <Spacer borderwidth={1} width="100%" borderColor="black" />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 20,
          marginTop: 20,
        }}
      >
        <Text>Two Balls Size</Text>
        <Switches value={twoBallSize} onToggleSwitch={onToggleTwoBallSize} />
      </View>
      <Spacer borderwidth={1} width="100%" borderColor="black" />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 20,
          marginTop: 20,
        }}
      >
        <Text>Fats</Text>
        <Switches value={fats} onToggleSwitch={onToggleFats} />
      </View>
      <Spacer borderwidth={1} width="100%" borderColor="black" />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 20,
          marginTop: 20,
        }}
      >
        <Text>CT</Text>
        <Switches value={CT} onToggleSwitch={onToggleCT} />
      </View>
      <Spacer borderwidth={1} width="100%" borderColor="black" />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 20,
          marginTop: 20,
        }}
      >
        <Text>old Dough In</Text>
        <Switches value={oldDoughIn} onToggleSwitch={onToggleoldDoughIn} />
      </View>
      <Spacer borderwidth={1} width="100%" borderColor="black" />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 20,
          marginTop: 20,
        }}
      >
        <Text>Old Dough out</Text>
        <Switches value={oldDoughOut} onToggleSwitch={onToggleoldDoughOut} />
      </View>
      <Spacer borderwidth={1} width="100%" borderColor="black" />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 20,
          marginTop: 20,
        }}
      >
        <Text>Autolysis</Text>
        <Switches value={autolysis} onToggleSwitch={onToggleautolysis} />
      </View>
      <Spacer borderwidth={1} width="100%" borderColor="black" />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 20,
          marginTop: 20,
        }}
      >
        <Text>Biga</Text>
        <Switches value={biga} onToggleSwitch={onTogglebiga} />
      </View>
      <Spacer borderwidth={1} width="100%" borderColor="black" />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 20,
          marginTop: 20,
        }}
      >
        <Text>poolish</Text>
        <Switches value={poolish} onToggleSwitch={onTogglePolish} />
      </View>
      <Spacer borderwidth={1} width="100%" borderColor="black" />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 20,
          marginTop: 20,
        }}
      >
        <Text>Display On</Text>
        <Switches value={displayOn} onToggleSwitch={onToggleDisplayon} />
      </View>

      <Spacer borderwidth={1} width="100%" borderColor="black" />
    </View>
  );
};
export default Settings;
