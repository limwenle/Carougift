import * as React from "react";
import styles from "../../styles/global";
import {
	Button,
	View,
	Text,
	StyleSheet,
	TextInput,
	Alert,
	Image,
	TouchableOpacity,
} from "react-native";
import MainPage from "./MainPage";

function AboutScreen({ navigation }) {
	return (
		<View style={styles.welcome1}>
			<Image
				source={{
					width: 120,
					height: 120,
					uri:
						"https://cdn4.iconfinder.com/data/icons/thank-you/256/Artboard_5_copy-512.png",
				}}
			/>
			<Text>{"\n"}</Text>
			<Text style={styles.welcomeText1}>
				Hello! We are a group of students from NUS. {"\n"}
			</Text>
			<Text style={styles.welcomeText1}>
				CanIGive is a platform aimed towards supporting our local Small
				and Medium Enterprises(SME) and Entrepreneurs. It is an avenue
				for other citizens to contribute in their own ways and help
				these businesses tide through this tough period. As an extension
				from our goal, we want to provide support for families and
				high-risk individuals who are facing similar difficulties.
				{"\n"} {"\n"}
				Businesses, Families and Individuals can request for help, from
				others who will reach out to them and help out in their own way,
				be it monetary or technicalities. {"\n"}
			</Text>
			<Text style={styles.welcomeText2}>Together We Give! {"\n"}</Text>

			<TouchableOpacity onPress={() => navigation.navigate("MainPage")}>
				<Text style={styles.loginButton}>Back to My Account</Text>
			</TouchableOpacity>
		</View>
	);
}

export default AboutScreen;
