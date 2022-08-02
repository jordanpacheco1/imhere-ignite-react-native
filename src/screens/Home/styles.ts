import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
  },
  eventName: {
    fontSize: 24,
    color: "#FFF",
    fontWeight: "bold",
  },
  eventDate: {
    fontSize: 16,
    color: "#6b6b6b",
  },
  input: {
    flex: 1,
    marginRight: 12,
    backgroundColor: "#1F1E25",
    height: 56,
    padding: 16,
    fontSize: 16,
    color: "#FFF",
    borderRadius: 5,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#31CF67",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 24,
  },
  form: {
    width: "100%",
    flexDirection: "row",
    marginTop: 36,
    marginBottom: 42,
  },
  listEmptyText: {
    color: "#FFF",
    fontSize: 14,
    textAlign: "center",
  },
});
