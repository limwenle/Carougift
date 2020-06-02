import * as React from "react";
import { Formik } from "formik";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import styles from "../../styles/global";

export default function SignupScreen({ navigation }) {
  return (
    <View>
      <Formik
        initialValues={{
          email: "",
          password: "",
          passwordagain: "",
          mobile: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(props) => (
          <View>
            <Text style={styles.centralise}>Sign up with us!</Text>

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
            <TextInput
              multiline
              placeholder="Enter password again."
              onChangeText={props.handleChange("password")}
              value={props.values.passwordagain}
            />

            <Text>{"\n"} Mobile:</Text>
            <TextInput
              placeholder="Enter mobile phone number"
              onChangeText={props.handleChange("mobile")}
              value={props.values.mobile}
            />

            <Button
              title="Link to MyInfo"
              color="blue"
              onPress={
                (props.handleSubmit, () => navigation.navigate("ReviewForm")) // link to MyInfo database to retrieve info (to prevent multiple accounts)
              }
            />

            <Button
              title="Create my account"
              color="maroon"
              onPress={
                (props.handleSubmit, () => navigation.navigate("ReviewForm")) // link to main page (4)
              }
            />
          </View>
        )}
      </Formik>
    </View>
  );
}
