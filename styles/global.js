import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  welcome1: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    flex: 1,
  },
  welcomeText1: {
    fontSize: 16,
    fontFamily: "serif",
    textAlign: "center",
  },
  welcomeText2: {
    fontSize: 20,
    fontFamily: "serif",
    textAlign: "center",
  },
  centralise: {
    textAlign: "center",
    fontSize: 24,
  },
  forgotPassword: {
    textAlign: "center",
    textDecorationLine: "underline",
  },
  inputContainer: {
    paddingTop: 15,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  textInput: {
    borderColor: "#CCCCCC",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 50,
    fontSize: 25,
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default styles;
