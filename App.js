import * as React from "react";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./app/screens/Home";
import AboutScreen from "./app/screens/About";
import SubmissionScreen from "./app/screens/Submitted";
import CompanyForm from "./app/screens/CompanyForm";
import FamilyForm from "./app/screens/FamilyForm";
import IndividualForm from "./app/screens/IndividualForm";
import LoginScreen from "./app/screens/Login";
import SignupScreen from "./app/screens/SignUp";
import PasswordScreen from "./app/screens/Password";
import HelpSomeoneScreen from "./app/screens/HelpSomeone";
import RequestScreen from "./app/screens/Request";
import MainManageListings from "./ManageListingsScreen/MainManageListings";
import EditListingDetails from "./ManageListingsScreen/EditListingDetails";
import ManageListingPage from "./ManageListingsScreen/ManageListingPage";
import OneListingPage from "./ManageListingsScreen/OneListingPage";
import MultipleListingsPage from "./ManageListingsScreen/MultipleListingsPage";
import ChatScreen from "./app/screens/Chat";
import ChatListScreen from "./app/screens/ChatList";
import ExternalPage from "./app/screens/External";
import HuFamilyRequest from "./ManageListingsScreen/HuFamilyRequest";
import MollyIndivRequest from "./ManageListingsScreen/MollyIndivRequest";
import BeautyClothingRequest from "./ManageListingsScreen/BeautyClothingRequest";
import { color } from "react-native-reanimated";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
	return (
		<Tab.Navigator
			tabBarOptions={{
				tabStyle: { borderRightWidth: 0.8 },
			}}
		>
			<Tab.Screen
				name="HelpSomeone"
				component={MultipleListingsPage}
				options={{
					title: "Support",
					tabBarLabel: "Support",
					tabBarIcon: ({ focused }) =>
						focused ? (
							<Image
								style={{
									width: 35,
									height: 35,
								}}
								source={require("./app/assets/help.jpg")}
							/>
						) : (
							<Image
								style={{
									width: 30,
									height: 30,
								}}
								source={require("./app/assets/help.jpg")}
							/>
						),
				}}
			/>
			<Tab.Screen
				name="Request"
				component={RequestScreen}
				options={{
					title: "Request",
					tabBarLabel: "Request",
					tabBarIcon: ({ focused }) =>
						focused ? (
							<Image
								style={{
									width: 20,
									height: 20,
								}}
								source={require("./app/assets/request.png")}
							/>
						) : (
							<Image
								style={{
									width: 20,
									height: 20,
								}}
								source={require("./app/assets/request.png")}
							/>
						),
				}}
			/>
			<Tab.Screen
				name="ChatList"
				component={ChatListScreen}
				options={{
					title: "Chat",
					tabBarLabel: "Message",
					tabBarIcon: ({ focused }) =>
						focused ? (
							<Image
								style={{
									width: 30,
									height: 30,
								}}
								source={require("./app/assets/chat.png")}
							/>
						) : (
							<Image
								style={{
									width: 30,
									height: 30,
								}}
								source={require("./app/assets/chat.png")}
							/>
						),
				}}
			/>
			<Tab.Screen
				name="MainManageListings"
				component={MainManageListings}
				options={{
					title: "Account",
					tabBarLabel: "Account",
					tabBarIcon: ({ focused }) =>
						focused ? (
							<Image
								style={{
									width: 30,
									height: 30,
								}}
								source={require("./app/assets/account.png")}
							/>
						) : (
							<Image
								style={{
									width: 30,
									height: 30,
								}}
								source={require("./app/assets/account.png")}
							/>
						),
				}}
			/>
		</Tab.Navigator>
	);
}

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					title: "CanIGive",
					headerStyle: {
						backgroundColor: "#FE8A71",
					},
					headerTintColor: "#fff",
					headerTitleStyle: {
						fontWeight: "bold",
					},
					headerTitleAlign: "center",
				}}
				initialRouteName="Home"
			>
				<Stack.Screen name="Login" component={LoginScreen} />
				<Stack.Screen name="Password" component={PasswordScreen} />
				<Stack.Screen name="Signup" component={SignupScreen} />
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="MainPage" component={HomeTabs} />
				<Stack.Screen name="About" component={AboutScreen} />
				<Stack.Screen name="External" component={ExternalPage} />

				<Stack.Screen
					name="IndividualForm"
					component={IndividualForm}
				/>
				<Stack.Screen
					name="ManageListingPage"
					component={ManageListingPage}
				/>
				<Stack.Screen
					name="SubmissionScreen"
					component={SubmissionScreen}
				/>

				<Stack.Screen name="CompanyForm" component={CompanyForm} />
				<Stack.Screen name="FamilyForm" component={FamilyForm} />

				<Stack.Screen
					name="MultipleListingsPage"
					component={MultipleListingsPage}
					options={{ title: "Support" }}
				/>
				<Stack.Screen
					name="HelpSomeone"
					component={HelpSomeoneScreen}
				/>
				<Stack.Screen name="Request" component={RequestScreen} />
				<Stack.Screen
					name="EditListingDetails"
					component={EditListingDetails}
					options={{ title: "Manage My Request(s)" }}
				/>
				<Stack.Screen
					name="OneListingPage"
					component={OneListingPage}
					options={{ title: "Request details" }}
				/>
				<Stack.Screen
					name="HuFamilyRequest"
					component={HuFamilyRequest}
					options={{ title: "Request details" }}
				/>
				<Stack.Screen
					name="MollyIndivRequest"
					component={MollyIndivRequest}
					options={{ title: "Request details" }}
				/>
				<Stack.Screen
					name="BeautyClothingRequest"
					component={BeautyClothingRequest}
					options={{ title: "Request details" }}
				/>
				<Stack.Screen
					name="MainManageListings"
					component={MainManageListings}
					options={{ title: "Account" }}
				/>
				<Stack.Screen name="Chat" component={ChatScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
