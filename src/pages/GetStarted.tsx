import React from "react";
import { Dimensions, Image, PixelRatio, Text, View } from "react-native";
import LogoNormal from "../components/LogoNormal";
import Constants from "expo-constants";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useFonts } from "expo-font";
import { colors } from "../styles/globalStyles";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Loading from "./Loading";
import Button from "../components/ButtonC";

const GetStarted = ({ navigation }: any) => {
  const barHeight = Constants.statusBarHeight;

  React.useEffect(() => {
    console.log(hp("1%"), wp("1%"));
  }, []);

  let [fontsLoaded] = useFonts({
    Roboto700: require("../assets/fonts/Roboto-Bold.ttf"),
    Roboto400: require("../assets/fonts/Roboto-Regular.ttf"),
    Roboto300: require("../assets/fonts/Roboto-Light.ttf"),
  });

  if (!fontsLoaded) {
    return <Loading />;
  } else {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ marginTop: barHeight, alignItems: "center" }}>
          <LogoNormal positionContainer="absolute" mt={hp("8.3%")} />
          <Image
            resizeMode="stretch"
            style={{
              width: "100%",
              height: hp("55%"),
              alignSelf: "flex-start",
            }}
            source={require("../assets/images/group.png")}
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontFamily: "Roboto700",
              fontSize: wp("8.1%"),
              color: colors.black3F4,
              marginTop: hp("2%"),
            }}
          >
            We are what we do
          </Text>
          <Text
            style={{
              marginTop: hp("2.5%"),
              fontSize: wp("4.3%"),
              fontFamily: "Roboto300",
              color: colors.grayA1A,
              textAlign: "center",
            }}
          >
            Thousand of people are usign silent moon{"\n"}
            for smalls meditation
          </Text>
          <Button
            bColor={colors.blue8E9}
            tColor={colors.whiteF6F}
            navigating={"Loading"}
            tContent={"SIGN UP"}
            mt={hp("9%")}
            onPress={() => {
              navigation.navigate("Login");
            }}
          />
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => navigation.navigate("Login")}
          >
            <Text
              style={{
                letterSpacing: 0.25,
                color: colors.grayA1A,
                fontSize: wp("3.8%"),
              }}
            >
              ALREADY HAVE AN ACCOUNT? LOG IN
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};

export default GetStarted;
