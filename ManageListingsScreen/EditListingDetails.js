import React from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";

function EditListingDetails({ navigation }) {
  return (
    <>
      <ScrollView style={styles.scrollview}>
        <Text style={styles.header}>Request Details</Text>
        <Image
          source={{ uri: "https://picsum.photos/400/150" }}
          style={{ height: 150, width: 400, alignSelf: "center" }}
        />
        <Text
          style={{ fontSize: 30, fontStyle: "italic", textAlign: "center" }}
        >
          Here will include all the details of the request made.
        </Text>
        <TouchableOpacity
          style={styles.bar1}
          onPress={() => navigation.navigate("OneListingPage")}
        >
          <Text style={styles.barText}>View/Edit your request</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bar2}>
          <Text style={styles.barText}>View request updates</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bar3}
          onPress={() =>
            Alert.alert("Warning", "This action cannot be reversed, proceed?", [
              {
                text: "Yes",
                onPress: () => navigation.navigate("ManageListingPage"),
              },
              { text: "No" },
            ])
          }
        >
          <Text style={styles.barText}>Delete your request</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
}

export default EditListingDetails;

const styles = StyleSheet.create({
  header: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    top: 5,
    color: "#497DE9",
  },
  bar1: {
    height: 70,
    backgroundColor: "tomato",
    justifyContent: "center",
    width: "100%",
    alignSelf: "center",
  },
  bar2: {
    height: 70,
    backgroundColor: "tomato",
    justifyContent: "center",
    width: "100%",
    alignSelf: "center",
    position: "relative",
    top: 10,
  },
  bar3: {
    height: 90,
    backgroundColor: "tomato",
    justifyContent: "center",
    width: "100%",
    alignSelf: "center",
    position: "relative",
    top: 20,
  },
  barText: {
    textAlign: "center",
    fontSize: 20,
    alignItems: "center",
  },
});
