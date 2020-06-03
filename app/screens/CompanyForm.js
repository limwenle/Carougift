import * as React from "react";
import { Text, View, Button, TextInput } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function CompanyForm() {
	return (
		<ScrollView style={{ padding: 30, backgroundColor: "lightgrey" }}>
			<View>
				<Text> Campaign Name: (Optional)</Text>
				<TextInput
					style={{
						borderColor: "black",
						borderWidth: 2,
						fontSize: 15,
						padding: 5,
					}}
				/>
				<Text> Company Name: </Text>
				<TextInput
					style={{
						borderColor: "black",
						borderWidth: 2,
						fontSize: 15,
						padding: 5,
					}}
				/>
				<Text> UEN: </Text>
				<TextInput
					style={{
						borderColor: "black",
						borderWidth: 2,
						fontSize: 15,
						padding: 5,
					}}
				/>
				<Text> Target Fund: </Text>
				<TextInput
					style={{
						borderColor: "black",
						borderWidth: 2,
						fontSize: 15,
						padding: 5,
					}}
				/>
				<Text> Description of situation: </Text>
				<TextInput
					multiline
					style={{
						borderColor: "black",
						borderWidth: 2,
						fontSize: 15,
						padding: 5,
						height: 200,
						textAlignVertical: "top",
						marginBottom: 20,
					}}
					placeholder="e.g: My company is heavily affect by covid-19, and I have difficulty keeping my business going."
					placeholderTextColor="grey"
				/>
				<Button title="Submit" color="maroon" />
			</View>
		</ScrollView>
	);
}
