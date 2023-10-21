import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 64,
    flex: 1,
    backgroundColor: "#1f2937",
  },
  header: {
    marginBottom: 8,
  },
  headerClose: {
    width: 32,
    height: 32,
  },
  contentWrapper: {
    marginTop: 8,
    flexDirection: "column",
    alignItems: "center",
  },
  contentImage: {
    marginBottom: 16,
    width: 120,
    height: 160,
    borderRadius: 16,
  },
  contentTitle: {
    marginBottom: 8,
    fontSize: 16,
    fontWeight: "600",
    color: "#f9fafb",
    textAlign: "center",
  },
  contentGenre: {
    marginBottom: 16,
    fontSize: 14,
    fontWeight: "600",
    color: "#9ca3af",
  },
  contentOptional: {
    marginBottom: 16,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  contentRating: {
    fontSize: 14,
    fontWeight: "600",
    color: "#34d399",
  },
  contentCountry: {
    fontSize: 14,
    fontWeight: "600",
    color: "#34d399",
  },
  contentVideo: {
    marginBottom: 16,
    width: 280,
    height: 160,
    borderRadius: 16,
  },
  contentButton: {
    marginBottom: 16,
    width: "100%",
    height: 48,
    backgroundColor: "#34d399",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  contentButtonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#f9fafb",
  },
  contentDescription: {
    marginBottom: 24,
    fontSize: 14,
    fontWeight: "600",
    color: "#9ca3af",
  },
});

export default styles;
