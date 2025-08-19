import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#152744",
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },
  imageContainer: { alignItems: "center", paddingBottom: 20 },
  buttonsContainer: {
    paddingBottom: 100,
    width: "100%",
    alignItems: "center",
  },
  title: { fontSize: 20, fontWeight: "700", marginTop: 20, color: "white" },
});
