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
} from "react-native";
import MainPage from "./MainPage";

function AboutScreen({ navigation }) {
	return (
		<View style={styles.welcome1}>
			<Image
				source={{
					width: 100,
					height: 150,
					uri: "https://picsum.photos/200/300",
				}}
			/>
			<Text>{"\n"}</Text>
			<Text style={styles.welcomeText1}>
				Hello! We are a group of students from NUS. {"\n"}
			</Text>
			<Text style={styles.welcomeText1}>
				CanIGive is a platform aimed towards supporting our local Small
				and Medium Enterprises(SME) and Entrepreneurs by providing an
				avenue for our local selfless citizens to contribute in their
				own ways and help all these businesses tide through this tough
				period. As an extension from our goal, we want to provide
				support for families who are facing similar difficulties as we
				are one Singapore.
				{"\n"} {"\n"}
				SME, Entrepreneurs and Families can request for help, and any
				kind soul will reach out to you and help out in their own way,
				be it monetary or technicalities. {"\n"}
			</Text>
			<Text style={styles.welcomeText2}>Together We Give! {"\n"}</Text>
			<Button
				color="crimson"
				paddingTop="100"
				title="Back to Home page"
				onPress={() => navigation.navigate(MainPage)}
			/>
		</View>
	);
}

export default AboutScreen;
