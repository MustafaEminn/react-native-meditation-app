import React from "react";
import { StyleSheet, Text, View } from "react-native";
import NavigationStack from "./src/navigation/NavigationStack";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationStack />
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
