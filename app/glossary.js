//import liraries
import React, { Component, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Spacer } from "../components/spacer";
import { ScrollView } from "react-native";
import Stackscreen from "../components/stackscreen";
import MenuList from "../components/menulist";
import { useRouter } from "expo-router";
// create a component
const Glossary = () => {
  const router= useRouter()
  const [visible, setVisible] = useState(false);
  const onPress = () => setVisible((prev) => !prev);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",

        backgroundColor: "#F5FCFF",
        padding: 10,
        marginTop: 10,
      }}
    >
      <Stackscreen onPress={()=>router.push('/')}  Glossary="Glossary" icon="home"/>
      <ScrollView>
        <Text style={{ fontSize: 20, color: "black", marginTop: 20 , marginBottom:20 }}>
          CY = Compressed Yeast, a fresh form of yeast made of Saccharomyces
          Cerevisiae fungi (from cerevisia, Latin word for beer).
        </Text>
        <Spacer borderwidth={1} width="100%" borderColor="black" />

        <Text style={{ fontSize: 20, color: "black", marginTop: 20 , marginBottom:20 }}>
          ADY = Active Dry Yeast, a dried form of yeast made of Saccharomyces
          Cerevisiae fungi (from cerevisia, latin word for beer) that requires
          activation in warm water.
        </Text>

        <Spacer borderwidth={1} width="100%" borderColor="black" />
        <Text style={{ fontSize: 20, color: "black", marginTop: 20 , marginBottom:20 }}>
          IDY = Instant Dry Yeast, a dried form of yeast made of Saccharomyces
          Cerevisia fungi (from Latin word for beer).
        </Text>
        <Spacer borderwidth={1} width="100%" borderColor="black" />
        <Text style={{ fontSize: 20, color: "black", marginTop: 20 , marginBottom:20 }}>
          {" "}
          LSD = Liquid SourDough, a form of sourdough 100% hydrated.
        </Text>
        <Spacer borderwidth={1} width="100%" borderColor="black" />
        <Text style={{ fontSize: 20, color: "black", marginTop: 20 , marginBottom:20 }}>
          FSD = Firm SourDough, a form of sourdough 50% hydrated.
        </Text>
        <Spacer borderwidth={1} width="100%" borderColor="black" />
        <Text style={{ fontSize: 20, color: "black", marginTop: 20 , marginBottom:20 }}>
          OD = Old Dough, a portion of day(s) before dough.
        </Text>

        <Spacer borderwidth={1} width="100%" borderColor="black" />

        <Text style={{ fontSize: 20, color: "black", marginTop: 20 , marginBottom:20 }}>
          Poolish = liquid pre-ferment, with a flour to water ratio of 1:1 and
          little yeast, left to ferment at 18- 20°C. It's known to increase
          dough extensibility and it's mainly used by French bakers to make
          baguettes. Over 12 hours requires a flour with W is greater than 300.
        </Text>
        <Spacer borderwidth={1} width="100%" borderColor="black" />
        <Text style={{ fontSize: 20, color: "black", marginTop: 20 , marginBottom:20 }}>
          Biga = solid pre-ferment, with a flour:water ratio of 1:0.45 and 1% of
          fresh yeast, left to ferment for 24h at 18°C or 48h at 13-14°c (or
          even 36h at 4°C and 12h at 18°C). It is mainly used by Italian bakers
          to give greater fragrance, crunchiness, preservability and
          digestibility Requires a flour with W is greater than 350.
        </Text>
        <Spacer borderwidth={1} width="100%" borderColor="black" />

        <Text style={{ fontSize: 20, color: "black", marginTop: 20 , marginBottom:20 }}>
          Autolysis Yeast-free pre-ferment, it is usually used to increase water
          absorption and reduce final processing times. If left fermenting more
          than 5-6 hours, it is advisable to add a part of the salt from the
          main dough.
        </Text>
        <Text style={{ fontSize: 20, color: "black", marginTop: 20 , marginBottom:20 }}>
          RT = Room Temperature.
        </Text>
        <Spacer borderwidth={1} width="100%" borderColor="black" />
        <Text style={{ fontSize: 20, color: "black", marginTop: 20 , marginBottom:20 }}>
          {" "}
          CT = Controlled Temperature, e.g. fridge.
        </Text>
        <Spacer borderwidth={1} width="100%" borderColor="black" />

        <Text style={{ fontSize: 20, color: "black", marginTop: 20 , marginBottom:20 }}>
          Pan Pizza Roman style pan pizza, highly hydrated dough (~80%), with
          three separate fermentation stages: 1-2 hrs at RT followed by 24- 72
          hrs at CT (4°C) and finally by 3-4 hrs at RT, baked in rectangular
          sheet pans at 300°C for 10-15 minutes.
        </Text>
        <Spacer borderwidth={1} width="100%" borderColor="black" />

        <Spacer borderwidth={1} width="100%" borderColor="black" />
        <Text style={{ fontSize: 20, color: "black", marginTop: 20 , marginBottom:20 }}>
          Neapolitan Neapolitan style pizza, medium hydrated dough (~60%) with a
          single stage rising process at RT, pie formed by hand: 4 mm thick in
          the center and 1-2 cm at the border, baked in a wood-fired stone oven
          at 485°C for 60-90 seconds.
        </Text>
        <Spacer borderwidth={1} width="100%" borderColor="black" />

        <Text style={{ fontSize: 20, color: "black", marginTop: 20 , marginBottom:20 }}>
          W = Flour strength, a medium strong flour W~ 260 is ideal for
          Neapolitan style pizza while a strong flour W~ 350 is ideal for Roman
          style pan pizza.
        </Text>

        <Spacer borderwidth={1} width="100%" borderColor="black" />
      </ScrollView>
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

export default Glossary;
