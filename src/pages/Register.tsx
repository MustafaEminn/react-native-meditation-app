import React from "react";
import { View, Text, Keyboard, Animated } from "react-native";
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
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { useFonts } from "expo-font";
import Loading from "./Loading";
import ContinueGoogleButton from "../components/ContinueGoogleButton";
import ContinueFacebookButton from "../components/ContinueFacebookButton";
import ButtonC from "../components/ButtonC";
import Eye from "../assets/images/Eye";

const SignUp = ({ navigation }: any) => {
  let [fontsLoaded] = useFonts({
    Roboto700: require("../assets/fonts/Roboto-Bold.ttf"),
    Roboto400: require("../assets/fonts/Roboto-Regular.ttf"),
    Roboto300: require("../assets/fonts/Roboto-Light.ttf"),
  });

  const [keyboard, setKeyboard]: any = React.useState(false);
  const [passShow, setPassShow]: any = React.useState(false);

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
    Animated.timing(y, {
      toValue: hp("-2%"),
      duration: 700,
      useNativeDriver: true,
    }).start();
    setKeyboard(true);
  };
  const keyboardHandlerClose = () => {
    Animated.timing(y, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true,
    }).start();
    setKeyboard(false);
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
          Create your account
        </Text>
        <View
          style={{
            display: keyboard ? "none" : "flex",
          }}
        >
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
            OR REGISTER IN WITH EMAIL
          </Text>
        </View>

        <Animated.View
          style={{ transform: [{ translateY: y }], alignItems: "center" }}
        >
          <TextInput
            placeholder="Name"
            placeholderTextColor={colors.grayA1A}
            style={{
              width: wp("88.9%"),
              height: hp("7.4%"),
              backgroundColor: colors.grayF2F,
              marginTop: hp("3.3%"),
              borderRadius: wp("4%"),
              paddingLeft: wp("5.4%"),
              color: colors.black3F4,
            }}
          />
          <TextInput
            placeholder="Email address"
            placeholderTextColor={colors.grayA1A}
            textContentType="emailAddress"
            style={{
              width: wp("88.9%"),
              height: hp("7.4%"),
              backgroundColor: colors.grayF2F,
              marginTop: hp("3.3%"),
              borderRadius: wp("4%"),
              paddingLeft: wp("5.4%"),
              color: colors.black3F4,
            }}
          />
          <View style={{ flexDirection: "row" }}>
            <TextInput
              placeholder="Password"
              placeholderTextColor={colors.grayA1A}
              secureTextEntry={passShow ? false : true}
              style={{
                width: wp("88.9%"),
                height: hp("7.4%"),
                backgroundColor: colors.grayF2F,
                marginTop: hp("3.3%"),
                borderRadius: wp("4%"),
                paddingLeft: wp("5.4%"),
                color: colors.black3F4,
              }}
            />
            <Eye
              width={wp("5.8%")}
              height={hp("1.5%")}
              style={{
                position: "absolute",
                right: wp("3%"),
                bottom: hp("2.5%"),
              }}
              onPress={() => setPassShow(!passShow)}
              color={passShow ? colors.blue8E9 : colors.black3F4}
              hitSlop={{ left: 20, top: 20, right: 20, bottom: 20 }}
            />
          </View>
          <ButtonC
            mt={hp("5%")}
            bColor={colors.blue8E9}
            tColor={colors.whiteFFF}
            tContent={"GET STARTED"}
            onPress={() => {
              navigation.navigate("AfterGetStarted");
            }}
          />
        </Animated.View>

        <StatusBar backgroundColor={colors.whiteFFF} />
      </View>
    );
  }
};

export default SignUp;
