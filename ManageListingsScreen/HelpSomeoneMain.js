import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

function HelpSomeoneMain({ navigation }) {
  return (
    <>
      <View style="styles.onTop">
        <Text style={styles.header}>CanIGift</Text>
        <Text style={styles.question}>
          Who would you like to give to today?
        </Text>
      </View>

      <TouchableOpacity
        style={styles.businesses}
        onPress={() => navigation.navigate("OfferHelpBiz")}
      >
        <Text style={{ fontSize: 30, color: "white", fontWeight: "bold" }}>
          Businesses
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.families}
      onPress={() => navigation.navigate("OfferHelpFam")>
        <Text style={{ fontSize: 30, color: "white", fontWeight: "bold" }}>
          Families
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.individuals}
      onPress={() => navigation.navigate("OfferHelpIndiv")>
        <Text style={{ fontSize: 30, color: "white", fontWeight: "bold" }}>
          Individuals
        </Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  onTop: {
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  header: {
    alignSelf: "center",
    fontSize: 30,
    fontWeight: "bold",
    top: 23,
    color: "tomato",
  },
  question: {
    alignSelf: "center",
    fontSize: 20,
    top: 25,
    color: "tomato",
  },
  businesses: {
    justifyContent: "center",
    alignItems: "center",
    height: 130,
    top: 50,
    backgroundColor: "crimson",
  },
  families: {
    justifyContent: "center",
    alignItems: "center",
    height: 130,
    top: 70,
    backgroundColor: "tomato",
  },
  individuals: {
    justifyContent: "center",
    alignItems: "center",
    height: 130,
    top: 90,
    backgroundColor: "orange",
  },
});

export default HelpSomeoneMain;
