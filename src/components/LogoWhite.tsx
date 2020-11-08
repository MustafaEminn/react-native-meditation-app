import React from "react";
import { View, Text } from "react-native";
import { useFonts } from "expo-font";
import { colors } from "../styles/globalStyles";
import EggWhite from "../assets/images/EggWhite";

const LogoNormal = ({ positionContainer, mt, mb }: any) => {
  let [fontsLoaded] = useFonts({
    Cereal700: require("../assets/fonts/AirbnbCerealBold.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Loading</Text>;
  } else {
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          position: positionContainer,
          elevation: 1,
          marginTop: mt,
          marginBottom: mb,
        }}
      >
        <Text
          style={{
            fontFamily: "Cereal700",
            letterSpacing: 3.5,
            marginRight: 5,
            color: colors.whiteFFF,
          }}
        >
          Silent
        </Text>
        <EggWhite />
        <Text
          style={{
            fontFamily: "Cereal700",
            letterSpacing: 3.5,
            marginLeft: 5,
            color: colors.whiteFFF,
          }}
        >
          Moon
        </Text>
      </View>
    );
  }
};

export default LogoNormal;
