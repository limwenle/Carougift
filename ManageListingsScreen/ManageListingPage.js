import React from "react";
import {
	Text,
	View,
	StyleSheet,
	ScrollView,
	Image,
	TouchableOpacity,
	Alert,
} from "react-native";

function ManageListingPage({ navigation }) {
	return (
		<>
			<ScrollView>
				<Text style={styles.header}>Manage My Past Requests</Text>
				<View style={{ flex: 1, flexDirection: "row", paddingTop: 10 }}>
					<Image
						source={{
							uri:
								"https://s.yimg.com/uu/api/res/1.2/sM.jBOH2_j.eBjsmn3v1RQ--~B/aD0xOTM2O3c9MjU5MjtzbT0xO2FwcGlkPXl0YWNoeW9u/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2019-08/d7729310-c570-11e9-87fb-68abcc472697",
						}}
						style={{ height: 200, width: "70%" }}
					/>
					<View
						style={{
							flex: 1,
							flexDirection: "column",
						}}
					>
						<View style={{ top: 10 }}>
							<TouchableOpacity>
								<Image
									source={{
										uri:
											"https://image.flaticon.com/icons/png/512/1825/1825931.png",
									}}
									style={{
										width: 40,
										height: 40,
										alignSelf: "center",
									}}
								/>
							</TouchableOpacity>
						</View>
						<View style={{ top: 40 }}>
							<TouchableOpacity>
								<Image
									source={{
										uri:
											"https://image.flaticon.com/icons/png/512/87/87578.png",
									}}
									style={{
										width: 40,
										height: 40,
										alignSelf: "center",
									}}
								/>
							</TouchableOpacity>
						</View>
						<View style={{ top: 75 }}>
							<TouchableOpacity
								onPress={() =>
									Alert.alert(
										"Warning",
										"Deletion cannot be reversed, proceed?",
										[{ text: "Yes" }, { text: "No" }]
									)
								}
							>
								<Image
									source={{
										uri:
											"https://www.shareicon.net/data/512x512/2016/01/05/698410_trash_512x512.png",
									}}
									style={{
										width: 40,
										height: 40,
										alignSelf: "center",
									}}
								/>
							</TouchableOpacity>
						</View>
					</View>
				</View>
				<View>
					<Text style={{ fontSize: 24, textAlign: "left" }}>
						Sultanah Book Store
					</Text>
				</View>
			</ScrollView>
		</>
	);
}

const styles = StyleSheet.create({
	header: {
		fontSize: 26,
		fontWeight: "bold",
		textAlign: "center",
		top: 5,
		color: "#FE8A71",
	},
	requestDetails: {
		fontSize: 20,
		fontStyle: "italic",
		textAlign: "center",
	},
	backgroundColor: {
		flex: 1,
		backgroundColor: "#F9D89C",
	},
});

export default ManageListingPage;
