import * as React from "react";
import { Formik } from "formik";
import { View, Image, Text, TextInput, Button, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "../../styles/global";

export default function LoginScreen({ navigation }) {
	return (
		<View style={styles.loginPage}>
			<Text>
				<Text style={{ textDecorationLine: "underline" }}>English</Text>{" "}
				/
				<Text style={{ textDecorationLine: "underline" }}>Chinese</Text>{" "}
				/<Text style={{ textDecorationLine: "underline" }}>Malay</Text>{" "}
				/<Text style={{ textDecorationLine: "underline" }}>Tamil</Text>
			</Text>
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

						<TouchableOpacity
							onPress={() => navigation.navigate("MainPage")}
						>
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
