import * as React from "react";
import { Text, View, Button, TextInput } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import RadioForm from "react-native-simple-radio-button";

var radio_props = [
	{ label: "Service", value: 0 },
	{ label: "Product", value: 1 },
	{ label: "Donations", value: 2 },
];

export default function IndividualForm() {
	return (
		<ScrollView style={{ padding: 30, backgroundColor: "white" }}>
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
				<Text> Company Name</Text>
				<TextInput
					style={{
						borderColor: "black",
						borderWidth: 2,
						fontSize: 15,
						padding: 5,
					}}
				/>
				<Text> Description of idea: </Text>
				<TextInput
					multiline
					style={{
						borderColor: "black",
						borderWidth: 2,
						fontSize: 15,
						padding: 5,
						height: 150,
						textAlignVertical: "top",
					}}
					placeholderTextColor="grey"
					placeholder="e.g: I am a first class honour graduate from NUS, my team of 4 have been working together on this project of reusable toilet paper."
				/>
				<Text> What do you need: </Text>
				<RadioForm
					radio_props={radio_props}
					initial={0}
					onPress={(value) => {
						this.setState({ value: value });
					}}
					buttonColor={"black"}
					selectedButtonColor={"black"}
					buttonSize={10}
				/>
				<TextInput
					multiline
					style={{
						borderColor: "black",
						borderWidth: 2,
						fontSize: 15,
						padding: 5,
						height: 150,
						textAlignVertical: "top",
						marginBottom: 20,
					}}
					placeholderTextColor="grey"
					placeholder="Service: I need a professional advice from successful start-up."
				/>
				<Button title="Submit" color="maroon" />
			</View>
		</ScrollView>
	);
}
