import React, { useState } from "react";
import {
	ScrollView,
	Text,
	StyleSheet,
	View,
	Image,
	TouchableOpacity,
	Alert,
} from "react-native";
import styles from "../styles/global";
import Unorderedlist from "react-native-unordered-list";
import * as Progress from "react-native-progress";

function OneListingPage({ navigation }) {
	return (
		<>
			<ScrollView style={styles.sultanaPage}>
				{/*
        <Text style={styles.header}>Campaign for Sultana</Text>
        
        <Text style={{ fontSize: 18, textAlign: "center", color: "#497DE9" }}>
          Here is how you can help.
        </Text>
        */}

				<View>
					<Image
						source={{
							uri:
								"https://s.yimg.com/uu/api/res/1.2/sM.jBOH2_j.eBjsmn3v1RQ--~B/aD0xOTM2O3c9MjU5MjtzbT0xO2FwcGlkPXl0YWNoeW9u/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2019-08/d7729310-c570-11e9-87fb-68abcc472697",
						}}
						style={{
							width: 415,
							height: 250,
							alignSelf: "center",
						}}
					/>

					<Text style={styles.sultanaHeading}>
						{"\n"}Sultana Book Store {"\n"}
					</Text>
				</View>

				<Unorderedlist style={styles.sultanaTop}>
					<Text>
						Company Name:
						<Text style={styles.underlineText}>
							Sultana Book Store
						</Text>
					</Text>
				</Unorderedlist>

				<Unorderedlist style={styles.sultanaTop}>
					<Text>
						UEN Number:
						<Text style={styles.underlineText}>12345678A</Text>
					</Text>
				</Unorderedlist>

				<Unorderedlist style={styles.sultanaTop}>
					<Text>
						Target Fund:
						<Text style={styles.underlineText}>$1,000 {"\n"}</Text>
					</Text>
				</Unorderedlist>

				<View>
					<Text style={styles.sultanaDescriptionHeading}>
						Description of situation
					</Text>
				</View>

				<Text style={styles.sultanaDescription}>
					My wife and I owns the bookstore. Due to the COVID-19
					situation, we have not been able to operate for the past 2
					months. Though there have been grants given by the
					government, we are unable to sustain our losses at this
					rate. We are seeking donations to keep our old-fashioned
					bookstore afloat. Any amount will be appreciated, thank you!{" "}
					{"\n"}
				</Text>

				{/*
        <Image
          style={styles.progressBar}
          source={require("../app/assets/ProgressBar.png")}
        /> */}

				<Text>
					<Text style={styles.boldText}>$477</Text>
					of $1,000 raised
				</Text>
				<Progress.Bar
					progress={0.477}
					width={412}
					height={20}
					color={"green"}
					borderColor={"black"}
					borderWidth={1}
				/>

				<Text>{"\n"}</Text>

				<TouchableOpacity
					onPress={() =>
						Alert.alert(
							"Confirmation",
							"You will be linked to the person who made the request. Proceed?",
							[
								{
									text: "Yes",
									onPress: () =>
										navigation.navigate("ChatList"),
								},
								{ text: "No" },
							]
						)
					}
				>
					<Text style={styles.loginButton}>
						I would like to help!
					</Text>
				</TouchableOpacity>

				{/* 
        <TouchableOpacity
          style={{
            height: 80,
            alignSelf: "center",
            backgroundColor: "crimson",
            position: "relative",
            top: 10,
            justifyContent: "center",
            alignItems: "center",
            width: "80%",
          }}
          onPress={() => Alert.alert("$800 has been raised!")}
        >
          <Text style={{ fontSize: 20, color: "white" }}>
            Click here for the progress!
          </Text>
        </TouchableOpacity>
        

        <TouchableOpacity
          style={{
            height: 80,
            alignSelf: "center",
            backgroundColor: "tomato",
            position: "relative",
            top: 10,
            justifyContent: "center",
            alignItems: "center",
            width: "80%",
          }}
          onPress={() =>
            Alert.alert(
              "Confirmation",
              "You will be linked to the person who made the request. Proceed?",
              [
                {
                  text: "Yes",
                  onPress: () => navigation.navigate("MultipleListingsPage"),
                },
                { text: "No" },
              ]
            )
          }
        >
          <Text style={{ fontSize: 20, color: "white" }}>
            I would like to help
          </Text>
        </TouchableOpacity>

        */}
			</ScrollView>
		</>
	);
}

{
	/*
const styles = StyleSheet.create({
  header: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    top: 5,
    color: "tomato",
  },
});
*/
}

export default OneListingPage;
