import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ScreenEnum, StackParamList } from "../types";
import { NavigationContainer } from "@react-navigation/native";
import { MainScreen } from "../../features/Main/screens/MainScreen";


const Stack = createStackNavigator<StackParamList>();

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={ScreenEnum.Main}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name={ScreenEnum.Main}
          component={MainScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
