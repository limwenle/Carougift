import React from "react";
import {
	Text,
	ScrollView,
	Image,
	View,
	StyleSheet,
	TouchableOpacity,
	Picker,
} from "react-native";
import styles from "../styles/global";

function MultipleListingsPage({ navigation }) {
	return (
		<ScrollView style={{ backgroundColor: "#F9D89C" }}>
			<View style={{ borderWidth: 2 }}>
				<Picker
					//selectedValue={selectedValue}
					style={{ height: 50, width: 410 }}
					//onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
				>
					<Picker.Item
						key={-1}
						label={"Filter By..."}
						value="first"
					/>
					<Picker.Item label="Donations" value="java" />
					<Picker.Item label="Products" value="js" />
					<Picker.Item label="Services" value="js" />
				</Picker>
			</View>
			{/* 
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
			</Text> */}
			<Text
				style={{
					fontSize: 20,
					top: 20,
					justifyContent: "center",
					textAlign: "left",
					color: "black",
					backgroundColor: "#F9D89C",
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
							left: 60,
						}}
					>
						Sultana Book Store
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={{
						flex: 1,
						backgroundColor: "tomato",
						alignContent: "center",
						justifyContent: "center",
					}}
					onPress={() => navigation.navigate("MollyIndivRequest")}
				>
					<Image
						source={require("../app/assets/MollySew.jpg")}
						style={styles.MlpHu}
					/>
					<Text
						style={{
							paddingLeft: 130,
							position: "absolute",
							textAlign: "center",
							justifyContent: "center",
							fontSize: 20,
							color: "white",
							left: 50,
						}}
					>
						Molly's Mask Up Task!
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={{
						flex: 1,
						backgroundColor: "orange",
						alignContent: "center",
						justifyContent: "center",
					}}
					onPress={() => navigation.navigate("HuFamilyRequest")}
				>
					<Image
						source={require("../app/assets/HuFamily.jpeg")}
						style={styles.MlpHu}
					/>
					<Text
						style={{
							paddingLeft: 130,
							position: "absolute",
							textAlign: "center",
							justifyContent: "center",
							fontSize: 20,
							color: "white",
							left: 90,
						}}
					>
						Hu Family
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={{
						flex: 1,
						backgroundColor: "pink",
						alignContent: "center",
						justifyContent: "center",
					}}
					onPress={() => navigation.navigate("BeautyClothingRequest")}
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
						Beauty Clothing Website Building Help
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
		</ScrollView>
	);
}
/* 
const styles = StyleSheet.create({
  //   scrollview: {
  //     top: 30,
  //   },
}); */

export default MultipleListingsPage;
