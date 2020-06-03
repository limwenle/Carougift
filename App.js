import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
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
import MainPage from "./app/screens/MainPage";
import MainManageListings from "./ManageListingsScreen.js/MainManageListings";
import ListingDetails from "./ManageListingsScreen.js/ListingDetails";
import ChatScreen from "./app/screens/Chat";
import ChatListScreen from "./app/screens/ChatList";

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
				<Stack.Screen name="Login" component={LoginScreen} />
				<Stack.Screen name="Password" component={PasswordScreen} />
				<Stack.Screen name="Signup" component={SignupScreen} />
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="MainPage" component={MainPage} />
				<Stack.Screen name="About" component={AboutScreen} />
				<Stack.Screen
					name="SubmissionScreen"
					component={SubmissionScreen}
				/>

				<Stack.Screen name="CompanyForm" component={CompanyForm} />
				<Stack.Screen name="FamilyForm" component={FamilyForm} />
				<Stack.Screen
					name="IndividualForm"
					component={IndividualForm}
				/>

				<Stack.Screen
					name="HelpSomeone"
					component={HelpSomeoneScreen}
				/>
				<Stack.Screen name="Request" component={RequestScreen} />
				<Stack.Screen
					name="ListingDetails"
					component={ListingDetails}
					options={{ title: "Listing Details" }}
				/>
				<Stack.Screen
					name="MainManageListings"
					component={MainManageListings}
					options={{ title: "Account" }}
				/>
				<Stack.Screen name="Chat" component={ChatScreen} />
				<Stack.Screen name="ChatList" component={ChatListScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
