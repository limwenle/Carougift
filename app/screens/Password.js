import * as React from "react";
import { Formik } from "formik";
import { View, Text, TextInput, Button } from "react-native";
import styles from "../../styles/global";

export default function PasswordScreen({ navigation }) {
  return (
    <View>
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
            />

            <Text>{"\n"}</Text>

            <Button
              title="Reset my password"
              color="maroon"
              onPress={
                (props.handleSubmit, () => navigation.navigate("Home")) // link to backend
              }
            />
          </View>
        )}
      </Formik>
    </View>
  );
}
