/* 
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
*/

import * as React from "react";
import { Formik } from "formik";
import { View, Image, Text, TextInput, Button, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "../../styles/global";

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.loginPage}>
      <Image
        source={{
          width: 120,
          height: 120,
          uri:
            "https://cdn4.iconfinder.com/data/icons/thank-you/256/Artboard_5_copy-512.png",
        }}
      />
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
            <Text>{"\n"}</Text>

            {/*
            <Button
              title="Log in"
              color="maroon"
              onPress={
                (props.handleSubmit, () => navigation.navigate("MainPage"))
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
			*/}

            <TouchableOpacity onPress={() => navigation.navigate("MainPage")}>
              <Text style={styles.loginButton}>Log in</Text>
            </TouchableOpacity>

            <Text
              style={styles.forgotPassword}
              onPress={() => navigation.navigate("Password")} // link to retrieve password page
            >
              Forgot password?
            </Text>

            <Text
              style={styles.forgotPassword}
              onPress={() => navigation.navigate("Signup")} // link to retrieve password page
            >
              Do not have an account? Sign up with us!
            </Text>

            <Text>{"\n"}</Text>

            {/*
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Signup");
              }}
            >
              <Text style={styles.loginButton}>
                Do not have an account? Sign up with us
              </Text>
            </TouchableOpacity>
            */}
          </View>
        )}
      </Formik>
    </View>
  );
}
