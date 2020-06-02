import * as React from "react";
import { Button, View, Text, StyleSheet, TextInput, Alert } from "react-native";
import styles from "../../styles/global";
//import Icon from 'react-native-vector-icons/Ionicons';  
//import { createBottomTabNavigator } from "react-navigation-bottom-tabs";


function HomeScreen({ navigation }) {
	return (
		<View
			style={{flex: 1, alignItems: "center", justifyContent: "center"}}
		>
			<View>
			<Text Text style={{ fontSize: 20, fontWeight: 'bold', textAlign:'center'}}>
				Welcome to CarouGift! 
			</Text>
			<Button
				color="crimson"
				paddingTop="100"
				title="About Us"
				onPress={() => navigation.navigate("About")}
			/>
			<Button
				color="crimson"
				paddingTop="100"
				title="Make a request"
				onPress={() => navigation.navigate("Request")}
			/>
			<Button
				color="crimson"
				paddingTop="100"
				title="Help Someone"
				onPress={() => navigation.navigate("HelpSomeone")}
			/>
		</View>
		<View>
			<Button
				color="orange"
				paddingTop="100"
				title="Manage My Listings"
				onPress={() => navigation.navigate("Profile")}
			/>
		</View>
		</View>
	);
}


  
export default HomeScreen;