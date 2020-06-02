import * as React from "react";
import { Button, View, Text, StyleSheet, TextInput, Alert } from "react-native";

function HomeScreen({ navigation }) {
	return (
		<View
			style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
		>
			<Text>I would like to give to ... </Text>
			<Button
				color="crimson"
				paddingTop="100"
				title="Businesses"
				onPress={() => navigation.navigate("About")}
			/>
			<Button
				color="crimson"
				paddingTop="100"
				title="Individuals"
				onPress={() => navigation.navigate("ReviewForm")}
			/>
			<Button
				color="crimson"
				paddingTop="100"
				title="Families"
				onPress={() => navigation.navigate("Help")}
			/>
		</View>
	);
}

export default HomeScreen;
