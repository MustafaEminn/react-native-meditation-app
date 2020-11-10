import React from "react";
import { View, Text, Animated } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useFonts } from "expo-font";
import Loading from "../pages/Loading";
import { colors } from "../styles/globalStyles";
import BottomHome from "../assets/images/BottomHome";
import BottomSleep from "../assets/images/BottomSleep";
import BottomMedidate from "../assets/images/BottomMedidate";
import { RectButton } from "react-native-gesture-handler";
import BottomMusic from "../assets/images/BottomMusic";
import BottomProfile from "../assets/images/BottomProfile";

const BottomTab = () => {
  let [fontsLoaded] = useFonts({
    Roboto100: require("../assets/fonts/Roboto-Thin.ttf"),
    Roboto300: require("../assets/fonts/Roboto-Light.ttf"),
    Roboto400: require("../assets/fonts/Roboto-Regular.ttf"),
    Roboto700: require("../assets/fonts/Roboto-Bold.ttf"),
  });

  const [selected, setSelected] = React.useState(1);

  const x = React.useRef(new Animated.Value(0)).current;

  const xMove = (n: number) => {
    Animated.timing(x, {
      toValue: n,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  if (!fontsLoaded) {
    return <Loading />;
  } else {
    return (
      <View
        style={{
          height: hp("9.5%"),
          backgroundColor: colors.whiteFFF,
          justifyContent: "space-around",
          flexDirection: "row",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 8,
          },
          shadowOpacity: 0.44,
          shadowRadius: 10.32,
          elevation: 16,
        }}
      >
        <Animated.View
          style={{
            position: "absolute",
            width: wp("10.5%"),
            height: hp("6%"),
            backgroundColor: colors.blue8E9,
            top: hp("0%"),
            zIndex: 0,
            borderRadius: 14,
            transform: [{ translateX: x }],
          }}
        ></Animated.View>

        <RectButton
          style={{
            height: hp("11%"),
            width: wp("10.5%"),
          }}
          onPress={() => {
            setSelected(1);
            xMove(0);
          }}
        >
          <View
            style={{
              height: hp("6%"),
              width: wp("10.5%"),
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <BottomHome
              width={wp("5%")}
              height={hp("7.5%")}
              color={selected == 1 ? colors.whiteFFF : colors.grayA0A}
            />
          </View>
          <Text
            style={{
              fontSize: wp("3.8%"),
              color: selected == 1 ? colors.blue8E9 : colors.grayA0A,
            }}
          >
            Home
          </Text>
        </RectButton>

        <RectButton
          style={{
            height: hp("11%"),
            width: wp("10.5%"),
          }}
          onPress={() => {
            setSelected(2);
            xMove(wp("19.6%"));
          }}
        >
          <View
            style={{
              height: hp("6%"),
              width: wp("10.5%"),
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <BottomSleep
              width={wp("5%")}
              height={hp("7.5%")}
              color={selected == 2 ? colors.whiteFFF : colors.grayA0A}
            />
          </View>
          <Text
            style={{
              fontSize: wp("3.8%"),
              color: selected == 2 ? colors.blue8E9 : colors.grayA0A,
            }}
          >
            Sleep
          </Text>
        </RectButton>

        <RectButton
          style={{
            height: hp("11%"),
            width: wp("10.5%"),
          }}
          onPress={() => {
            setSelected(3);
            xMove(wp("39.6%"));
          }}
        >
          <View
            style={{
              height: hp("6%"),
              width: wp("10.5%"),
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <BottomMedidate
              width={wp("5%")}
              height={hp("7.5%")}
              color={selected == 3 ? colors.whiteFFF : colors.grayA0A}
            />
          </View>
          <Text
            style={{
              fontSize: wp("3.8%"),
              color: selected == 3 ? colors.blue8E9 : colors.grayA0A,
              width: wp("16%"),
              alignSelf: "center",
            }}
          >
            Medidate
          </Text>
        </RectButton>

        <RectButton
          style={{
            height: hp("11%"),
            width: wp("10.5%"),
          }}
          onPress={() => {
            setSelected(4);
            xMove(wp("59.6%"));
          }}
        >
          <View
            style={{
              height: hp("6%"),
              width: wp("10.5%"),
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <BottomMusic
              width={wp("5%")}
              height={hp("7.5%")}
              color={selected == 4 ? colors.whiteFFF : colors.grayA0A}
            />
          </View>
          <Text
            style={{
              fontSize: wp("3.8%"),
              color: selected == 4 ? colors.blue8E9 : colors.grayA0A,
            }}
          >
            Music
          </Text>
        </RectButton>

        <RectButton
          style={{
            height: hp("11%"),
            width: wp("10.5%"),
          }}
          onPress={() => {
            setSelected(5);
            xMove(wp("79.6%"));
          }}
        >
          <View
            style={{
              height: hp("6%"),
              width: wp("10.5%"),
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <BottomProfile
              width={wp("5%")}
              height={hp("7.5%")}
              color={selected == 5 ? colors.whiteFFF : colors.grayA0A}
            />
          </View>
          <Text
            style={{
              fontSize: wp("3.8%"),
              color: selected == 5 ? colors.blue8E9 : colors.grayA0A,
              width: wp("11%"),
              alignSelf: "center",
            }}
          >
            Profile
          </Text>
        </RectButton>
      </View>
    );
  }
};

export default BottomTab;
