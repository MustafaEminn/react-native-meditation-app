import React from "react";
import { View, Text } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { colors } from "../styles/globalStyles";
import { useFonts } from "expo-font";
import FacebookF from "../assets/images/FacebookF";
import Loading from "../pages/Loading";
import { useNavigation } from "@react-navigation/native";

const ContinueGoogleButton = () => {
  let [fontsLoaded] = useFonts({
    Roboto400: require("../assets/fonts/Roboto-Regular.ttf"),
  });

  const navigation = useNavigation();

  if (!fontsLoaded) {
    return <Loading />;
  } else {
    return (
      <TouchableWithoutFeedback
        style={{
          alignSelf: "center",
          flexDirection: "row",
          width: wp("88.9%"),
          height: hp("7.4%"),
          borderRadius: hp("4.3%"),
          backgroundColor: colors.blue758,
          alignItems: "center",
          marginTop: hp("5.5%"),
        }}
        onPress={() => {
          navigation.navigate("Relax");
        }}
      >
        <View style={{ marginLeft: wp("8.6%") }}>
          <FacebookF width={wp("3.2%")} height={hp("4%")} />
        </View>
        <Text
          style={{
            marginLeft: wp("9.77%"),
            fontFamily: "Roboto400",
            letterSpacing: 0.2,
            color: colors.whiteF6F,
          }}
        >
          CONTINUE WITH FACEBOOK
        </Text>
      </TouchableWithoutFeedback>
    );
  }
};

export default ContinueGoogleButton;
