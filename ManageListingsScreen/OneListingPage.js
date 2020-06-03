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

function OneListingPage({ navigation }) {
  return (
    <>
      <Text style={styles.header}>Sultana Bookstore Request</Text>
      <Text style={{ fontSize: 18, textAlign: "center", color: "tomato" }}>
        Here is how you can help.
      </Text>

      <View>
        <Image
          source={{
            uri:
              "https://s.yimg.com/uu/api/res/1.2/sM.jBOH2_j.eBjsmn3v1RQ--~B/aD0xOTM2O3c9MjU5MjtzbT0xO2FwcGlkPXl0YWNoeW9u/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2019-08/d7729310-c570-11e9-87fb-68abcc472697",
          }}
          style={{ width: 300, height: 152, alignSelf: "center" }}
        />
      </View>

      <Text style={{ textAlign: "center", fontSize: 18, color: "black" }}>
        My wife and I owns the bookstore. Due to the COVID-19 situation, we have
        not been able to operate. Though there have been grants given by the
        government, we are unable to sustain our losses at this rate. We are
        seeking donations to keep our old-fashioned bookstore afloat. Any amount
        will be appreciated, thank you!
      </Text>

      <Text
        style={{
          textAlign: "center",
          fontSize: 20,
          color: "maroon",
          top: 5,
        }}
      >
        Target Amount: $1000
      </Text>

      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderRadius: 5,
          color: "white",
          fontSize: 14,
          fontWeight: "bold",
          padding: 12,
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          height: 70,
          alignSelf: "center",
          backgroundColor: "#FE8A71",
          position: "relative",
          top: 10,
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
          borderWidth: 1,
          borderRadius: 5,
          color: "white",
          fontSize: 14,
          fontWeight: "bold",
          padding: 12,
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          height: 70,
          alignSelf: "center",
          backgroundColor: "tomato",
          position: "relative",
          top: 10,
          width: "80%",
        }}
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
        <Text style={{ fontSize: 20, color: "white" }}>
          I would like to help
        </Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    top: 5,
    color: "tomato",
  },
});

export default OneListingPage;
