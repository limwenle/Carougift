import * as React from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  TextInput,
  Alert,
  Image,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "../../styles/global";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.homePage}>
      <Image
        source={{
          width: 200,
          height: 200,
          uri:
            "https://cdn4.iconfinder.com/data/icons/thank-you/256/Artboard_5_copy-512.png",
        }}
      />

      <Image source={require("../assets/Logo.png")} />
      <Text>{"\n"}</Text>

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.loginButton}>Log in</Text>
      </TouchableOpacity>
    </View>
  );
}

export default HomeScreen;
