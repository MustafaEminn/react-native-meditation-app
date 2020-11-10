import React from "react";
import { View, Text } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import GoogleG from "../assets/images/GoogleG";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { colors } from "../styles/globalStyles";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import Loading from "../pages/Loading";

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
          backgroundColor: colors.whiteFFF,
          alignItems: "center",
          borderWidth: 1,
          borderColor: colors.grayEBE,
          marginTop: hp("3.3%"),
        }}
        onPress={() => {
          navigation.navigate("Relax");
        }}
      >
        <View style={{ marginLeft: wp("6.8%") }}>
          <GoogleG width={hp("4%")} height={wp("6.5%")} />
        </View>
        <Text
          style={{
            marginLeft: wp("7.77%"),
            fontFamily: "Roboto400",
            letterSpacing: 0.2,
          }}
        >
          CONTINUE WITH GOOGLE
        </Text>
      </TouchableWithoutFeedback>
    );
  }
};

export default ContinueGoogleButton;
