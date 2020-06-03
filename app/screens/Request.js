import * as React from "react";
import {
	Button,
	ScrollView,
	Text,
	StyleSheet,
	TextInput,
	Alert,
	Image,
	View,
	TouchableHighlight,
} from "react-native";

function RequestScreen({ navigation }) {
	return (
		<ScrollView>
			<View style={{ backgroundColor: "#F9D89C" }}>
				<Text
					style={{
						fontSize: 20,
						fontWeight: "bold",
						textAlign: "center",
					}}
				>
					I would like help for my ...{" "}
				</Text>
			</View>
			<TouchableHighlight
				onPress={() => navigation.navigate("CompanyForm")}
			>
				<Image
					source={{
						width: 600,
						height: 140,
						uri:
							"https://brand24.com/blog/wp-content/uploads/2018/04/pexels-photo-875514-2-750x300.jpeg",
					}}
				/>
			</TouchableHighlight>
			<Button
				color="#FE8A71"
				paddingTop="100"
				title="Company"
				onPress={() => navigation.navigate("CompanyForm")}
			/>
			<TouchableHighlight
				onPress={() => navigation.navigate("FamilyForm")}
			>
				<Image
					source={{
						width: 415,
						height: 140,
						uri:
							"https://i.pinimg.com/originals/76/bc/46/76bc462ccf0345c87782cd32dc12121b.jpg",
					}}
				/>
			</TouchableHighlight>
			<Button
				color="#FE8A71"
				paddingTop="150"
				title="Family"
				onPress={() => navigation.navigate("FamilyForm")}
			/>
			<TouchableHighlight
				onPress={() => navigation.navigate("IndividualForm")}
			>
				<Image
					source={{
						width: 450,
						height: 140,
						uri:
							"https://images.scholarschoice.com.sg/images/experiences/16_800x400_1549933449.png",
					}}
				/>
			</TouchableHighlight>
			<Button
				color="#FE8A71"
				paddingTop="100"
				title="Individual"
				onPress={() => navigation.navigate("IndividualForm")}
			/>
		</ScrollView>
	);
}

export default RequestScreen;
