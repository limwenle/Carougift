import * as React from "react";
import { Formik } from "formik";
import { Text, View, Button, TextInput } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function IndividualForm() {
	return (
		<ScrollView style={{ padding: 30, backgroundColor: "white" }}>
			<Formik
				initialValues={{
					Name: "",
					TargetFund: "",
					Rewards: "",
					Description: "",
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
							Request form for Individual
						</Text>
						<TextInput
							style={{
								borderBottomColor: "black",
								borderBottomWidth: 2,
								fontSize: 20,
								padding: 10,
								marginTop: 20,
							}}
							placeholder="Insert Name"
							onChangeText={props.handleChange("Name")}
							value={props.values.Name}
						/>
						<TextInput
							style={{
								borderBottomColor: "black",
								borderBottomWidth: 2,
								fontSize: 20,
								padding: 10,
							}}
							placeholder="Input Target Fund"
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
							}}
							placeholder="What would funders get?"
							onChangeText={props.handleChange("Rewards")}
							value={props.values.Rewards}
						/>
						<TextInput
							multiline
							style={{
								borderBottomColor: "black",
								borderBottomWidth: 2,
								fontSize: 20,
								padding: 10,
								height: 200,
								textAlignVertical: "top",
								marginBottom: 40,
							}}
							placeholder="Description of Goal"
							onChangeText={props.handleChange("Description")}
							value={props.values.Description}
						/>
						<Button
							title="Submit"
							color="maroon"
							onPress={() => {
								props.handleSubmit;
								navigation.navigate("MainManageListings");
							}}
						/>
					</View>
				)}
			</Formik>
		</ScrollView>
	);
}
