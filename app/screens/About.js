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
				CanIGift(?) is a platform for local donors to connect with the
				needy community in Singapore, especially in times of need such
				as during a public health crisis situation. There may be small
				businesses, families or individuals who are particularly
				impacted, and require additional assistance from the wider
				community. {"\n"} {"\n"} Here, you can create a crowdfunding
				campaign, request for products or services, or browse through
				the list of requests of others and see if you can give back in
				one way or another. {"\n"}
			</Text>
			<Text style={styles.welcomeText2}>
				Together, (insert some quote)! {"\n"}
			</Text>
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
