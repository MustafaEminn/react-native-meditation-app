import React from "react";
import { View, Image, Text } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { colors } from "../styles/globalStyles";
import LogoWhite from "../components/LogoWhite";
import Constants from "expo-constants";
import { useFonts } from "expo-font";
import Loading from "./Loading";
import ButtonC from "../components/ButtonC";
import { StatusBar } from "expo-status-bar";

const AfterGetStarted = ({ navigation }: any) => {
  let [fontsLoaded] = useFonts({
    Roboto100: require("../assets/fonts/Roboto-Thin.ttf"),
    Roboto300: require("../assets/fonts/Roboto-Light.ttf"),
    Roboto400: require("../assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <Loading />;
  } else {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: colors.blue8C9,
          marginTop: Constants.statusBarHeight,
        }}
      >
        <View
          style={{
            alignSelf: "center",
            position: "relative",
            marginTop: hp("6.3%"),
          }}
        >
          <LogoWhite positionContainer={"relative"} />
        </View>

        <Text
          style={{
            alignSelf: "center",
            textAlign: "center",
            fontFamily: "Roboto400",
            letterSpacing: 0.5,
            lineHeight: hp("6.8%"),
            color: colors.whiteF6F,
            marginTop: hp("5.5%"),
            fontSize: wp("8.1%"),
          }}
        >
          Hi Visitor, Welcome
          <Text style={{ fontFamily: "Roboto100" }}>{"\n"}to Silent Moon</Text>
        </Text>

        <Text
          style={{
            fontFamily: "Roboto300",
            textAlign: "center",
            color: colors.grayEBE,
            lineHeight: hp("4%"),
            marginTop: hp("2.5%"),
          }}
        >
          Explore the app, Find some peace of mind to{"\n"}prepare for
          meditation.
        </Text>

        <View style={{ position: "absolute", bottom: 0, width: wp("100%") }}>
          <Image
            resizeMode="cover"
            style={{
              maxWidth: wp("100%"),
              maxHeight: hp("65%"),
              bottom: hp("-10%"),
              position: "absolute",
            }}
            source={require("../assets/images/Loading.png")}
          />
          <ButtonC
            bColor={colors.grayEBE}
            tColor={colors.black3F4}
            tContent={"GET STARTED"}
            onPress={() => navigation.navigate("ChooseTopic")}
          />
        </View>
        <StatusBar backgroundColor={colors.blue8C9} style="light" />
      </View>
    );
  }
};

export default AfterGetStarted;
