import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import EachInput from "./inputscomponents";
import { Spacer } from "../components/spacer";
import { Divider, IconButton, List } from "react-native-paper";
import StyledIconButton from "../components/stylediconButton";
import HDivider from "../components/Divider";
import { useSelector } from "react-redux";
import { calculateDoughIngredients } from "../config/neapolitan";

const Inputs = () => {
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

  
  const [Doughball1, setDoughball1] = useState(0);
  const [Doughball2, setDoughball2] = useState(0);
  const [BallWeight1, setBallWeight1] = useState(0);
  const [BallWeight2, setBallWeight2] = useState(0);
  const [flour1, setflour1] = useState(0);
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
  const [Fats, setfats] = useState(0);
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


  const onHandlefat = (newValue) => {
    setfats(newValue);
  };
  const fatplus = () => {
    const newValue = +Fats + 1;
    setfats(newValue);
  };

  const fatminus = () => {
    if (fats != 0) {
      const newValue = +Fats - 1;
      setfats(newValue);
    }
    return;
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
    const newValue = +Doughball1 + 5;
    setDoughball1(newValue);
  };

  const Doughball1minus = () => {
    if (Doughball1 != 0) {
      const newValue = +Doughball1 - 5;
      setDoughball1(newValue);
    }
    return;
  };

  const onHandleDoughball1 = (newValue) => {
    setDoughball1(newValue);
  };

  const Doughball2plus = () => {
    const newValue = +Doughball2 + 5;
    setDoughball2(newValue);
  };

  const Doughball2minus = () => {
    if (Doughball2 != 0) {
      const newValue = +Doughball2 - 5;
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

  const onHandleflour2 = (newValue) => {
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
    const newValue = +OldDoughIn + 5;
    setolddoughin(newValue);
  };

  const olddoughinminus = () => {
    if (OldDoughIn != 0) {
      const newValue = +OldDoughIn - 5;
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
    setyeastfactor(+0.2);
    // setyeastfactor(+0.005);
    // sethydrationfactor(+0.5);
    // settimefactor(+2);
    // settemp(+2);
  };
  const ADYplus = () => {
    setyeastfactor(+0.14);
    // setyeastfactor(+0.003);
    // sethydrationfactor(+0.4);
    // settimefactor(+1.5);
    // settemp(+1);
  };
  const IDYplus = () => {
    setyeastfactor(+0.1);
    // setyeastfactor(+0.002);
    // sethydrationfactor(+0.4);
    // settimefactor(+1);
    // settemp(+0.5);
  };
  const FSDplus = () => {
    setyeastfactor(+0.8);
    // setyeastfactor(+0.15);

    // settimefactor(+3);
  };
  const LSDplus = () => {
    setyeastfactor(+0.9);
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
    autolysiswater,
    Fats
  );
  //   console.log(result);
  return (
    <View
      style={{
        justifyContent: "space-between",
        marginBottom: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 20,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <EachInput
          value={Doughball1}
          onChange={onHandleDoughball1}
          onIncrement={Doughball1plus}
          onDecrement={Doughball1minus}
          borderColor={"aqua"}
          label="Dough Balls "
          viewWidth={150}
        />
        <EachInput
          value={BallWeight1}
          onChange={onHandleBallweight1}
          onIncrement={BallWeight1plus}
          onDecrement={BallWeight1minus}
          borderColor={"aqua"}
          label="Ball Weight (g)"
          viewWidth={150}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 20,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <EachInput
          value={Doughball2}
          onChange={onHandleDoughball2}
          onIncrement={Doughball2plus}
          onDecrement={Doughball2minus}
          borderColor={"aqua"}
          label="Dough Balls"
          viewWidth={150}
        />
        <EachInput
          value={BallWeight2}
          onChange={onHandleBallweight2}
          onIncrement={BallWeight2plus}
          onDecrement={BallWeight2minus}
          borderColor={"aqua"}
          label="Ball Weight"
          viewWidth={150}
        />
      </View>
      <Spacer height={20} />
      <Text>Flours : % sum is not 100% </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 20,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <EachInput
          value={flour1}
          onChange={onHandleflour1}
          onIncrement={flour1plus}
          onDecrement={flour1minus}
          borderColor={"aqua"}
          label="Flour 1"
          viewWidth={150}
          name="pencil"
        />

        <EachInput
          value={flour2}
          onChange={onHandleflour2}
          onIncrement={flour2plus}
          onDecrement={flour2minus}
          borderColor={"aqua"}
          label="Flour 2"
          viewWidth={150}
          name="pencil"
        />
      </View>
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
        <EachInput
          value={flour3}
          onChange={onHandleflour3}
          onIncrement={flour3plus}
          onDecrement={flour3minus}
          borderColor={"aqua"}
          label="Flour 3"
          viewWidth={150}
          name="pencil"
        />
        <EachInput
          value={flour4}
          onChange={onHandleflour4}
          onIncrement={flour4plus}
          onDecrement={flour4minus}
          borderColor={"aqua"}
          label="Flour 4"
          viewWidth={150}
          name="pencil"
        />
      </View>
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
        <EachInput
          value={flour5}
          onChange={onHandleflour5}
          onIncrement={flour5plus}
          onDecrement={flour5minus}
          borderColor={"aqua"}
          label="Flour 5"
          viewWidth={150}
          name="pencil"
        />
        <EachInput
          value={flour6}
          onChange={onHandleflour6}
          onIncrement={flour6plus}
          onDecrement={flour6minus}
          borderColor={"aqua"}
          label="Flour 6"
          viewWidth={150}
          name="pencil"
        />
      </View>
      <View>
        <EachInput
          value={water}
          onChange={onHandlewater}
          onIncrement={waterplus}
          onDecrement={waterminus}
          borderColor={"aqua"}
          label="Water"
        />
        <EachInput
          value={Fats}
          onChange={onHandlefat}
          onIncrement={fatplus}
          onDecrement={fatminus}
          borderColor={"aqua"}
          label="fats"
        />
        <EachInput
          value={salt}
          onChange={onHandlesalt}
          onIncrement={saltplus}
          onDecrement={saltminus}
          borderColor={"aqua"}
          label="Salt"
        />
      </View>
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
        <EachInput
          value={leaven}
          onChange={YeastNeeded1}
          onIncrement={leavenplus}
          onDecrement={leavenminus}
          borderColor={"aqua"}
          label="RT leavening"
          viewWidth={150}
          name="pencil"
        />
        <EachInput
          value={temp}
          onChange={YeastNeeded2}
          onIncrement={tempplus}
          onDecrement={tempminus}
          borderColor={"aqua"}
          label="RT C"
          viewWidth={150}
          name="pencil"
        />
      </View>
      <Spacer height={20} />
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
          
          <Spacer height={20} />
          <EachInput
            value={autolysisflour}
            onChange={onHandleautolysisflour}
            onIncrement={autolysisflourplus}
            onDecrement={autolysisflourminus}
            borderColor={"aqua"}
            label="Autolysis flour"
            viewWidth={150}
            name="pencil"
          />
          <EachInput
            value={autolysiswater}
            onChange={onHandleautolysiswater}
            onIncrement={autolysiswaterplus}
            onDecrement={autolysiswaterminus}
            borderColor={"aqua"}
            label="Autolysis water "
            viewWidth={150}
            name="pencil"
          />
        </View>
      ) : (
        <Text>...</Text>
      )}

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
        <EachInput
          value={OldDoughIn}
          onChange={onHandleolddoughin}
          onIncrement={olddoughinplus}
          onDecrement={olddoughinminus}
          borderColor={"aqua"}
          label="Old Dough in"
          viewWidth={150}
          name="pencil"
        />
        {/* <EachInput
          value={}
          // onChange={handleChange}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          borderColor={"aqua"}
          label="Will replace"
          viewWidth={150}
          name="pencil"
        /> */}
      </View>
      <EachInput
        value={OlddoughOut}
        onChange={onHandleolddoughout}
        onIncrement={olddoughoutplus}
        onDecrement={olddoughoutminus}
        borderColor={"aqua"}
        label="Old Dough out"
        viewWidth={150}
        name="pencil"
      />
      <Spacer height={40} />

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
            onPress={CYplus}
            helperText="Max value reached"
            style={{ marginBottom: 20 }}
          />
          <StyledIconButton
            label="ADY"
            onPress={ADYplus}
            helperText="Max value reached"
            style={{ marginBottom: 20 }}
          />
          <StyledIconButton
            label="IDY"
            onPress={IDYplus}
            helperText="Max value reached"
            style={{ marginBottom: 20 }}
          />
          <StyledIconButton
            label="FSD"
            onPress={FSDplus}
            helperText="Max value reached"
            style={{ marginBottom: 20 }}
          />
          <StyledIconButton
            label="LSD"
            onPress={LSDplus}
            helperText="Max value reached"
            style={{ marginBottom: 20 }}
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
              style={{ backgroundColor: "aqua", padding: 30, borderRadius: 25 }}
            >
              <Text>Flour : {result?.autolysisflourmass.toFixed(2)}</Text>
            </View>
            <Spacer width={30} />
            <View
              style={{ backgroundColor: "aqua", padding: 30, borderRadius: 25 }}
            >
              <Text>Water : {result?.autolysiswatermass.toFixed(2)}</Text>
            </View>
          </View>
        </View>
      ) : (
        <Text>...</Text>
      )}
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
              style={{ backgroundColor: "aqua", padding: 30, borderRadius: 25 }}
            >
              <View>
                <Text>Flour</Text>
                <Text>Value</Text>
              </View>
            </View>
            <Spacer width={30} />
            <View
              style={{ backgroundColor: "aqua", padding: 30, borderRadius: 25 }}
            >
              <Text>Water</Text>
              <Text>Value</Text>
            </View>
            <Spacer width={30} />
            <View
              style={{ backgroundColor: "aqua", padding: 30, borderRadius: 25 }}
            >
              <Text>Water</Text>
              <Text>Value</Text>
            </View>
          </View>
        </View>
      ) : (
        <Text>...</Text>
      )}
      <Spacer height={20} />
      <HDivider />
      <View
        style={{
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Text>Main dough doses {result?.maindoughdose.toFixed(2)}</Text>
        <Spacer height={20} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{ backgroundColor: "aqua", padding: 30, borderRadius: 25 }}
          >
            <Text>Flour1 : {result?.flour1mass.toFixed(2)}</Text>
          </View>
          <Spacer width={30} />
          <View
            style={{ backgroundColor: "aqua", padding: 30, borderRadius: 25 }}
          >
            <Text>Flour2:{result?.flour2mass.toFixed(2)}</Text>
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
            style={{ backgroundColor: "aqua", padding: 30, borderRadius: 25 }}
          >
            <Text>Flour 3: {result?.flour3mass.toFixed(2)}</Text>
          </View>
          <Spacer width={30} />
          <View
            style={{ backgroundColor: "aqua", padding: 30, borderRadius: 25 }}
          >
            <Text>Flour4: {result?.flour4mass.toFixed(2)}</Text>
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
            style={{ backgroundColor: "aqua", padding: 30, borderRadius: 25 }}
          >
            <Text>Flour5: {result?.flour5mass.toFixed(2)}</Text>
          </View>
          <Spacer width={30} />
          <View
            style={{ backgroundColor: "aqua", padding: 30, borderRadius: 25 }}
          >
            <Text>Flour6: {result?.flour6mass.toFixed(2)}</Text>
          </View>
        </View>
        <Spacer height={40} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <View>
          <View
            style={{ backgroundColor: "aqua", padding: 30, borderRadius: 25 }}
          >
            <Text>Water: {result?.waterWeight.toFixed(2)}</Text>
          </View>
          <Spacer width={40} />
          <Spacer height={30}/>
          <View
            style={{ backgroundColor: "aqua", padding: 30, borderRadius: 25 }}
          >
            <Text>Salt: {result?.saltWeight.toFixed(2)}</Text>
          </View>
          </View>
          <Spacer width={40} />
          <View>
          <Spacer width={40} />
          <View
            style={{ backgroundColor: "aqua", padding: 30, borderRadius: 25 }}
          >
            <Text>yeast: {result?.yeastWeight.toFixed(2)}</Text>
          </View>
          <Spacer height={30}/>
          <View
            style={{ backgroundColor: "aqua", padding: 30, borderRadius: 25 }}
          >
            <Text>fat:  {result?.fats.toFixed(2)}</Text>
          </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Inputs;
