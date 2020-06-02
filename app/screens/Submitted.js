import * as React from "react";
import { Button, View, Text, StyleSheet, TextInput, Alert } from "react-native";

function SubmissionScreen({ navigation }) {
	return (
		<View
			style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
		>
			<Text>Your form has been submitted.</Text>
			<Button
				title="Submit another form"
				onPress={() =>
					Alert.alert(
						"Alert",
						"You have already submitted a form. Proceed?",
						[
							{
								text: "Yes, proceed.",
								onPress: () => navigation.navigate("Home"),
							},
							{
								text: "No",
								onPress: () => navigation.navigate("Home"),
							},
						]
					)
				}
			/>
		</View>
	);
}

export default SubmissionScreen;
