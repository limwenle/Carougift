import * as React from "react";
import { Formik } from "formik";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import styles from "../../styles/global";

export default function LoginScreen({ navigation }) {
  return (
    <View>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(props) => (
          <View>
            <Text style={styles.centralise}>
              Log in/Sign up with an account
            </Text>

            <Text>{"\n"} Email:</Text>
            <TextInput
              placeholder="Enter email address"
              onChangeText={props.handleChange("email")}
              value={props.values.email}
            />

            <Text>{"\n"} Password:</Text>
            <TextInput
              multiline
              placeholder="Enter password"
              onChangeText={props.handleChange("password")}
              value={props.values.password}
            />
            <Text>{"\n"}</Text>

            <Button
              title="Log in"
              color="maroon"
              onPress={
                (props.handleSubmit, () => navigation.navigate("ReviewForm")) // link to main page (4)
              }
            />

            <Button
              color="crimson"
              paddingTop="100"
              title="Do not have an account? Sign up with us"
              onPress={() => navigation.navigate("Signup")}
            />

            <Text
              style={styles.forgotPassword}
              onPress={() => navigation.navigate("Password")} // link to retrieve password page
            >
              Forgot password?
            </Text>
          </View>
        )}
      </Formik>
    </View>
  );
}
