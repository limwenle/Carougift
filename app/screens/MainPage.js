import * as React from "react";
import {
	Button,
	View,
	Text,
	StyleSheet,
	TextInput,
	Alert,
	Image,
	ImageBackground,
} from "react-native";
//import Icon from 'react-native-vector-icons/Ionicons';
//import { createBottomTabNavigator } from "react-navigation-bottom-tabs";

function MainPage({ navigation }) {
	return (
		<View
			style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
		>
			<Text
				Text
				style={{
					fontSize: 20,
					fontWeight: "bold",
					textAlign: "center",
				}}
			>
				Welcome to CarouGift!
			</Text>
			<Button
				color="crimson"
				paddingTop="100"
				title="Who are we"
				title="About Us"
				onPress={() => navigation.navigate("About")}
			/>
			<Button
				color="crimson"
				paddingTop="100"
				title="Request for help"
				onPress={() => navigation.navigate("Request")}
			/>

			<Button
				color="crimson"
				paddingTop="100"
				title="Help Someone"
				onPress={() => navigation.navigate("HelpSomeone")}
			/>

			<Button
				color="orange"
				paddingTop="100"
				title="View my account"
				onPress={() => navigation.navigate("MainManageListings")}
			/>
		</View>
	);
}

export default MainPage;
