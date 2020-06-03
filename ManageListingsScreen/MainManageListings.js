import React from "react";
import {
	View,
	Text,
	StyleSheet,
	Alert,
	Image,
	TouchableOpacity,
	ScrollView,
} from "react-native";

function MainManageListings({ navigation }) {
	return (
		<View style={styles.accountPage}>
			<Image
				style={styles.pfp}
				source={{
					uri:
						"https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
				}}
			/>
			<Text style={{ fontSize: 20, top: 130, textAlign: "center" }}>
				Smith's account
			</Text>

			<TouchableOpacity
				style={styles.manageList}
				onPress={() => navigation.navigate("ManageListingPage")}
			>
				<Text style={{ fontSize: 20, color: "white" }}>
					My Past Requests
				</Text>
			</TouchableOpacity>

			<TouchableOpacity style={styles.following}>
				<Text style={{ fontSize: 20, color: "white" }}>
					Requests I'm following
				</Text>
			</TouchableOpacity>

			<TouchableOpacity style={styles.settings}>
				<Text style={{ fontSize: 20, color: "white" }}>Settings</Text>
			</TouchableOpacity>

			<TouchableOpacity
				style={styles.aboutUs}
				onPress={() => navigation.navigate("About")}
			>
				<Text
					style={{
						fontSize: 20,
						color: "white",
					}}
				>
					About us
				</Text>
			</TouchableOpacity>

			<TouchableOpacity
				style={styles.logout}
				onPress={() =>
					Alert.alert("Logout", "Confirm Logout?", [
						{
							text: "Yes",
							onPress: () => navigation.navigate("Login"),
						},
						{ text: "No" },
					])
				}
			>
				<Text style={{ fontSize: 20, color: "white" }}>Logout</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	pfp: {
		justifyContent: "center",
		top: 30,
		width: 100,
		height: 100,
		aspectRatio: 1,
		position: "absolute",
		alignSelf: "center",
	},
	manageList: {
		backgroundColor: "#FE8A71",
		borderWidth: 1,
		borderRadius: 5,
		color: "white",
		fontSize: 14,
		fontWeight: "bold",
		padding: 12,
		textAlign: "center",
		justifyContent: "center",
		alignItems: "center",
		height: 50,
		top: 140,
		width: "90%",
		alignSelf: "center",
	},
	following: {
		backgroundColor: "#FE8A71",
		borderWidth: 1,
		borderRadius: 5,
		color: "white",
		fontSize: 14,
		fontWeight: "bold",
		padding: 12,
		textAlign: "center",
		justifyContent: "center",
		alignItems: "center",
		height: 50,
		top: 150,
		width: "90%",
		alignSelf: "center",
	},
	settings: {
		backgroundColor: "#FE8A71",
		borderWidth: 1,
		borderRadius: 5,
		color: "white",
		fontSize: 14,
		fontWeight: "bold",
		padding: 12,
		textAlign: "center",
		justifyContent: "center",
		alignItems: "center",
		height: 50,
		top: 160,
		width: "90%",
		alignSelf: "center",
	},
	aboutUs: {
		backgroundColor: "#FE8A71",
		borderWidth: 1,
		borderRadius: 5,
		color: "white",
		fontSize: 14,
		fontWeight: "bold",
		padding: 12,
		textAlign: "center",
		justifyContent: "center",
		alignItems: "center",
		height: 50,
		top: 170,
		width: "90%",
		alignSelf: "center",
	},
	logout: {
		backgroundColor: "#FE8A71",
		borderWidth: 1,
		borderRadius: 5,
		color: "white",
		fontSize: 14,
		fontWeight: "bold",
		padding: 12,
		textAlign: "center",
		justifyContent: "center",
		alignItems: "center",
		height: 50,
		top: 180,
		width: "90%",
		alignSelf: "center",
	},
	accountPage: {
		flex: 1,
		backgroundColor: "#F9D89C",
	},
});

export default MainManageListings;
