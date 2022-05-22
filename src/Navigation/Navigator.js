import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Home from "../Screens/Home";

import { NavigationContainer } from "@react-navigation/native";
import AddAssest from "../Screens/AddAssest";
import Bottomtabs from "./BottomTabs";

const Stack = createStackNavigator();
const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Tabs" component={Bottomtabs} />
        <Stack.Screen name="Add" component={AddAssest} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
