import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import UserDetail from "./screens/UserDetail/UserDetail";
import Users from "./screens/Users/Users";

export default function App() {
  const [detail, setDetail] = useState(null);

  return (
    <View style={styles.container}>
      {/* {!detail ? (
        <Movies setDetail={(val) => setDetail(val)} />
      ) : (
        <MovieDetail detail={detail} onClose={() => setDetail(null)} />
      )} */}
      {!detail ? (
        <Users setDetail={(val) => setDetail(val)} />
      ) : (
        <UserDetail detail={detail} onClose={() => setDetail(null)} />
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
