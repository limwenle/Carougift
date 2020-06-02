import * as React from "react";
import { Button, View, Text, StyleSheet, TextInput, Alert } from "react-native";

function HomeScreen({ navigation }) {
	return (
		<View
			style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
		>
			<Text>Welcome to CanIGift</Text>
			<Button
				color="crimson"
				paddingTop="100"
				title="About"
				onPress={() => navigation.navigate("About")}
			/>
			<Button
				color="crimson"
				paddingTop="100"
				title="Make a request"
				onPress={() => navigation.navigate("ReviewForm")}
			/>
		</View>
	);
}

export default HomeScreen;
