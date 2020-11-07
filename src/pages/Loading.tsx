import React from "react";
import { View, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { colors } from "../styles/globalStyles";

const Loading = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.blue8C9,
      }}
    >
      <Image
        resizeMode="cover"
        style={{
          maxWidth: wp("100%"),
          maxHeight: hp("65%"),
          bottom: 0,
          position: "absolute",
        }}
        source={require("../assets/images/Loading.png")}
      />
    </View>
  );
};

export default Loading;
