import { View, Text, TouchableOpacity } from "react-native";
import Switches from "../components/switch";
import { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
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
  togglePicker,
} from "../Redux/Reducers";
import { useDispatch, useSelector } from "react-redux";
import { Spacer } from "../components/spacer";
import { Pickers } from "../components/picker";
import MenuList from "../components/menulist";
import { useRouter } from "expo-router";
import { NoRollLogo } from "../components/animatedLogo";
import { ScrollView } from "react-native";
const Settings = () => {
  const values = useSelector((state) => state.recipe);
  console.log(`values in settings==>`, values.autolysis);

  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const [selectedValue, setSelectedValue] = useState(1);
  console.log(`selectedValue in settings==>`, selectedValue);
  const [twoBallSize, setTwoBallSize] = useState(values.twoballsize);
  const [fats, setFats] = useState(values.fats);
  const [CT, setCT] = useState(values.ct);
  const [oldDoughIn, setOldDoughIn] = useState(values.olddoughin);
  const [oldDoughOut, setOldDoughOut] = useState(values.olddoughout);
  const [autolysis, setAutolysis] = useState(values.autolysis);
  const [biga, setBiga] = useState(values.biga);
  const [poolish, setPoolish] = useState(values.poolish);
  const [displayOn, setDisplayOn] = useState(values.displayon);
  const [flour2, setFlour2] = useState(values.flour2);
  const [flour3, setFlour3] = useState(values.flour3);
  const [flour4, setFlour4] = useState(values.flour4);
  const [flour5, setFlour5] = useState(values.flour5);
  const [flour6, setFlour6] = useState(values.flour6);
  console.log(`flours`, flour3, flour4, flour5, flour6);
  const onValueChange = (selectedValue) => {
    setSelectedValue(selectedValue);
    dispatch(togglePicker(selectedValue));
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
  const onToggleDisplayon = () => {
    setCT((prev) => !prev);
    dispatch(toggledisplayon(!displayOn));
  };

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
    dispatch(togglepoolish(!displayOn));
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
    switch (+selectedValue) {
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
  }, [selectedValue]);

  return (
    <ScrollView>
      <View flexDirection="row" justifyContent="space-between">
        <TouchableOpacity onPress={() => router.push("/BottomNavs")}>
          <Text
            style={{
              paddingTop: 25,
            }}
          >
            <Ionicons name="home" size={30} color="black" />
          </Text>
        </TouchableOpacity>

        <Text
          style={{
            fontSize: 25,
            paddingTop: 25,
            marginLeft: 10,
          }}
        >
          Saved Recipees
        </Text>
        <NoRollLogo />
      </View>
      <View
        style={{
          paddingLeft: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 20,
            marginTop: 20,
          }}
        >
          <Text>Flour No</Text>
          <Pickers
            options={options}
            selectedValue={selectedValue}
            onValueChange={onValueChange}
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
    </ScrollView>
  );
};
export default Settings;
