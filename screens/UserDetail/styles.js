import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    marginBottom: 24,
  },
  headerClose: {
    width: 32,
    height: 32,
  },
  contentWrapper: {
    flexDirection: "column",
    alignItems: "center",
  },
  contentImage: {
    marginBottom: 16,
    width: 160,
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
  contentEmail: {
    marginBottom: 16,
    fontSize: 14,
    fontWeight: "600",
    color: "#9ca3af",
  },
  contentOptional: {
    marginBottom: 16,
    width: "100%",
  },
  contentPhone: {
    marginBottom: 8,
    fontSize: 14,
    fontWeight: "600",
    color: "#34d399",
  },
  contentAddress: {
    marginBottom: 8,
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
  contentMaps: {
    width: "100%",
    height: 240,
  },
});

export default styles;