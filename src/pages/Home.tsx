import React from "react";
import { View, Text, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import Loading from "./Loading";
import { colors } from "../styles/globalStyles";
import LogoNormal from "../components/LogoNormal";
import {
  RectButton,
  ScrollView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import Home1 from "../assets/images/Home1";
import Home2 from "../assets/images/Home2";
import HomeMusic from "../assets/images/HomeMusic";
import PlayButton from "../assets/images/PlayButton";
import BottomTab from "../components/BottomTab";

const Home = ({ navigation }: any) => {
  let [fontsLoaded] = useFonts({
    Roboto100: require("../assets/fonts/Roboto-Thin.ttf"),
    Roboto300: require("../assets/fonts/Roboto-Light.ttf"),
    Roboto400: require("../assets/fonts/Roboto-Regular.ttf"),
    Roboto700: require("../assets/fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <Loading />;
  } else {
    return (
      <View
        style={{
          marginTop: Constants.statusBarHeight,
          flex: 1,
          backgroundColor: colors.whiteFFF,
        }}
      >
        <View style={{ alignSelf: "center", marginTop: hp("6.7%") }}>
          <LogoNormal />
        </View>
        <ScrollView
          style={{ marginTop: hp("5%") }}
          showsVerticalScrollIndicator={false}
        >
          <Text
            style={{
              fontFamily: "Roboto700",
              fontSize: wp("7.6%"),

              marginLeft: wp("5.4%"),
            }}
          >
            Good Morning, Visitor
          </Text>
          <Text
            style={{
              fontFamily: "Roboto300",
              fontSize: wp("5.4%"),
              marginTop: hp("1.6%"),
              marginLeft: wp("5.4%"),
              color: colors.grayA1A,
            }}
          >
            We Wish you have a good day
          </Text>
          <View style={{ flexDirection: "row", width: wp("100%") }}>
            <View
              style={{
                backgroundColor: colors.blue8E9,
                borderRadius: 10,
                width: wp("44%"),
                height: hp("35%"),
                marginLeft: wp("4%"),
                marginTop: hp("5%"),
              }}
            >
              <View style={{ alignSelf: "flex-end" }}>
                <Home1 />
              </View>
              <Text
                style={{
                  fontSize: wp("4.9%"),
                  fontFamily: "Roboto700",
                  color: colors.whiteFFE,
                  lineHeight: hp("3.25%"),
                  marginLeft: wp("4%"),
                }}
              >
                Basics{"\n"}
                <Text style={{ fontSize: wp("3%"), fontFamily: "Roboto400" }}>
                  Course
                </Text>
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "flex-end",
                  height: hp("12%"),
                }}
              >
                <Text
                  style={{
                    fontSize: wp("3%"),
                    fontFamily: "Roboto400",
                    color: colors.whiteFFE,
                    marginLeft: wp("4%"),
                    height: hp("4%"),
                  }}
                >
                  3-10 MIN
                </Text>

                <TouchableOpacity
                  style={{
                    backgroundColor: colors.grayEBE,
                    height: hp("5.8%"),
                    width: wp("19%"),
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 25,
                    position: "relative",
                    bottom: 0,

                    marginLeft: wp("4.8%"),
                  }}
                  activeOpacity={0.9}
                >
                  <Text
                    style={{ color: colors.black3F4, fontSize: wp("3.2%") }}
                  >
                    START
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                backgroundColor: colors.blue8E9,
                borderRadius: 10,
                width: wp("44%"),
                height: hp("35%"),
                marginLeft: wp("4%"),
                marginTop: hp("5%"),
              }}
            >
              <View style={{ alignSelf: "flex-end" }}>
                <Home1 />
              </View>
              <Text
                style={{
                  fontSize: wp("4.9%"),
                  fontFamily: "Roboto700",
                  color: colors.whiteFFE,
                  lineHeight: hp("3.25%"),
                  marginLeft: wp("4%"),
                }}
              >
                Basics{"\n"}
                <Text style={{ fontSize: wp("3%"), fontFamily: "Roboto400" }}>
                  Course
                </Text>
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "flex-end",
                  height: hp("12%"),
                }}
              >
                <Text
                  style={{
                    fontSize: wp("3%"),
                    fontFamily: "Roboto400",
                    color: colors.whiteFFE,
                    marginLeft: wp("4%"),
                    height: hp("4%"),
                  }}
                >
                  3-10 MIN
                </Text>

                <TouchableOpacity
                  style={{
                    backgroundColor: colors.grayEBE,
                    height: hp("5.8%"),
                    width: wp("19%"),
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 25,
                    position: "relative",
                    bottom: 0,

                    marginLeft: wp("4.8%"),
                  }}
                  activeOpacity={0.9}
                >
                  <Text
                    style={{ color: colors.black3F4, fontSize: wp("3.2%") }}
                  >
                    START
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View>
            <View
              style={{
                backgroundColor: colors.blue333,
                width: wp("90%"),
                height: hp("15%"),
                alignSelf: "center",
                borderRadius: 10,
                marginTop: hp("3.3%"),
                flexDirection: "row",
              }}
            >
              <View style={{ position: "absolute" }}>
                <HomeMusic width={wp("90%")} height={hp("15%")} />
              </View>

              <View>
                <Text
                  style={{
                    fontSize: wp("4.9%"),
                    color: colors.whiteFFF,
                    fontFamily: "Roboto700",
                    marginLeft: wp("8%"),
                    marginTop: hp("3.8%"),
                  }}
                >
                  Daily Thought
                </Text>
                <Text
                  style={{
                    fontSize: wp("3%"),
                    color: colors.grayEBE,
                    fontFamily: "Roboto700",
                    marginLeft: wp("8%"),
                    marginTop: hp("1.7%"),
                  }}
                >
                  MEDIDATION - 3-10 MIN
                </Text>
              </View>

              <RectButton
                style={{
                  height: hp("6.7%"),
                  width: wp("10.8%"),
                  backgroundColor: colors.whiteFFF,
                  borderRadius: 26,
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: hp("4.4%"),
                  marginLeft: wp("32%"),
                }}
              >
                <PlayButton
                  width={wp("4%")}
                  height={hp("3%")}
                  color={colors.black3F4}
                />
              </RectButton>
            </View>
          </View>

          <Text
            style={{
              fontFamily: "Roboto400",
              fontSize: wp("6.5%"),
              marginTop: hp("6.7%"),
              marginLeft: wp("5.4%"),
            }}
          >
            Recommended for you
          </Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={wp("30%")}
          >
            <RectButton
              style={{
                width: wp("43.8%"),
                height: hp("26.8%"),
                marginLeft: wp("6.2%"),
                marginTop: hp("3.3%"),
              }}
            >
              <Image
                style={{
                  flex: 1,
                  width: undefined,
                  height: undefined,
                  borderRadius: 10,
                }}
                source={require("../assets/images/Focus.png")}
                resizeMode="contain"
              />
              <Text
                style={{
                  color: colors.black3F4,
                  position: "absolute",
                  fontSize: wp("4.9%"),
                  fontFamily: "Roboto700",
                  marginTop: hp("20%"),
                }}
              >
                Focus
              </Text>

              <Text
                style={{
                  fontSize: wp("3%"),
                  color: colors.grayA1A,
                  fontFamily: "Roboto700",
                  marginTop: hp("24.2%"),
                  position: "absolute",
                }}
              >
                MEDIDATION - 3-10 MIN
              </Text>
            </RectButton>

            <RectButton
              style={{
                width: wp("43.8%"),
                height: hp("26.8%"),
                marginLeft: wp("6.2%"),
                marginTop: hp("3.3%"),
              }}
            >
              <Image
                style={{
                  flex: 1,
                  width: undefined,
                  height: undefined,
                  borderRadius: 10,
                }}
                source={require("../assets/images/Happiness.png")}
                resizeMode="contain"
              />
              <Text
                style={{
                  color: colors.black3F4,
                  position: "absolute",
                  fontSize: wp("4.9%"),
                  fontFamily: "Roboto700",
                  marginTop: hp("20%"),
                }}
              >
                Happiness
              </Text>

              <Text
                style={{
                  fontSize: wp("3%"),
                  color: colors.grayA1A,
                  fontFamily: "Roboto700",
                  marginTop: hp("24.2%"),
                  position: "absolute",
                }}
              >
                MEDIDATION - 3-10 MIN
              </Text>
            </RectButton>

            <RectButton
              style={{
                width: wp("43.8%"),
                height: hp("26.8%"),
                marginLeft: wp("6.2%"),
                marginTop: hp("3.3%"),
              }}
            >
              <Image
                style={{
                  flex: 1,
                  width: undefined,
                  height: undefined,
                  borderRadius: 10,
                }}
                source={require("../assets/images/Focus.png")}
                resizeMode="contain"
              />
              <Text
                style={{
                  color: colors.black3F4,
                  position: "absolute",
                  fontSize: wp("4.9%"),
                  fontFamily: "Roboto700",
                  marginTop: hp("20%"),
                }}
              >
                Focus
              </Text>

              <Text
                style={{
                  fontSize: wp("3%"),
                  color: colors.grayA1A,
                  fontFamily: "Roboto700",
                  marginTop: hp("24.2%"),
                  position: "absolute",
                }}
              >
                MEDIDATION - 3-10 MIN
              </Text>
            </RectButton>
          </ScrollView>
        </ScrollView>

        <BottomTab />
      </View>
    );
  }
};

export default Home;
