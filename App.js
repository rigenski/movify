import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import TabNavigator from "./navigation/TabNavigator";

export default function App() {
  const [detail, setDetail] = useState(null);

  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
    // <StatusBar style="auto" />
  );
}
