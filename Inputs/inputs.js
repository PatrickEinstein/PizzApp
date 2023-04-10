import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import EachInput from "./inputscomponents";
import { Spacer } from "../components/spacer";
import { Divider, IconButton, List } from "react-native-paper";
import StyledIconButton from "../components/stylediconButton";
import HDivider from "../components/Divider";
import { useSelector } from "react-redux";



const Inputs = () => {
const onOff = useSelector( ( state) => state.recipe)


const twoballsize = onOff.twoballsize
const fats = onOff.fats
const ct = onOff.ct
const oldDoughIn = onOff.olddougnin
const olddoughout = onOff.olddoughout
const autolysis = onOff.autolysis
const biga = onOff.biga
const poolish = onOff.poolish
const displayOn = onOff.displayon

  const [value, setValue] = useState("0");
  const [value2, setValue2] = useState("0");

  const handleIncrement = () => {
    const newValue = parseInt(value) + 1;
    setValue(newValue.toString());
  };

  const handleDecrement = () => {
    if (value != 0) {
      const newValue = parseInt(value) - 1;
      setValue(newValue.toString());
    }
    return;
  };

  const handleChange = (newValue) => {
    setValue(newValue);
  };

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
          value={value}
          onChange={handleChange}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          borderColor={"aqua"}
          label="Dough Balls"
          viewWidth={150}
        />
        <EachInput
          value={value2}
          onChange={handleChange}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          borderColor={"aqua"}
          label="Ball Weight"
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
          value={value}
          onChange={handleChange}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          borderColor={"aqua"}
          label="Dough Balls"
          viewWidth={150}
        />
        <EachInput
          value={value2}
          onChange={handleChange}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
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
          value={value}
          onChange={handleChange}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          borderColor={"aqua"}
          label="Flour 1"
          viewWidth={150}
          name="pencil"
        />

        <EachInput
          value={value2}
          onChange={handleChange}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
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
          value={value}
          onChange={handleChange}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          borderColor={"aqua"}
          label="Flour 3"
          viewWidth={150}
          name="pencil"
        />
        <EachInput
          value={value2}
          onChange={handleChange}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
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
          value={value}
          onChange={handleChange}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          borderColor={"aqua"}
          label="Flour 5"
          viewWidth={150}
          name="pencil"
        />
        <EachInput
          value={value2}
          onChange={handleChange}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          borderColor={"aqua"}
          label="Flour 6"
          viewWidth={150}
          name="pencil"
        />
      </View>
      <View>
        <EachInput
          value={value2}
          onChange={handleChange}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          borderColor={"aqua"}
          label="Water"
        />
        <EachInput
          value={value2}
          onChange={handleChange}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
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
          value={value}
          onChange={handleChange}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          borderColor={"aqua"}
          label="RT leavening"
          viewWidth={150}
          name="pencil"
        />
        <EachInput
          value={value2}
          onChange={handleChange}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          borderColor={"aqua"}
          label="RT C"
          viewWidth={150}
          name="pencil"
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
          value={value}
          onChange={handleChange}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          borderColor={"aqua"}
          label="Autolysis flour"
          viewWidth={150}
          name="pencil"
        />
        <EachInput
          value={value2}
          onChange={handleChange}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          borderColor={"aqua"}
          label="Autolysis water "
          viewWidth={150}
          name="pencil"
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
          value={value}
          onChange={handleChange}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          borderColor={"aqua"}
          label="Old Dough in"
          viewWidth={150}
          name="pencil"
        />
        <EachInput
          value={value}
          onChange={handleChange}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          borderColor={"aqua"}
          label="Will replace"
          viewWidth={150}
          name="pencil"
        />
      </View>
      <EachInput
        value={value}
        onChange={handleChange}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
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
            //   onPress={handleIncrement}

            helperText="Max value reached"
            style={{ marginBottom: 20 }}
          />
          <StyledIconButton
            label="ADY"
            //   onPress={handleIncrement}

            helperText="Max value reached"
            style={{ marginBottom: 20 }}
          />
          <StyledIconButton
            label="IDY"
            //   onPress={handleIncrement}

            helperText="Max value reached"
            style={{ marginBottom: 20 }}
          />
          <StyledIconButton
            label="FSD"
            //   onPress={handleIncrement}

            helperText="Max value reached"
            style={{ marginBottom: 20 }}
          />
          <StyledIconButton
            label="LSD"
            //   onPress={handleIncrement}

            helperText="Max value reached"
            style={{ marginBottom: 20 }}
          />
        </View>
      </View>
      <HDivider />
      <View
        style={{
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text>Autolysis doses 'value'</Text>
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
            <Text>Flour : value</Text>
          </View>
          <Spacer width={30} />
          <View
            style={{ backgroundColor: "aqua", padding: 30, borderRadius: 25 }}
          >
            <Text>Water : value</Text>
          </View>
        </View>
      </View>
      <Spacer height={20} />
      <HDivider />
      <View
        style={{
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
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
      <Spacer height={20} />
      <HDivider />
      <View
        style={{
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Text>Main dough doses</Text>
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
            <Text>Flour : value</Text>
          </View>
          <Spacer width={30} />
          <View
            style={{ backgroundColor: "aqua", padding: 30, borderRadius: 25 }}
          >
            <Text>Water: value</Text>
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
            <Text>Flour : value</Text>
          </View>
          <Spacer width={30} />
          <View
            style={{ backgroundColor: "aqua", padding: 30, borderRadius: 25 }}
          >
            <Text>Water: value</Text>
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
            <Text>Flour : value</Text>
          </View>
          <Spacer width={30} />
          <View
            style={{ backgroundColor: "aqua", padding: 30, borderRadius: 25 }}
          >
            <Text>Water: value</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Inputs;
