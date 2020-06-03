import * as React from "react";
import { Formik } from "formik";
import { View, Text, TextInput, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "../../styles/global";

export default function PasswordScreen({ navigation }) {
  return (
    <View style={styles.passwordPage}>
      <Formik
        initialValues={{
          email: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(props) => (
          <View>
            <Text style={styles.centralise}>Forgot Password?</Text>

            <Text>{"\n"} Enter email:</Text>
            <TextInput
              placeholder="Enter email address"
              onChangeText={props.handleChange("email")}
              value={props.values.email}
              underlineColorAndroid={"grey"}
              height={40}
              paddingLeft={6}
            />

            <Text>{"\n"}</Text>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Login");
                alert(
                  "Your reset password request has been sent to your email address. You will now be directed to the Log In page."
                );
              }}
            >
              <Text style={styles.loginButton}>Reset My Password</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
}
