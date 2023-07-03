import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/screen/Home.js";
import Profile from "./src/screen/Profile.js";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "./src/constants/DCSLocalize.js";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
