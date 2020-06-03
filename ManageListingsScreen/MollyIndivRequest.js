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

function MollyIndivRequest({ navigation }) {
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
            source={require("../app/assets/MollySew.jpg")}
            style={styles.HuFamilyImage}
          />

          <Text style={styles.sultanaHeading}>
            {"\n"}Molly's Mask Up Task! {"\n"}
          </Text>
        </View>

        <Unorderedlist style={styles.sultanaTop}>
          <Text>
            Campaign Name:
            <Text style={styles.underlineText}>Molly's Mask Up Task!</Text>
          </Text>
        </Unorderedlist>

        <Unorderedlist style={styles.sultanaTop}>
          <Text>
            Products requested:
            <Text style={styles.underlineText}>
              Sewing Machine loan, Sewing materials {"\n"}
            </Text>
          </Text>
        </Unorderedlist>

        <View>
          <Text style={styles.sultanaDescriptionHeading}>
            Description of situation
          </Text>
        </View>

        <Text style={styles.sultanaDescription}>
          Hello fellow SGeans!! I am Molly. I am a full time housewife, and me
          and my two daughters are at home the entire stay-home period. We all
          love to sew, and know how to sew masks at home from raw cloth.
          However, we only have one sewing machine at home. If you have any
          sewing machines at home and is not using them now, you can lend it to
          us temporarily! We are trying to make as many masks as possible and
          give them to the CCs. Any sewing materials like threads and cloth are
          welcome too! You can contact me with the chat and we can arrange a
          meetup. {"\n"}
        </Text>

        {/*
        <Image
          style={styles.progressBar}
          source={require("../app/assets/ProgressBar.png")}
        /> 

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

        <Text>{"\n"}</Text> */}

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

export default MollyIndivRequest;
