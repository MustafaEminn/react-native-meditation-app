import { useFonts } from "expo-font";
import React from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Loading from "../pages/Loading";

const ButtonC = ({ bColor, tColor, tContent, mt, onPress }: any) => {
  let [fontsLoaded] = useFonts({
    Roboto400: require("../assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <Loading />;
  } else {
    return (
      <React.Fragment>
        <TouchableOpacity
          style={{
            backgroundColor: bColor,
            width: wp("88.9%"),
            height: hp("7.4%"),
            borderRadius: hp("4.3%"),
            justifyContent: "center",
            alignItems: "center",
            marginTop: mt,
          }}
          onPress={onPress}
          activeOpacity={0.9}
        >
          <Text
            style={{
              fontSize: wp("3.8%"),
              fontFamily: "Roboto400",
              color: tColor,
            }}
          >
            {tContent}
          </Text>
        </TouchableOpacity>
        <Text></Text>
      </React.Fragment>
    );
  }
};

export default ButtonC;
