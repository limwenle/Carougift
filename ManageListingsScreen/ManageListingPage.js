import React from "react";
import { Text, View, StyleSheet, ScrollView, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

function ManageListingPage({ navigation }) {
  return (
    <>
      <ScrollView>
        <Text style={styles.header}>Manage My Requests</Text>
        <TouchableOpacity
          style={{ top: 5 }}
          onPress={() => navigation.navigate("EditListingDetails")}
        >
          <Image
            source={{ uri: "https://picsum.photos/400/150" }}
            style={{ height: 150, width: 400, alignSelf: "center" }}
          />
          <Text style={styles.requestDetails}>Request for technical help</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ top: 5 }}
          onPress={() => navigation.navigate("EditListingDetails")}
        >
          <Image
            source={{ uri: "https://picsum.photos/400/150" }}
            style={{ height: 150, width: 400, alignSelf: "center" }}
          />
          <Text style={styles.requestDetails}>Request for financial help</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ top: 5 }}
          onPress={() => navigation.navigate("EditListingDetails")}
        >
          <Image
            source={{ uri: "https://picsum.photos/400/150" }}
            style={{ height: 150, width: 400, alignSelf: "center" }}
          />
          <Text style={styles.requestDetails}>Request for services</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ top: 5 }}
          onPress={() => navigation.navigate("ListingDetails")}
        >
          <Image
            source={{ uri: "https://picsum.photos/400/150" }}
            style={{ height: 150, width: 400, alignSelf: "center" }}
          />
          <Text style={styles.requestDetails}>Request for assistance</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    top: 5,
    color: "#497DE9",
  },
  requestDetails: {
    fontSize: 20,
    fontStyle: "italic",
    textAlign: "center",
  },
});

export default ManageListingPage;
