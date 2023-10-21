import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    marginBottom: 24,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: "700",
    color: "#f9fafb",
  },
  formWrapper: {
    position: "relative",
  },
  listLoading: {
    padding: 24,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  iconLoading: {
    height: 24,
    width: 24,
  },
  listUsers: {
    marginBottom: 160,
  },
});

export default styles;
