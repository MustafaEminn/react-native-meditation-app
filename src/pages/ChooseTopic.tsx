import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import Constants from "expo-constants";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { colors } from "../styles/globalStyles";
import ChooseBubble from "../assets/images/ChooseBubble";
import Loading from "./Loading";
import {
  ScrollView,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";

import { ChooseDatas } from "../global/data";

const ChooseTopic = () => {
  let [fontsLoaded] = useFonts({
    Roboto100: require("../assets/fonts/Roboto-Thin.ttf"),
    Roboto300: require("../assets/fonts/Roboto-Light.ttf"),
    Roboto400: require("../assets/fonts/Roboto-Regular.ttf"),
  });

  const marginTopCalc = (index: number) => {
    if (index >= 2) {
      if (index % 2 !== 0) {
        return ChooseDatas[index - 2].large ? hp("2%") : hp("2%");
      } else {
        return ChooseDatas[index - 2].large ? hp("2%") : hp("-5%");
      }
    } else {
      return hp("2%");
    }
  };

  if (!fontsLoaded) {
    return <Loading />;
  } else {
    return (
      <View
        style={{
          marginTop: Constants.statusBarHeight,
          backgroundColor: colors.whiteFFF,
          flex: 1,
        }}
      >
        <Text
          style={{
            fontFamily: "Roboto700",
            fontSize: wp("7.6%"),
            lineHeight: hp("6.3%"),
            marginTop: hp("12.6%"),
            marginLeft: wp("5.4%"),
            color: colors.black3F4,
          }}
        >
          What Brings you
        </Text>
        <Text
          style={{
            fontFamily: "Roboto300",
            fontSize: wp("7.6%"),
            lineHeight: hp("6.3%"),
            marginLeft: wp("5.4%"),
            color: colors.black3F4,
          }}
        >
          to Silent Moon?
        </Text>

        <Text
          style={{
            fontFamily: "Roboto300",
            fontSize: wp("5.4%"),
            lineHeight: hp("3.8%"),
            marginTop: hp("1.6%"),
            marginLeft: wp("5.4%"),
            color: colors.grayA1A,
          }}
        >
          choose a topic to focuse on:
        </Text>

        <ScrollView
          style={{
            width: wp("100%"),
            marginTop: hp("5%"),
            position: "relative",
          }}
          showsVerticalScrollIndicator={false}
        >
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              flex: 1,
            }}
          >
            {ChooseDatas.map((item, i) => {
              const mt = marginTopCalc(i);
              return (
                <TouchableOpacity
                  style={{
                    width: wp("44%"),
                    height: item.large ? hp("35%") : hp("27.8%"),
                    marginLeft: wp("4%"),
                    marginTop: mt,
                    borderRadius: 20,
                    zIndex: 1,
                    backgroundColor: "blue",
                  }}
                  onPress={() => {
                    console.log("dokund");
                  }}
                  key={i}
                  disabled={true}
                >
                  <View>
                    <Image
                      resizeMode="cover"
                      style={{
                        width: wp("44%"),
                        height: item.large ? hp("35%") : hp("27.8%"),
                      }}
                      source={item.image}
                      borderRadius={20}
                    />
                    <Text
                      style={{
                        elevation: 2,
                        position: "absolute",
                        bottom: hp("3.3%"),
                        marginLeft: wp("4%"),
                        lineHeight: hp("4%"),
                        fontSize: wp("4.9%"),
                        fontFamily: "Roboto700",
                        color: colors.whiteFEF,
                      }}
                    >
                      {item.text}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>

        <View
          style={{
            marginTop: hp("17.8%"),
            width: wp("100%"),
            position: "absolute",
            elevation: -1,
          }}
        >
          <ChooseBubble height={hp("100%")} width={wp("100%")} />
        </View>
        <StatusBar backgroundColor={colors.whiteFFF} />
      </View>
    );
  }
};

export default ChooseTopic;
