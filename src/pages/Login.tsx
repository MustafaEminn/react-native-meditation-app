import React from "react";
import { View, Text, Keyboard, Animated, Easing } from "react-native";
import InBack from "../assets/images/inBack";
import { colors } from "../styles/globalStyles";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import LeftArrow from "../assets/images/LeftArrow";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import {
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { useFonts } from "expo-font";
import Loading from "./Loading";
import ContinueGoogleButton from "../components/ContinueGoogleButton";
import ContinueFacebookButton from "../components/ContinueFacebookButton";
import ButtonC from "../components/ButtonC";

const SignUp = ({ navigation }: any) => {
  let [fontsLoaded] = useFonts({
    Roboto700: require("../assets/fonts/Roboto-Bold.ttf"),
    Roboto400: require("../assets/fonts/Roboto-Regular.ttf"),
    Roboto300: require("../assets/fonts/Roboto-Light.ttf"),
  });

  const [keyboard, setKeyboard]: any = React.useState(false);

  React.useEffect(() => {
    Keyboard.addListener("keyboardDidShow", keyboardHandlerOpen);
    Keyboard.addListener("keyboardDidHide", keyboardHandlerClose);
    return () => {
      Keyboard.removeListener("keyboardDidShow", keyboardHandlerOpen);
      Keyboard.removeListener("keyboardDidHide", keyboardHandlerClose);
    };
  }, []);

  const y: any = React.useRef(new Animated.Value(0)).current;

  const keyboardHandlerOpen = () => {
    setKeyboard(true);
    Animated.timing(y, {
      toValue: hp("-5%"),
      duration: 100,
      useNativeDriver: true,
    }).start();
  };
  const keyboardHandlerClose = () => {
    setKeyboard(false);
    Animated.timing(y, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  if (!fontsLoaded) {
    return <Loading />;
  } else {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: colors.whiteFFF,
          marginTop: Constants.statusBarHeight,
          position: "relative",
        }}
      >
        <View
          style={{
            position: "absolute",
            alignSelf: "center",
            top: 0,
            elevation: -1,
          }}
        >
          <InBack />
        </View>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate("GetStarted");
          }}
          style={{
            backgroundColor: colors.whiteFFF,
            height: hp("9.16%"),
            maxWidth: wp("15.2%"),
            justifyContent: "center",
            alignItems: "center",
            borderRadius: wp("15.2%"),
            borderWidth: 1,
            borderColor: colors.grayEBE,
            marginTop: hp("2.3%"),
            marginLeft: wp("2.8%"),
            elevation: 1,
          }}
        >
          <LeftArrow width={wp("5.20%")} height={hp("3%")} />
        </TouchableWithoutFeedback>
        <Text
          style={{
            alignSelf: "center",
            fontFamily: "Roboto700",
            fontSize: wp("7.6%"),
            color: colors.black3F4,
          }}
        >
          Welcome Back!
        </Text>
        <View style={{ display: keyboard ? "none" : "flex" }}>
          <ContinueFacebookButton />
          <ContinueGoogleButton />

          <Text
            style={{
              marginTop: hp("4.6%"),
              alignSelf: "center",
              fontFamily: "Roboto700",
              color: colors.grayA1A,
            }}
          >
            OR LOG IN WITH EMAIL
          </Text>
        </View>

        <Animated.View
          style={{ transform: [{ translateY: y }], alignItems: "center" }}
        >
          <TextInput
            placeholder="Email address"
            placeholderTextColor={colors.grayA1A}
            textContentType="emailAddress"
            style={{
              width: wp("88.9%"),
              height: hp("7.4%"),
              backgroundColor: colors.grayF2F,
              marginTop: hp("6.6%"),
              borderRadius: wp("4%"),
              paddingLeft: wp("5.4%"),
            }}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor={colors.grayA1A}
            secureTextEntry={true}
            style={{
              width: wp("88.9%"),
              height: hp("7.4%"),
              backgroundColor: colors.grayF2F,
              marginTop: hp("3.3%"),
              borderRadius: wp("4%"),
              paddingLeft: wp("5.4%"),
            }}
          />
          <ButtonC
            mt={hp("5%")}
            bColor={colors.blue8E9}
            tColor={colors.whiteFFF}
            tContent={"LOG IN"}
            onPress={() => {
              console.log("yönelndir");
            }}
          />
        </Animated.View>

        <Text
          style={{
            fontFamily: "Roboto400",
            color: colors.black3F4,
            alignSelf: "center",
          }}
        >
          Forgot Password?
        </Text>

        <TouchableOpacity style={{ alignSelf: "center", marginTop: hp("3%") }}>
          <Text style={{ color: colors.grayA1A, fontFamily: "Roboto400" }}>
            ALREADY HAVE AN ACCOUNT?
            <Text style={{ color: colors.blue8E9 }}> SIGN UP</Text>
          </Text>
        </TouchableOpacity>

        <StatusBar backgroundColor={colors.whiteFFF} />
      </View>
    );
  }
};

export default SignUp;
