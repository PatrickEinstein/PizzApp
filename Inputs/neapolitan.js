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

const Inputs = () => {
  const [clickedLabel, setClickedLabel] = useState("");

  const handleButtonClick = (label) => {
    if (label === clickedLabel) {
      setClickedLabel("");
    } else {
      setClickedLabel(label);
    }
  };

  const onOff = useSelector((state) => state.recipe);

  const twoballsize = onOff.twoballsize;
  const fats = onOff.fats;
  const ct = onOff.ct;
  const oldDoughIn = onOff.olddougnin;
  const olddoughout = onOff.olddoughout;
  const autolysis = onOff.autolysis;
  const biga = onOff.biga;
  const poolish = onOff.poolish;
  const displayOn = onOff.displayon;
  const doughball2 = onOff.doughball02;
  const ballWeight02 = onOff.ballweight2;
  const flour02 = onOff.flour02;
  const flour03 = onOff.flour03;
  const flour04 = onOff.flour04;
  const flour05 = onOff.flour05;
  const flour06 = onOff.flour06;

  const [Doughball1, setDoughball1] = useState(+0);
  const [Doughball2, setDoughball2] = useState(0);
  const [BallWeight1, setBallWeight1] = useState(0);
  const [BallWeight2, setBallWeight2] = useState(0);
  const [flour1, setflour1] = useState(100);
  const [flour2, setflour2] = useState(0);
  const [flour3, setflour3] = useState(0);
  const [flour4, setflour4] = useState(0);
  const [flour5, setflour5] = useState(0);
  const [flour6, setflour6] = useState(0);
  const [water, setwater] = useState(0);
  const [salt, setsalt] = useState(0);
  const [leaven, setleaven] = useState(6);
  const [temp, settemp] = useState(40);
  const [autolysisflour, setautolysisflour] = useState(0);
  const [autolysiswater, setautolysiswater] = useState(0);
  const [OldDoughIn, setolddoughin] = useState(0);
  const [OlddoughOut, setolddoughout] = useState(0);
  const [yeastfactor, setyeastfactor] = useState(0);

  const [NewYeastFactor, setNewYeastFactor] = useState(0);
  console.log(yeastfactor);

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
    // setNewYeastFactor(+0.003)
    // setyeastfactor(+0.005);
    // sethydrationfactor(+0.5);
    // settimefactor(+2);
    // settemp(+2);
  };
  const ADYplus = () => {
    setyeastfactor(+0.002);
    // setNewYeastFactor(+0.002)
    // setyeastfactor(+0.003);
    // sethydrationfactor(+0.4);
    // settimefactor(+1.5);
    // settemp(+1);
  };
  const IDYplus = () => {
    setyeastfactor(+0.0015);
    // setNewYeastFactor(+0.0015)
    // setyeastfactor(+0.002);
    // sethydrationfactor(+0.4);
    // settimefactor(+1);
    // settemp(+0.5);
  };
  const FSDplus = () => {
    setyeastfactor(+0.15);
    // setNewYeastFactor(+0.15)
    // setyeastfactor(+0.15);

    // settimefactor(+3);
  };
  const LSDplus = () => {
    setyeastfactor(+0.4);
    // setNewYeastFactor(+0.14)
    // setyeastfactor(+0.2);

    // settimefactor(+3);
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
          margin: 0,
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
      {doughball2 ? (
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
              label="Ball Weight"
              viewWidth={150}
            />
          </View>
          <Spacer height={20} />
        </>
      ) : null}

      {flour1 + flour2 + flour3 + flour4 + flour5 + flour6 == 100 ? null : (
        <Text>Flours : % sum is not 100% </Text>
      )}
      {flour2 ? (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 20,
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
            label="Flour 1"
            viewWidth={"auto"}
            name="pencil"
          />

          {flour2 ? (
            <InputWithAdornments
              value={flour2}
              onChange={setflour2}
              onIncrement={flour2plus}
              onDecrement={flour2minus}
              borderColor={"#990000"}
              label="Flour 2"
              viewWidth={150}
              name="pencil"
            />
          ) : null}
        </View>
      ) : null}

      {flour3 ? (
        <>
          <Spacer height={30} />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 20,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {flour3 ? (
              <InputWithAdornments
                value={flour3}
                onChange={onHandleflour3}
                onIncrement={flour3plus}
                onDecrement={flour3minus}
                borderColor={"#990000"}
                label="Flour 3"
                viewWidth={150}
                name="pencil"
              />
            ) : (
              <Text></Text>
            )}

            {flour4 ? (
              <InputWithAdornments
                value={flour4}
                onChange={onHandleflour4}
                onIncrement={flour4plus}
                onDecrement={flour4minus}
                borderColor={"#990000"}
                label="Flour 4"
                viewWidth={150}
                name="pencil"
              />
            ) : (
              <Text></Text>
            )}
          </View>
        </>
      ) : (
        <Text></Text>
      )}
      <Spacer height={30} />
      {flour5 ? (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 20,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {flour5 ? (
            <InputWithAdornments
              value={flour5}
              onChange={onHandleflour5}
              onIncrement={flour5plus}
              onDecrement={flour5minus}
              borderColor={"#990000"}
              label="Flour 5"
              viewWidth={150}
              name="pencil"
            />
          ) : (
            <Text></Text>
          )}
          {flour6 ? (
            <InputWithAdornments
              value={flour6}
              onChange={onHandleflour6}
              onIncrement={flour6plus}
              onDecrement={flour6minus}
              borderColor={"#990000"}
              label="Flour 6"
              viewWidth={150}
              name="pencil"
            />
          ) : (
            <Text></Text>
          )}
        </View>
      ) : (
        <Text></Text>
      )}
      <View>
        <InputWithAdornments
          value={water}
          onChange={onHandlewater}
          onIncrement={waterplus}
          onDecrement={waterminus}
          borderColor={"#990000"}
          label="Water"
        />
        <InputWithAdornments
          value={salt}
          onChange={onHandlesalt}
          onIncrement={saltplus}
          onDecrement={saltminus}
          borderColor={"#990000"}
          label="Salt"
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
          label="RT leavening"
          viewWidth={150}
          name="pencil"
        />
        <InputWithAdornments
          value={temp}
          onChange={YeastNeeded2}
          onIncrement={tempplus}
          onDecrement={tempminus}
          borderColor={"#990000"}
          label="RT C"
          viewWidth={150}
          name="pencil"
        />
        <Spacer height={20} />
      </View>
      {autolysis ? (
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
            value={autolysisflour}
            onChange={onHandleautolysisflour}
            onIncrement={autolysisflourplus}
            onDecrement={autolysisflourminus}
            borderColor={"#990000"}
            label="Autolysis flour"
            viewWidth={150}
            name="pencil"
          />
          <InputWithAdornments
            value={autolysiswater}
            onChange={onHandleautolysiswater}
            onIncrement={autolysiswaterplus}
            onDecrement={autolysiswaterminus}
            borderColor={"#990000"}
            label="Autolysis water "
            viewWidth={150}
            name="pencil"
          />
        </View>
      ) : null}

      {OldDoughIn ? (
        <>
          <Spacer height={20} />
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
              value={OldDoughIn}
              onChange={onHandleolddoughin}
              onIncrement={olddoughinplus}
              onDecrement={olddoughinminus}
              borderColor={"#990000"}
              label="Old Dough in"
              viewWidth={150}
              name="pencil"
            />
            <InputWithAdornments
              value={OlddoughOut}
              onChange={onHandleolddoughout}
              onIncrement={olddoughoutplus}
              onDecrement={olddoughoutminus}
              borderColor={"#990000"}
              label="Old Dough out"
              viewWidth={150}
              name="pencil"
            />
          </View>

          <Spacer height={40} />
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
          <Text>Autolysis doses {result.autolysisdose.toFixed(2)}</Text>
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
              <Text>Flour : {result.autolysisflourmass.toFixed(2)}</Text>
            </View>
            <Spacer width={30} />
            <View
              style={{
                backgroundColor: "#990000",
                padding: 30,
                borderRadius: 25,
              }}
            >
              <Text>Water : {result.autolysiswatermass.toFixed(2)}</Text>
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
                <Text>Flour</Text>
                <Text>Value</Text>
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
              <Text>Water</Text>
              <Text>Value</Text>
            </View>
            <Spacer width={30} />
            <View
              style={{
                backgroundColor: "#990000",
                padding: 30,
                borderRadius: 25,
              }}
            >
              <Text>Water</Text>
              <Text>Value</Text>
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
              {isNaN(result.flour1mass) ? "" : result.flour1mass.toFixed(2)}
            </Text>

            {flour2 ? (
              <Text
                style={{
                  color: "white",
                }}
              >
                Flour2 :{" "}
                {isNaN(result.flour2mass) ? "" : result.flour2mass.toFixed(2)}
              </Text>
            ) : null}
            {flour3 ? (
              <Text
                style={{
                  color: "white",
                }}
              >
                Flour3 :{" "}
                {isNaN(result.flour3mass) ? "" : result.flour3mass.toFixed(2)}
              </Text>
            ) : null}

            {flour4 ? (
              <Text
                style={{
                  color: "white",
                }}
              >
                Flour4 :{" "}
                {isNaN(result.flour4mass) ? "" : result.flour4mass.toFixed(2)}
              </Text>
            ) : null}
            {flour5 ? (
              <Text
                style={{
                  color: "white",
                }}
              >
                Flour5 :{" "}
                {isNaN(result.flour5mass) ? "" : result.flour5mass.toFixed(2)}
              </Text>
            ) : null}
            {flour6 ? (
              <Text
                style={{
                  color: "white",
                }}
              >
                Flour6 :{" "}
                {isNaN(result.flour6mass) ? "" : result.flour6mass.toFixed(2)}
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
              {isNaN(result.waterWeight) ? "" : result.waterWeight.toFixed(2)}
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
              {isNaN(result.saltWeight) ? "" : result.saltWeight.toFixed(2)}
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
              {isNaN(result.yeastWeight) ? "" : result.yeastWeight.toFixed(2)}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Inputs;
