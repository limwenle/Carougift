import * as React from "react";
import { Formik } from "formik";
import { View, Image, Text, TextInput, Button, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "../../styles/global";

export default function SignupScreen({ navigation }) {
  return (
    <View style={styles.signUpPage}>
      <Image
        source={{
          width: 120,
          height: 120,
          uri:
            "https://cdn4.iconfinder.com/data/icons/thank-you/256/Artboard_5_copy-512.png",
        }}
      />
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
            <Text style={styles.centralise}>Sign up for an account</Text>

            <Text>{"\n"} Email:</Text>
            <TextInput
              placeholder="Enter email address"
              onChangeText={props.handleChange("email")}
              value={props.values.email}
              underlineColorAndroid={"grey"}
              height={40}
              paddingLeft={6}
            />
            <Text>{"\n"} Password:</Text>
            <TextInput
              multiline
              placeholder="Enter password"
              onChangeText={props.handleChange("password")}
              value={props.values.password}
              underlineColorAndroid={"grey"}
              height={40}
              paddingLeft={6}
            />
            <TextInput
              multiline
              placeholder="Enter password again."
              onChangeText={props.handleChange("password")}
              value={props.values.passwordagain}
              underlineColorAndroid={"grey"}
              height={40}
              paddingLeft={6}
            />

            <Text>{"\n"} Mobile:</Text>
            <TextInput
              placeholder="Enter mobile phone number"
              onChangeText={props.handleChange("mobile")}
              value={props.values.mobile}
              underlineColorAndroid={"grey"}
              height={40}
              paddingLeft={6}
            />
            {/*
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
            */}

            <TouchableOpacity onPress={() => navigation.navigate("External")}>
              <Text style={styles.loginButton}>Link to MyInfo</Text>
            </TouchableOpacity>

            <Text>{"\n"}</Text>

            <TouchableOpacity onPress={() => navigation.navigate("External")}>
              <Text style={styles.loginButton}>Create My Account</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
}
