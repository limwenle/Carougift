import React from "react";
import {
	Text,
	ScrollView,
	View,
	Image,
	StyleSheet,
	TouchableOpacity,
	Picker,
} from "react-native";

function MultipleListingsPage({ navigation }) {
	return (
		<>
			<Picker
				//selectedValue={selectedValue}
				style={{ height: 50, width: 410 }}
				//onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
			>
				<Picker.Item key={-1} label={"Filter By..."} value="first" />
				<Picker.Item label="Donations" value="java" />
				<Picker.Item label="Products" value="js" />
				<Picker.Item label="Services" value="js" />
			</Picker>
			<Text
				style={{
					fontSize: 40,
					top: 20,
					textAlign: "center",
					color: "tomato",
					fontWeight: "bold",
				}}
			>
				Help Requests
			</Text>
			<Text
				style={{
					fontSize: 20,
					top: 20,
					justifyContent: "center",
					textAlign: "center",
					color: "tomato",
				}}
			>
				Help out these people who are struggling in this global health
				crisis.
			</Text>

			<ScrollView style={{ top: 30 }}>
				<TouchableOpacity
					style={{
						flex: 1,
						backgroundColor: "crimson",
						alignContent: "center",
						justifyContent: "center",
					}}
					onPress={() => navigation.navigate("OneListingPage")}
				>
					<Image
						source={{
							uri:
								"https://s.yimg.com/uu/api/res/1.2/sM.jBOH2_j.eBjsmn3v1RQ--~B/aD0xOTM2O3c9MjU5MjtzbT0xO2FwcGlkPXl0YWNoeW9u/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2019-08/d7729310-c570-11e9-87fb-68abcc472697",
						}}
						style={{
							width: "30%",
							height: 120,
						}}
					/>
					<Text
						style={{
							paddingLeft: 130,
							position: "absolute",
							textAlign: "center",
							justifyContent: "center",
							fontSize: 20,
							color: "white",
						}}
					>
						Donate to help Sultana Bookstore stay afloat during the
						crisis.
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={{
						flex: 1,
						backgroundColor: "tomato",
						alignContent: "center",
						justifyContent: "center",
					}}
					onPress={() => navigation.navigate("OneListingPage")}
				>
					<Image
						source={{
							uri:
								"https://www.seriouseats.com/images/20110829-168346-singapore-hawker-center-curry-rice.jpg",
						}}
						style={{
							width: "30%",
							height: 120,
						}}
					/>
					<Text
						style={{
							paddingLeft: 130,
							position: "absolute",
							textAlign: "center",
							justifyContent: "center",
							fontSize: 20,
							color: "white",
						}}
					>
						Help Uncle Lee's business remain profitable in this
						crisis.
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={{
						flex: 1,
						backgroundColor: "orange",
						alignContent: "center",
						justifyContent: "center",
					}}
					onPress={() => navigation.navigate("OneListingPage")}
				>
					<Image
						source={{
							uri:
								"https://www.asiaone.com/sites/default/files/original_images/Jan2016/20160124_850_bigfamily_tnp.jpg",
						}}
						style={{
							width: "30%",
							height: 120,
						}}
					/>
					<Text
						style={{
							paddingLeft: 130,
							position: "absolute",
							textAlign: "center",
							justifyContent: "center",
							fontSize: 20,
							color: "white",
						}}
					>
						Help Alice, who doesn't have access to a laptop for
						home-based learning.
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={{
						flex: 1,
						backgroundColor: "pink",
						alignContent: "center",
						justifyContent: "center",
					}}
					onPress={() => navigation.navigate("OneListingPage")}
				>
					<Image
						source={{
							uri:
								"https://shopsinsg.com/wp-content/uploads/2016/09/joop-clothing-store-white-sands-singapore.jpg",
						}}
						style={{
							width: "30%",
							height: 120,
						}}
					/>
					<Text
						style={{
							paddingLeft: 130,
							position: "absolute",
							textAlign: "center",
							justifyContent: "center",
							fontSize: 20,
							color: "white",
						}}
					>
						Requesting for technical service to setup online shop
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={{
						flex: 1,
						backgroundColor: "dodgerblue",
						alignContent: "center",
						justifyContent: "center",
					}}
					onPress={() => navigation.navigate("OneListingPage")}
				>
					<Image
						source={{
							uri:
								"https://pmrpressrelease.com/wp-content/uploads/2019/04/Other-Sewing-Supplies.jpg",
						}}
						style={{
							width: "30%",
							height: 120,
						}}
					/>
					<Text
						style={{
							paddingLeft: 130,
							position: "absolute",
							textAlign: "center",
							justifyContent: "center",
							fontSize: 20,
							color: "white",
						}}
					>
						Provide sewing materials for Mdm Rosli to sew masks for
						our health workers.
					</Text>
				</TouchableOpacity>
			</ScrollView>
		</>
	);
}

const styles = StyleSheet.create({
	//   scrollview: {
	//     top: 30,
	//   },
});

export default MultipleListingsPage;
