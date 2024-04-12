import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleText: {
    fontFamily: "poppins-bold",
    fontSize: 18,
    color: "#333",
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  regp1: {
    fontFamily: "poppins-regular",
    color: "#151515"
  },
  regP2: {
    fontFamily: "poppins-regular",
    color: "#4a4a4a"
  },
  price: {
    color: "#db3c25",
  },
  counter: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  numberBox: {
    borderWidth: 2,
    borderColor: "#eee",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 6,
  },
  button1: {
    backgroundColor: "#db3c25",
    padding: 10,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 10,

  },
});