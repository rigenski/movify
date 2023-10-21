import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Movies from "./screens/Movies/Movies";
import { useState } from "react";
import MovieDetail from "./screens/MovieDetail/MovieDetail";
import Users from "./screens/Users/Users";

export default function App() {
  const [detail, setDetail] = useState(null);

  return (
    <View style={styles.container}>
      {/* {!detail ? (
        <Movies setDetail={(val) => setDetail(val)} />
      ) : (
        <MovieDetail detail={detail} />
      )} */}
      {!detail ? (
        <Users setDetail={(val) => setDetail(val)} />
      ) : (
        <MovieDetail detail={detail} />
      )}
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
