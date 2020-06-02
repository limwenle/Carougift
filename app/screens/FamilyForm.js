import * as React from "react";
import { Formik } from "formik";
import { Text, View, Button, TextInput } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function FamilyForm() {
	return (
		<ScrollView style={{ padding: 30, backgroundColor: "white" }}>
			<Formik
				initialValues={{
					FamilySize: "",
					TargetFund: "",
					DescriptionOfFamily: "",
					DescriptionOfHelp: "",
				}}
				onSubmit={(values) => {
					console.log(values);
				}}
			>
				{(props) => (
					<View>
						<Text
							style={{
								fontSize: 24,
								textAlign: "center",
							}}
						>
							Request form for Family
						</Text>
						<TextInput
							style={{
								borderBottomColor: "black",
								borderBottomWidth: 2,
								fontSize: 20,
								padding: 10,
								marginTop: 20,
							}}
							placeholder="Insert Family Size"
							onChangeText={props.handleChange("FamilySize")}
							value={props.values.FamilySize}
						/>
						<TextInput
							multiline
							style={{
								borderBottomColor: "black",
								borderBottomWidth: 2,
								fontSize: 20,
								padding: 10,
								height: 150,
							}}
							placeholder="Describe your family situation"
							onChangeText={props.handleChange(
								"DescriptionOfFamily"
							)}
							value={props.values.DescriptionOfFamily}
						/>
						<TextInput
							multiline
							style={{
								borderBottomColor: "black",
								borderBottomWidth: 2,
								fontSize: 20,
								padding: 10,
							}}
							placeholder="Target Fund"
							onChangeText={props.handleChange("TargetFund")}
							value={props.values.TargetFund}
						/>
						<TextInput
							multiline
							style={{
								borderBottomColor: "black",
								borderBottomWidth: 2,
								fontSize: 20,
								padding: 10,
								height: 150,
								textAlignVertical: "top",
								marginBottom: 40,
							}}
							placeholder="List how people can help you"
							onChangeText={props.handleChange(
								"DescriptionOfHelp"
							)}
							value={props.values.DescriptionOfHelp}
						/>
						<Button
							title="Submit"
							color="maroon"
							onPress={props.handleSubmit}
						/>
					</View>
				)}
			</Formik>
		</ScrollView>
	);
}
