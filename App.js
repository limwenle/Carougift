import * as React from "react";
import { Button, View, Text, StyleSheet, TextInput, Alert } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./app/screens/Home";
import AboutScreen from "./app/screens/About";
import ReviewForm from "./app/screens/reviewForm";
import SubmissionScreen from "./app/screens/Submitted";

const Stack = createStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerStyle: {
						backgroundColor: "#FF7F00",
					},
					headerTintColor: "#fff",
					headerTitleStyle: {
						fontWeight: "bold",
					},
					headerTitleAlign: "center",
					title: "CarouGift",
				}}
				initialRouteName="Home"
			>
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="About" component={AboutScreen} />
				<Stack.Screen name="ReviewForm" component={ReviewForm} />
				<Stack.Screen
					name="SubmissionScreen"
					component={SubmissionScreen}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
