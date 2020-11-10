import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { colors } from "../styles/globalStyles";

const Relax = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.whiteFFF,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: colors.grayA1A, fontSize: wp("20%") }}>RELAX</Text>
      <RectButton
        hitSlop={100}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Text style={{ color: colors.grayA1A, fontSize: wp("5%") }}>
          Press ME!
        </Text>
      </RectButton>
    </View>
  );
};

export default Relax;
