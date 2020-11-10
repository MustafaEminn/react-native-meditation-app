import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import GetStarted from "../pages/GetStarted";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AfterGetStarted from "../pages/AfterGetStarted";
import ChooseTopic from "../pages/ChooseTopic";
import Home from "../pages/Home";
import Relax from "../pages/Relax";

const Stack = createStackNavigator();

const NavigationStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="GetStarted"
          component={GetStarted}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AfterGetStarted"
          component={AfterGetStarted}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChooseTopic"
          component={ChooseTopic}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Relax"
          component={Relax}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationStack;
