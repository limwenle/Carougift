import * as React from "react";
import {
	Button,
	View,
	Text,
	StyleSheet,
	TextInput,
	Alert,
	Image,
} from "react-native";

function HelpSomeoneScreen({ navigation }) {
	return (
		<View
		//style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
		>
			<Text
				style={{
					fontSize: 20,
					fontWeight: "bold",
					textAlign: "center",
				}}
			>
				I would like to give to ...{" "}
			</Text>
			<Image
				source={{
					width: 600,
					height: 150,
					uri:
						"https://brand24.com/blog/wp-content/uploads/2018/04/pexels-photo-875514-2-750x300.jpeg",
				}}
			/>
			<Button
				color="grey"
				paddingTop="100"
				title="Businesses"
				onPress={() => navigation.navigate("ListingDetails")}
			/>
			<Image
				source={{
					width: 600,
					height: 150,
					uri:
						"https://i.insider.com/5d976efa707bdf0e5652a5b4?width=1100&format=jpeg&auto=webp",
				}}
			/>
			<Button
				color="grey"
				paddingTop="100"
				title="Individual"
				onPress={() => navigation.navigate("Individual-Listing")}
			/>
			<Image
				source={{
					width: 420,
					height: 170,
					uri:
						"https://i.pinimg.com/originals/76/bc/46/76bc462ccf0345c87782cd32dc12121b.jpg",
				}}
			/>
			<Button
				color="grey"
				paddingTop="150"
				title="Families"
				onPress={() => navigation.navigate("Families-Listing")}
			/>
		</View>
	);
}

export default HelpSomeoneScreen;
