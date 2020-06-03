import * as React from "react";
import { Text, View, Button, TextInput } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import RadioForm from "react-native-simple-radio-button";

var radio_props = [
	{ label: "Service", value: 0 },
	{ label: "Product", value: 1 },
	{ label: "Donations", value: 2 },
];

export default function FamilyForm() {
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
				<Text> Description of situation: </Text>
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
					placeholder="e.g: My father who is the sole-bread winner lost his job due to covid-19, and me and my siblings are still in secondary school so we aren't able to find jobs."
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
					placeholder="Service: I need a tuition teacher, Products: I need a new refrigerator. "
				/>
				<Button title="Submit" color="maroon" />
			</View>
		</ScrollView>
	);
}
