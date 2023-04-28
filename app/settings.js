import { View, Text } from "react-native";
import Switches from "../components/switch";
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
} from "../Redux/Reducers";
import { useDispatch } from "react-redux";
import { Spacer } from "../components/spacer";
import MySelect from "../components/picker";
import { set } from "react-native-reanimated";
import Stackscreen from "../components/stackscreen";
import MenuList from "../components/menulist";
import { useRouter } from "expo-router";
const Settings = () => {
  const router= useRouter()
  const [visible, setVisible] = useState(false);
  const onPress = () => setVisible((prev) => !prev);
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
  console.log(`2 ==> ${flour2}`);
  console.log(`3 ==> ${flour3}`);
  console.log(`4 ==> ${flour4}`);
  console.log(`5 ==> ${flour5}`);
  console.log(`6 ==> ${flour6}`);

  console.log(`values ==> ${myValue}`);
  const onHandlechange = (newValue) => {
    setMyValue(newValue);
  };
  const onToggleTwoBallSize = () => {
    setTwoBallSize((prev) => !prev);
    dispatch(toggleTwoballsize(!twoBallSize));
  };

  const onToggleFats = () => {
    setFats((prev) => !prev);
    dispatch(toggleFats(!fats));
  };

  const onToggleCT = () => {
    setCT((prev) => !prev);
    dispatch(togglect(!CT));
  };
  // console.log(`fats ==> ${fats}`)
  const onToggleoldDoughIn = () => {
    setOldDoughIn((prev) => !prev);
    dispatch(toggleoldoughin(!oldDoughIn));
  };
  const onToggleoldDoughOut = () => {
    setOldDoughOut((prev) => !prev);
    dispatch(toggleoldoughout(!oldDoughOut));
  };
  const onToggleautolysis = () => {
    setAutolysis((prev) => !prev);
    dispatch(toggleautolysis(!autolysis));
  };

  const onTogglebiga = () => {
    setBiga((prev) => !prev);
    dispatch(togglebiga(!biga));
  };
  const onTogglePolish = () => {
    setPoolish((prev) => !prev);
    dispatch(togglepoolish(!poolish));
  };
  const onToggleDisplayon = () => {
    setDisplayOn((prev) => !prev);
    dispatch(toggledisplayon(!displayOn));
  };

  const onToggleFlours = async () => {
    dispatch(toggleflour2(flour2));
    dispatch(toggleflour3(flour3));
    dispatch(toggleflour4(flour4));
    dispatch(toggleflour5(flour5));
    dispatch(toggleflour6(flour6));
  };
  const options = [
    { label: 1, value: 1 },
    { label: 2, value: 2 },
    { label: 3, value: 3 },
    { label: 4, value: 4 },
    { label: 5, value: 5 },
  ];

  const Dispatchers = async () => {
    switch (+myValue) {
      case 2:
        setFlour2(true);
        setFlour3(false);
        setFlour3(false);
        setFlour4(false);
        setFlour5(false);
        setFlour6(false);
        await onToggleFlours();

        break;
      case 3:
        setFlour2(true);
        setFlour3(true);
        setFlour4(false);
        setFlour5(false);
        setFlour6(false);
        await onToggleFlours();

        break;
      case 4:
        setFlour2(true);
        setFlour3(true);
        setFlour4(true);
        setFlour5(false);
        setFlour6(false);
        await onToggleFlours();

        break;
      case 5:
        setFlour2(true);
        setFlour3(true);
        setFlour4(true);
        setFlour5(true);
        setFlour6(false);
        await onToggleFlours();

        break;
      case 6:
        setFlour2(1);
        setFlour3(1);
        setFlour4(1);
        setFlour5(1);
        setFlour6(1);
        await onToggleFlours();
    }
  };

  useEffect(() => {
    Dispatchers();
  }, [myValue]);

  return (
    <View>
      <Stackscreen onPress={() =>router.push('/')} title="Settings"  icon ="home"/>
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
          onValueChange={onHandlechange}
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
      {visible ? (
        <View
          style={{
            position: "absolute",
            top: 5,
            right: 0,
          }}
        >
          <MenuList />
        </View>
      ) : null}
    </View>
  );
};
export default Settings;
