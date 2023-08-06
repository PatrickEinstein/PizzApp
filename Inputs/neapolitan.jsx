import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
// import InputWithAdornments from "./inputscomponents";
import InputWithAdornments from "./inputscomponents";
import { Spacer } from "../components/spacer";
import { Divider, IconButton, List } from "react-native-paper";
import StyledIconButton from "../components/stylediconButton";
import HDivider from "../components/Divider";
import { useSelector } from "react-redux";
import { calculateDoughIngredients } from "../config/neapolitan";
import { Value } from "react-native-reanimated";
import Factors from "../components/YeastFactors";

const Inputs = () => {
  const [clickedLabel, setClickedLabel] = useState("CY");
  // console.log(clickedLabel);
  const handleButtonClick = (label) => {
    if (label === clickedLabel) {
      setClickedLabel("");
    } else {
      setClickedLabel(label);
    }
  };

  const Factores = Factors(clickedLabel);
  // console.log(`FACTORS ===> ${Factores}`);
  const onOff = useSelector((state) => state.recipe);
 

  const twoballsize = onOff.twoballsize;
  const fats = onOff.fats;
  const ct = onOff.ct;
  const oldDoughIn = onOff.olddoughin;

  const olddoughout = onOff.olddoughout;
  const autolysis = onOff.autolysis;
  const biga = onOff.biga;
  const poolish = onOff.poolish;
  const displayOn = onOff.displayon;
  const doughball2 = onOff.doughball02;
  const ballWeight02 = onOff.ballweight2;
  const flour02 = onOff.flour2;
  const flour03 = onOff.flour3;
  const flour04 = onOff.flour4;
  const flour05 = onOff.flour5;
  const flour06 = onOff.flour6;
  console.log(`flours in neap ==>`, flour02, flour03, flour03, flour04, flour05, flour06)

  const [Doughball1, setDoughball1] = useState(+1);
  const [Doughball2, setDoughball2] = useState(0);
  const [BallWeight1, setBallWeight1] = useState(250);
  const [BallWeight2, setBallWeight2] = useState(0);
  const [flour1, setflour1] = useState(100);
  const [flour2, setflour2] = useState(flour02);
  const [flour3, setflour3] = useState(flour03);
  const [flour4, setflour4] = useState(flour04);
  const [flour5, setflour5] = useState(flour05);
  const [flour6, setflour6] = useState(flour06);
  const [water, setwater] = useState(60);
  const [salt, setsalt] = useState(3);
  const [leaven, setleaven] = useState(8);
  const [temp, settemp] = useState(20);
  const [autolysisflour, setautolysisflour] = useState(0);
  const [autolysiswater, setautolysiswater] = useState(0);
  const [OldDoughIn, setolddoughin] = useState(0);
  const [OlddoughOut, setolddoughout] = useState(0);
  const [yeastfactor, setyeastfactor] = useState(2.5);
  const [NewYeastFactor, setNewYeastFactor] = useState(0);
  const [CTleaven, setCTleaven] = useState(43);
  const [CTC, setCTC] = useState(4);
  // console.log(NewYeastFactor);

  const onhandleCTleaven = (newValue) => {
    setCTleaven(newValue);
  };
  const CTleavenplus = () => {
    const newValue = +CTleaven + 1;
    setCTleaven(newValue);
  };

  const CTleavenminus = () => {
    if (temp > 10) {
      const newValue = +CTleaven - 1;
      setCTleaven(newValue);
    }
    return;
  };

  const onhandleCTC = (newValue) => {
    setCTC(newValue);
  };
  const CTCplus = () => {
    const newValue = +CTC + 1;
    setCTC(newValue);
  };

  const CTCminus = () => {
    if (temp > 10) {
      const newValue = +CTC - 1;
      setCTC(newValue);
    }
    return;
  };

  const leavenplus = () => {
    const newValue = +leaven + 1;
    setleaven(newValue);
  };

  const leavenminus = () => {
    if (leaven > 1) {
      const newValue = +leaven - 1;
      setleaven(newValue);
    }
    return;
  };
  const onHandleleaven = (newValue) => {
    setleaven(newValue);
  };
  const tempplus = () => {
    const newValue = +temp + 1;
    settemp(newValue);
  };

  const tempminus = () => {
    if (temp > 10) {
      const newValue = +temp - 1;
      settemp(newValue);
    }
    return;
  };
  const onHandletemp = (newValue) => {
    settemp(newValue);
  };
  const massofyeast =
    (+leaven / 24 / (+temp / 26)) *
    (+water / 100) *
    (+Doughball1 * +BallWeight1 + +Doughball2 * +BallWeight2);
  const newYeastFactor =
    (massofyeast * yeastfactor * 0.3) /
    (+Doughball1 * +BallWeight1 + +Doughball2 * +BallWeight2);

  const YeastNeeded1 = () => {
    onHandleleaven;
    setNewYeastFactor(newYeastFactor);
  };

  const YeastNeeded2 = () => {
    onHandletemp;
    setNewYeastFactor(NewYeastFactor);
    // setyeastfactor(NewYeastFactor);
  };

  const Doughball1plus = () => {
    const newValue = +Doughball1 + 1;
    setDoughball1(newValue);
  };

  const Doughball1minus = () => {
    if (Doughball1 != 0) {
      const newValue = +Doughball1 - 1;
      setDoughball1(newValue);
    }
    return;
  };

  const onHandleDoughball1 = (newValue) => {
    setDoughball1(newValue);
  };

  const Doughball2plus = () => {
    const newValue = +Doughball2 + 1;
    setDoughball2(newValue);
  };

  const Doughball2minus = () => {
    if (Doughball2 != 0) {
      const newValue = +Doughball2 - 1;
      setDoughball2(newValue);
    }
    return;
  };

  const onHandleDoughball2 = (newValue) => {
    setDoughball2(newValue);
  };
  const BallWeight1plus = () => {
    const newValue = +BallWeight1 + 5;
    setBallWeight1(newValue);
  };

  const BallWeight1minus = () => {
    if (BallWeight1 != 0) {
      const newValue = +BallWeight1 - 5;
      setBallWeight1(newValue);
    }
    return;
  };

  const onHandleBallweight1 = (newValue) => {
    setBallWeight1(newValue);
  };

  const BallWeight2plus = () => {
    const newValue = +BallWeight2 + 5;
    setBallWeight2(newValue);
  };

  const BallWeight2minus = () => {
    if (BallWeight2 != 0) {
      const newValue = +BallWeight2 - 5;
      setBallWeight2(newValue);
    }
    return;
  };
  const onHandleBallweight2 = (newValue) => {
    setBallWeight2(newValue);
  };
  const flour1plus = () => {
    const newValue = +flour1 + 1;
    setflour1(newValue);
  };

  const flour1minus = () => {
    if (flour1 != 0) {
      const newValue = +flour1 - 1;
      setflour1(newValue);
    }
    return;
  };
  const onHandleflour1 = (newValue) => {
    setflour1(newValue);
  };

  const flour2plus = () => {
    const newValue = +flour2 + 5;
    setflour2(newValue);
  };

  const flour2minus = () => {
    if (flour2 != 0) {
      const newValue = +flour2 - 5;
      setflour2(newValue);
    }
    return;
  };

  const onHandleflower2 = (newValue) => {
    setflour2(newValue);
  };

  const flour3plus = () => {
    const newValue = +flour3 + 5;
    setflour3(newValue);
  };

  const flour3minus = () => {
    if (flour3 != 0) {
      const newValue = +flour3 - 5;
      setflour3(newValue);
    }
    return;
  };

  const onHandleflour3 = (newValue) => {
    setflour3(newValue);
  };

  const flour4plus = () => {
    const newValue = +flour4 + 5;
    setflour4(newValue);
  };

  const flour4minus = () => {
    if (flour4 != 0) {
      const newValue = +flour4 - 5;
      setflour4(newValue);
    }
    return;
  };

  const onHandleflour4 = (newValue) => {
    setflour4(newValue);
  };

  const flour5plus = () => {
    const newValue = +flour5 + 5;
    setflour5(newValue);
  };

  const flour5minus = () => {
    if (flour5 != 0) {
      const newValue = +flour5 - 5;
      setflour5(newValue);
    }
    return;
  };

  const onHandleflour5 = (newValue) => {
    setflour5(newValue);
  };

  const flour6plus = () => {
    const newValue = +flour6 + 5;
    setflour6(newValue);
  };

  const flour6minus = () => {
    if (flour6 != 0) {
      const newValue = +flour6 - 5;
      setflour6(newValue);
    }
    return;
  };

  const onHandleflour6 = (newValue) => {
    setflour6(newValue);
  };
  const waterplus = () => {
    const newValue = +water + 5;
    setwater(newValue);
  };

  const waterminus = () => {
    if (water != 0) {
      const newValue = +water - 5;
      setwater(newValue);
    }
    return;
  };

  const onHandlewater = (newValue) => {
    setwater(newValue);
  };

  const saltplus = () => {
    const newValue = +salt + 1;
    setsalt(newValue);
  };

  const saltminus = () => {
    if (salt != 0) {
      const newValue = +salt - 1;
      setsalt(newValue);
    }
    return;
  };

  const onHandlesalt = (newValue) => {
    setsalt(newValue);
  };

  const autolysisflourplus = () => {
    const newValue = +autolysisflour + 5;
    setautolysisflour(newValue);
  };

  const autolysisflourminus = () => {
    if (autolysisflour != 0) {
      const newValue = +autolysisflour - 5;
      setautolysisflour(newValue);
    }
    return;
  };
  const onHandleautolysisflour = (newValue) => {
    setautolysisflour(newValue);
  };

  const autolysiswaterplus = () => {
    const newValue = +autolysiswater + 5;
    setautolysiswater(newValue);
  };

  const autolysiswaterminus = () => {
    if (autolysiswater != 0) {
      const newValue = +autolysiswater - 5;
      setautolysiswater(newValue);
    }
    return;
  };

  const onHandleautolysiswater = (newValue) => {
    setautolysiswater(newValue);
  };

  const olddoughinplus = () => {
    const newValue = +OldDoughIn + 1;
    setolddoughin(newValue);
  };

  const olddoughinminus = () => {
    if (OldDoughIn != 0) {
      const newValue = +OldDoughIn - 1;
      setolddoughin(newValue);
    }
    return;
  };
  const onHandleolddoughin = (newValue) => {
    setolddoughin(newValue);
  };
  const olddoughoutplus = () => {
    const newValue = +OlddoughOut + 5;
    setolddoughout(newValue);
  };

  const olddoughoutminus = () => {
    if (OlddoughOut != 0) {
      const newValue = +OlddoughOut - 5;
      setolddoughout(newValue);
    }
    return;
  };
  const onHandleolddoughout = (newValue) => {
    setolddoughout(newValue);
  };

  const CYplus = () => {
    setyeastfactor(+0.003);
  };
  const ADYplus = () => {
    setyeastfactor(+0.002);
  };
  const IDYplus = () => {
    setyeastfactor(+0.0015);
  };
  const FSDplus = () => {
    setyeastfactor(+0.15);
  };
  // console.log(oldDoughIn);
  const LSDplus = () => {
    setyeastfactor(+0.4);
  };

  const doughBalls1 = +Doughball1;
  const doughBalls2 = +Doughball2;

  const ballWeight1 = +BallWeight1;
  const ballWeight2 = +BallWeight2;

  // const CY = yeastfactor;
  const CY = newYeastFactor;
  const waterPercentage = water;
  const saltPercentage = salt;
  const leaveningHours = leaven;
  const leaveningTemperature = temp;
  const result = calculateDoughIngredients(
    doughBalls1,
    doughBalls2,
    ballWeight1,
    ballWeight2,
    CY,
    waterPercentage,
    saltPercentage,
    leaveningHours,
    leaveningTemperature,
    flour1,
    flour2,
    flour3,
    flour4,
    flour5,
    flour6,
    autolysisflour,
    autolysiswater
  );

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
          alignItems: "center",
        }}
      >
        <InputWithAdornments
          value={Doughball1}
          onChange={onHandleDoughball1}
          onIncrement={Doughball1plus}
          onDecrement={Doughball1minus}
          borderColor={"#990000"}
          label="Dough Balls "
          viewWidth={150}
        />
        <InputWithAdornments
          value={BallWeight1}
          onChange={onHandleBallweight1}
          onIncrement={BallWeight1plus}
          onDecrement={BallWeight1minus}
          borderColor={"#990000"}
          label="Ball Weight (g)"
          viewWidth={150}
        />
      </View>
      {twoballsize ? (
        <>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 0,
              justifyContent: "space-between",
              alignItems: "center",
              width: "auto",
            }}
          >
            <InputWithAdornments
              value={Doughball2}
              onChange={onHandleDoughball2}
              onIncrement={Doughball2plus}
              onDecrement={Doughball2minus}
              borderColor={"#990000"}
              label="Dough Balls"
              viewWidth={150}
            />
            <InputWithAdornments
              value={BallWeight2}
              onChange={onHandleDoughball2}
              onIncrement={BallWeight2plus}
              onDecrement={BallWeight2minus}
              borderColor={"#990000"}
              label="Ball Weight (g)"
              viewWidth={150}
            />
          </View>
          <Spacer height={20} />
        </>
      ) : null}

      {flour1 + flour2 + flour3 + flour4 + flour5 + flour6 == 100 ? null : (
        <Text>Flours : % sum is not 100% </Text>
      )}
      {flour02 ? (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 1,
            justifyContent: "space-between",
            alignItems: "center",
            margin: "auto",
          }}
        >
          <InputWithAdornments
            value={flour1}
            onChange={onHandleflour1}
            onIncrement={flour1plus}
            onDecrement={flour1minus}
            borderColor={"#990000"}
            label="Flour 1 (%)"
            viewWidth={150}
            name="pencil"
          />

          {flour02 ? (
            <InputWithAdornments
              value={flour2}
              onChange={setflour2}
              onIncrement={flour2plus}
              onDecrement={flour2minus}
              borderColor={"#990000"}
              label="Flour 2 (%)"
              viewWidth={150}
              name="pencil"
            />
          ) : null}
        </View>
      ) : null}

      {flour03 ? (
        <>
          <Spacer height={1} />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 1,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {flour03 ? (
              <InputWithAdornments
                value={flour3}
                onChange={onHandleflour3}
                onIncrement={flour3plus}
                onDecrement={flour3minus}
                borderColor={"#990000"}
                label="Flour 3 (%)"
                viewWidth={150}
                name="pencil"
              />
            ) : null}

            {flour04 ? (
              <InputWithAdornments
                value={flour4}
                onChange={onHandleflour4}
                onIncrement={flour4plus}
                onDecrement={flour4minus}
                borderColor={"#990000"}
                label="Flour 4 (%)"
                viewWidth={150}
                name="pencil"
              />
            ) : null}
          </View>
        </>
      ) : null}
      <Spacer height={1} />
      {flour05 ? (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 20,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {flour05 ? (
            <InputWithAdornments
              value={flour5}
              onChange={onHandleflour5}
              onIncrement={flour5plus}
              onDecrement={flour5minus}
              borderColor={"#990000"}
              label="Flour 5 (%)"
              viewWidth={150}
              name="pencil"
            />
          ) : null}
          {flour06 ? (
            <InputWithAdornments
              value={flour6}
              onChange={onHandleflour6}
              onIncrement={flour6plus}
              onDecrement={flour6minus}
              borderColor={"#990000"}
              label="Flour 6 (%)"
              viewWidth={150}
              name="pencil"
            />
          ) : null}
        </View>
      ) : null}
      <View>
        <InputWithAdornments
          value={water}
          onChange={onHandlewater}
          onIncrement={waterplus}
          onDecrement={waterminus}
          borderColor={"#990000"}
          label="Water (%)"
        />
        <InputWithAdornments
          value={salt}
          onChange={onHandlesalt}
          onIncrement={saltplus}
          onDecrement={saltminus}
          borderColor={"#990000"}
          label="Salt (%)"
        />
      </View>
      <Spacer height={20} />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 20,
          alignItems: "center",
        }}
      >
        <InputWithAdornments
          value={leaven}
          onChange={YeastNeeded1}
          onIncrement={leavenplus}
          onDecrement={leavenminus}
          borderColor={"#990000"}
          label="RT leavening (h)"
          viewWidth={150}
          name="pencil"
        />
        <InputWithAdornments
          value={temp}
          onChange={YeastNeeded2}
          onIncrement={tempplus}
          onDecrement={tempminus}
          borderColor={"#990000"}
          label="RT ºC"
          viewWidth={150}
          name="pencil"
        />
        <Spacer height={20} />
      </View>
      {ct ? (
        <>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 20,
              alignItems: "center",
            }}
          >
            <InputWithAdornments
              value={CTleaven}
              onChange={onhandleCTleaven}
              onIncrement={CTleavenplus}
              onDecrement={CTleavenminus}
              borderColor={"#990000"}
              label="CT leavening (h)"
              viewWidth={150}
              name="pencil"
            />
            <InputWithAdornments
              value={CTC}
              onChange={onhandleCTC}
              onIncrement={CTCplus}
              onDecrement={CTCminus}
              borderColor={"#990000"}
              label="CT ºC"
              viewWidth={150}
              name="pencil"
            />
            <Spacer height={20} />
          </View>
        </>
      ) : null}
      {autolysis ? (
        <>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 20,
              alignItems: "center",
            }}
          >
            <InputWithAdornments
              value={autolysisflour}
              onChange={onHandleautolysisflour}
              onIncrement={autolysisflourplus}
              onDecrement={autolysisflourminus}
              borderColor={"#990000"}
              label="Autolysis flour(%)"
              viewWidth={150}
              name="pencil"
            />
            <InputWithAdornments
              value={autolysiswater}
              onChange={onHandleautolysiswater}
              onIncrement={autolysiswaterplus}
              onDecrement={autolysiswaterminus}
              borderColor={"#990000"}
              label="Autolysis water(%) "
              viewWidth={150}
              name="pencil"
            />
          </View>
        </>
      ) : null}

      {oldDoughIn ? (
        <>
          <Spacer height={20} />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 20,
              // justifyContent: "space-between",
              // alignItems: "center",
            }}
          >
            <InputWithAdornments
              value={OldDoughIn}
              onChange={onHandleolddoughin}
              onIncrement={olddoughinplus}
              onDecrement={olddoughinminus}
              borderColor={"#990000"}
              label="Old Dough in (%)"
              viewWidth={150}
              name="pencil"
            />
            <View>
              <Text>OD Leav. Power</Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  marginBottom: 20,
                  justifyContent: "space-around",
                  alignItems: "center",
                  marginRight: 10,
                }}
              >
                <StyledIconButton
                  label="LOW"
                  // onPress={LSDplus}
                  helperText="Max value reached"
                  // style={{ marginBottom: 20 }}
                  onPress={() => {
                    handleButtonClick("LOW");
                    // LSDplus();
                  }}
                  clickedLabel={clickedLabel}
                />

                <StyledIconButton
                  label="HIGH"
                  // onPress={LSDplus}
                  helperText="Max value reached"
                  // style={{ marginBottom: 20 }}
                  onPress={() => {
                    handleButtonClick("HIGH");
                    // LSDplus();
                  }}
                  clickedLabel={clickedLabel}
                />
              </View>
            </View>
          </View>

          <Spacer height={10} />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 20,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <InputWithAdornments
              value={OlddoughOut}
              onChange={onHandleolddoughout}
              onIncrement={olddoughoutplus}
              onDecrement={olddoughoutminus}
              borderColor={"#990000"}
              label="Old Dough out(%)"
              viewWidth={150}
              name="pencil"
            />
          </View>
        </>
      ) : null}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <Text>Yeast Type</Text>
        <View
          style={{
            flexDirection: "row",
            position: "relative",
            // justifyContent: "space-between",
          }}
        >
          <StyledIconButton
            label="CY"
            // onPress={CYplus}
            helperText="Max value reached"
            style={{ marginBottom: 20 }}
            onPress={() => {
              CYplus();
              handleButtonClick("CY");
            }}
            clickedLabel={clickedLabel}
          />
          {clickedLabel === "CY" ? (
            <Text
              style={{
                position: "absolute",
                bottom: -10,
              }}
            >
              Compressed Yeast
            </Text>
          ) : null}
          <StyledIconButton
            label="ADY"
            // onPress={ADYplus}
            helperText="Max value reached"
            style={{ marginBottom: 20 }}
            onPress={() => {
              handleButtonClick("ADY");
              ADYplus();
            }}
            clickedLabel={clickedLabel}
          />
          {clickedLabel === "ADY" ? (
            <Text
              style={{
                position: "absolute",
                bottom: -10,
              }}
            >
              Active Dry Yeast
            </Text>
          ) : null}
          <StyledIconButton
            label="IDY"
            // onPress={IDYplus}
            helperText="Max value reached"
            style={{ marginBottom: 20 }}
            onPress={() => {
              handleButtonClick("IDY");
              IDYplus();
            }}
            clickedLabel={clickedLabel}
          />
          {clickedLabel === "IDY" ? (
            <Text
              style={{
                position: "absolute",
                bottom: -10,
              }}
            >
              Instant Dry Yeast
            </Text>
          ) : null}
          <StyledIconButton
            label="FSD"
            // onPress={FSDplus}
            helperText="Max value reached"
            style={{ marginBottom: 20 }}
            onPress={() => {
              handleButtonClick("FSD");
              FSDplus();
            }}
            clickedLabel={clickedLabel}
          />
          {clickedLabel === "FSD" ? (
            <Text
              style={{
                position: "absolute",
                bottom: -10,
              }}
            >
              Firm Sour Dough
            </Text>
          ) : null}
          <StyledIconButton
            label="LSD"
            // onPress={LSDplus}
            helperText="Max value reached"
            style={{ marginBottom: 20 }}
            onPress={() => {
              handleButtonClick("LSD");
              LSDplus();
            }}
            clickedLabel={clickedLabel}
          />
          {clickedLabel === "LSD" ? (
            <Text
              style={{
                position: "absolute",
                bottom: -10,
              }}
            >
              Liquid Sour Dough
            </Text>
          ) : null}
        </View>
      </View>

      {autolysis ? (
        <View
          style={{
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <HDivider />
          <Text>Autolysis doses {result.autolysisdose.toFixed(2)}g</Text>
          <Spacer height={20} />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                backgroundColor: "#990000",
                padding: 30,
                borderRadius: 25,
              }}
            >
              <Text
                style={{
                  color: "white",
                }}
              >
                Flour : {result.autolysisflourmass.toFixed(2)}g
              </Text>
            </View>
            <Spacer width={30} />
            <View
              style={{
                backgroundColor: "#990000",
                padding: 30,
                borderRadius: 25,
              }}
            >
              <Text
                style={{
                  color: "white",
                }}
              >
                Water : {result.autolysiswatermass.toFixed(2)}g
              </Text>
            </View>
          </View>
        </View>
      ) : null}
      <Spacer height={20} />
      {poolish ? (
        <View
          style={{
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <HDivider />
          <Text>Poolish doses :value</Text>
          <Spacer height={20} />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                backgroundColor: "#990000",
                padding: 30,
                borderRadius: 25,
              }}
            >
              <View>
                <Text
                  style={{
                    color: "white",
                  }}
                >
                  Flour
                </Text>
                <Text
                  style={{
                    color: "white",
                  }}
                >
                  Value
                </Text>
              </View>
            </View>
            <Spacer width={30} />
            <View
              style={{
                backgroundColor: "#990000",
                padding: 30,
                borderRadius: 25,
              }}
            >
              <Text
                style={{
                  color: "white",
                }}
              >
                Water
              </Text>
              <Text
                style={{
                  color: "white",
                }}
              >
                Value
              </Text>
            </View>
            <Spacer width={30} />
            <View
              style={{
                backgroundColor: "#990000",
                padding: 30,
                borderRadius: 25,
              }}
            >
              <Text
                style={{
                  color: "white",
                }}
              >
                Water
              </Text>
              <Text
                style={{
                  color: "white",
                }}
              >
                Value
              </Text>
            </View>
          </View>
        </View>
      ) : null}

      <Spacer height={20} />
      <HDivider />
      <View
        style={{
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Text style={{ fontWeight: "bold" }}>
          Main dough doses{" "}
          <Text style={{ color: "#990000" }}>
            {isNaN(result.maindoughdose) ? "" : result.maindoughdose.toFixed(0)}
            g
          </Text>
        </Text>
        <Spacer height={20} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              backgroundColor: "#990000",
              borderRadius: 10,
              height: "auto",
              width: 150,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "white",
              }}
            >
              Flour1 :{" "}
              {isNaN(result.flour1mass) ? "" : result.flour1mass.toFixed(2)}g
            </Text>

            {flour2 ? (
              <Text
                style={{
                  color: "white",
                }}
              >
                Flour2 :{" "}
                {isNaN(result.flour2mass) ? "" : result.flour2mass.toFixed(2)}g
              </Text>
            ) : null}
            {flour3 ? (
              <Text
                style={{
                  color: "white",
                }}
              >
                Flour3 :{" "}
                {isNaN(result.flour3mass) ? "" : result.flour3mass.toFixed(2)}g
              </Text>
            ) : null}

            {flour4 ? (
              <Text
                style={{
                  color: "white",
                }}
              >
                Flour4 :{" "}
                {isNaN(result.flour4mass) ? "" : result.flour4mass.toFixed(2)}g
              </Text>
            ) : null}
            {flour5 ? (
              <Text
                style={{
                  color: "white",
                }}
              >
                Flour5 :{" "}
                {isNaN(result.flour5mass) ? "" : result.flour5mass.toFixed(2)}g
              </Text>
            ) : null}
            {flour6 ? (
              <Text
                style={{
                  color: "white",
                }}
              >
                Flour6 :{" "}
                {isNaN(result.flour6mass) ? "" : result.flour6mass.toFixed(2)}g
              </Text>
            ) : null}
          </View>

          <Spacer width={20} />
          <View
            style={{
              backgroundColor: "#990000",
              borderRadius: 10,
              height: 50,
              width: 150,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "white",
              }}
            >
              Water:{" "}
              {isNaN(result.waterWeight) ? "" : result.waterWeight.toFixed(2)}g
            </Text>
          </View>
        </View>
        <Spacer height={20} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              backgroundColor: "#990000",
              borderRadius: 10,
              height: 50,
              width: 150,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "white",
              }}
            >
              Salt:{" "}
              {isNaN(result.saltWeight) ? "" : result.saltWeight.toFixed(2)}g
            </Text>
          </View>
          <Spacer width={20} />
          <View
            style={{
              backgroundColor: "#990000",
              borderRadius: 10,
              height: 50,
              width: 150,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "white",
              }}
            >
              yeast:{" "}
              {isNaN(result.yeastWeight)
                ? ""
                : +result.yeastWeight.toFixed(5) *
                  (clickedLabel ? Factores : null)}
              g
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Inputs;
// +result.yeastWeight.toFixed(2)
