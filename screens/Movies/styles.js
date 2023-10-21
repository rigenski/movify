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
  listMovies: {
    marginBottom: 500,
  },
  listItem: {
    marginBottom: 16,
    flexDirection: "row",
  },
  listImage: {
    marginRight: 8,
    width: 100,
    height: 140,
    borderRadius: 8,
  },
  listName: {
    marginBottom: 4,
    fontSize: 14,
    fontWeight: "600",
    color: "#f9fafb",
  },
  listCountry: {
    marginBottom: 4,
    fontSize: 12,
    fontWeight: "600",
    color: "#9ca3af",
  },
  listDate: {
    fontSize: 12,
    fontWeight: "600",
    color: "#34d399",
  },
});

export default styles;
