import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
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
