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

function BeautyClothingRequest({ navigation }) {
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
                "https://shopsinsg.com/wp-content/uploads/2016/09/joop-clothing-store-white-sands-singapore.jpg",
            }}
            style={{
              width: 415,
              height: 250,
              alignSelf: "center",
            }}
          />

          <Text style={styles.sultanaHeading}>
            {"\n"}Beauty Clothing Website Building Help {"\n"}
          </Text>
        </View>

        <Unorderedlist style={styles.sultanaTop}>
          <Text>
            Campaign Name:
            <Text style={styles.underlineText}>
              Beauty Clothing Website Building Help
            </Text>
          </Text>
        </Unorderedlist>

        <Unorderedlist style={styles.sultanaTop}>
          <Text>
            Company Name:
            <Text style={styles.underlineText}>Beauty Clothing</Text>
          </Text>
        </Unorderedlist>

        <Unorderedlist style={styles.sultanaTop}>
          <Text>
            UEN Number:
            <Text style={styles.underlineText}>12345678B {"\n"}</Text>
          </Text>
        </Unorderedlist>

        <View>
          <Text style={styles.sultanaDescriptionHeading}>
            Description of situation
          </Text>
        </View>

        <Text style={styles.sultanaDescription}>
          Hello I am the owner of Beauty Clothing, a physical clothes shop in
          Greenridge Shopping Centre. I am unable to keep up with the rental
          costs, and have moved all my stocks out of my shop because I cannot
          afford anymore. They are now at home and I am trying to clear them
          using a website, my son has been helping me but he does not know
          exactly how to create a website online. Are there anyone here who
          knows how to build a website? Please contact me, thank you. {"\n"}
        </Text>

        <TouchableOpacity
          onPress={() =>
            Alert.alert(
              "Confirmation",
              "You will be linked to the person who made the request. Proceed?",
              [
                {
                  text: "Yes",
                  onPress: () => navigation.navigate("Chat"),
                },
                { text: "No" },
              ]
            )
          }
        >
          <Text style={styles.loginButton}>I would like to help!</Text>
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
    color: "#497DE9",
  },
});
*/
}

export default BeautyClothingRequest;
