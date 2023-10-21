import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Movies from "./screens/Movies/Movies";

export default function App() {
  return (
    <View style={styles.container}>
      <Movies />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 64,
    flex: 1,
    backgroundColor: "#1f2937",
  },
});
