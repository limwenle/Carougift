import * as React from "react";
import styles from "../../styles/global";
import { Button, View, Text, StyleSheet, TextInput, Alert } from "react-native";

function AboutScreen({ navigation }) {
	return (
		<View style={styles.welcome1}>
			<Text style={styles.welcomeText1}>
				We strive to provide assistance to people struggling in
				COVID-19.
			</Text>
			<Button
				color="crimson"
				paddingTop="100"
				title="Home"
				onPress={() => navigation.navigate("Home")}
			/>
		</View>
	);
}

export default AboutScreen;
