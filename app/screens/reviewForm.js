import * as React from "react";
import { Formik } from "formik";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function ReviewForm() {
	return (
		<View style={{ padding: 30 }}>
			<Formik
				initialValues={{ title: "", body: "", rating: "" }}
				onSubmit={(values) => {
					console.log(values);
				}}
			>
				{(props) => (
					<View>
						<TextInput
							placeholder="Review title"
							onChangeText={props.handleChange("title")}
							value={props.values.title}
						/>
						<TextInput
							multiline
							placeholder="Review body"
							onChangeText={props.handleChange("body")}
							value={props.values.body}
						/>
						<TextInput
							multiline
							placeholder="Rating (1-5)"
							onChangeText={props.handleChange("rating")}
							value={props.values.rating}
						/>

						<Button
							title="submit"
							color="maroon"
							onPress={props.handleSubmit}
						/>
					</View>
				)}
			</Formik>
		</View>
	);
}
