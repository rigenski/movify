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
  formInput: {
    marginBottom: 16,
    paddingHorizontal: 48,
    width: "100%",
    height: 40,
    fontSize: 14,
    fontWeight: "500",
    color: "#f9fafb",
    backgroundColor: "#4b5563",
    borderRadius: 24,
  },
  formIcon: {
    top: 8,
    left: 12,
    height: 24,
    width: 24,
    position: "absolute",
  },
  formButton: {
    marginBottom: 24,
    width: "100%",
    height: 40,
    backgroundColor: "#4338ca",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 24,
  },
  formButtonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#f9fafb",
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
  listMovies: {
    marginBottom: 500,
  },
});

export default styles;
