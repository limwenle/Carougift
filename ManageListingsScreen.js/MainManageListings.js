import React from "react";
import {
	View,
	Text,
	StyleSheet,
	Alert,
	Image,
	TouchableOpacity,
} from "react-native";

function MainManageListings({ navigation }) {
	return (
		<>
			<View style={styles.pfpName}>
				{/* <Image
					style={styles.pfp}
					source={require("../app/assets/pfp.jpg")}
				/> */}
				<Text style={{ fontSize: 20, top: 200 }}>Account Name</Text>
			</View>

			<TouchableOpacity style={styles.manageList}>
				<Text style={{ fontSize: 20, color: "white" }}>
					Manage My Listings
				</Text>
			</TouchableOpacity>

			<TouchableOpacity style={styles.viewAccount}>
				<Text style={{ fontSize: 20, color: "white" }}>
					View My Account
				</Text>
			</TouchableOpacity>

			<TouchableOpacity style={styles.settings}>
				<Text style={{ fontSize: 20, color: "white" }}>Settings</Text>
			</TouchableOpacity>

			<TouchableOpacity 
				style={styles.messages}
				onPress={() => navigation.navigate("ChatList")}
			>
				<Text style={{ fontSize: 20, color: "white" }}>
					View My Messages
				</Text>
			</TouchableOpacity>

			<TouchableOpacity
				style={styles.logout}
				onPress={() =>
					Alert.alert("Logout", "Confirm Logout?", [
						{
							text: "Yes",
							onPress: () => console.log("edit later"),
						},
						{ text: "No" },
					])
				}
			>
				<Text style={{ fontSize: 20, color: "white" }}>Logout</Text>
			</TouchableOpacity>
		</>
	);
}

const styles = StyleSheet.create({
	pfpName: {
		justifyContent: "center",
		alignItems: "center",
	},
	pfp: {
		justifyContent: "center",
		top: 100,
		width: 100,
		height: 100,
		aspectRatio: 1,
		position: "absolute",
		alignSelf: "center",
	},
	makeList: {
		backgroundColor: "dodgerblue",
		justifyContent: "center",
		alignItems: "center",
		height: 50,
		top: 250,
	},
	manageList: {
		backgroundColor: "dodgerblue",
		justifyContent: "center",
		alignItems: "center",
		height: 50,
		top: 260,
	},
	viewAccount: {
		backgroundColor: "dodgerblue",
		justifyContent: "center",
		alignItems: "center",
		height: 50,
		top: 270,
	},
	settings: {
		backgroundColor: "dodgerblue",
		justifyContent: "center",
		alignItems: "center",
		height: 50,
		top: 280,
	},
	messages: {
		backgroundColor: "dodgerblue",
		justifyContent: "center",
		alignItems: "center",
		height: 50,
		top: 290,
	},
	logout: {
		backgroundColor: "dodgerblue",
		justifyContent: "center",
		alignItems: "center",
		height: 50,
		top: 300,
	},
});

export default MainManageListings;
