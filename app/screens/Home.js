import * as React from "react";
import {
	Button,
	View,
	Text,
	StyleSheet,
	TextInput,
	Alert,
	Image,
	ImageBackground,
} from "react-native";
import styles from "../../styles/global";

function HomeScreen({ navigation }) {
	return (
		<View
			style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
		>
			<Image
				source={{
					width: 200,
					height: 300,
					uri: "https://picsum.photos/200/300",
				}}
			/>
			<Text>
				{"\n"}Welcome to CanIGift!{"\n"}
			</Text>
			<Button
				color="crimson"
				paddingTop="100"
				title="Who are we"
				onPress={() => navigation.navigate("About")}
			/>

			{/*
      <Button
        color="crimson"
        paddingTop="100"
        title="Make a request"
        onPress={() => navigation.navigate("ReviewForm")}
	  />
	*/}

			<Button
				color="crimson"
				paddingTop="100"
				title="Log In"
				onPress={() => navigation.navigate("Login")}
			/>
		</View>
	);
}

export default HomeScreen;
