import React from "react";
import { Text, ScrollView, View, Image, StyleSheet } from "react-native";

function OfferHelpBusinesses({ navigation }) {
  return (
    <>
      <Text
        style={{
          fontSize: 40,
          top: 20,
          textAlign: "center",
          color: "tomato",
          fontWeight: "bold",
        }}
      >
        Businesses
      </Text>
      <Text
        style={{
          fontSize: 20,
          top: 20,
          justifyContent: "center",
          textAlign: "center",
          color: "tomato",
        }}
      >
        Help out your favourite shops which are struggling in this global health
        crisis.
      </Text>

      <ScrollView style={styles.scrollview}>
        <View
          style={{
            flex: 1,
            backgroundColor: "crimson",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={{ uri: "https://picsum.photos/300/200" }}
            style={{
              width: "30%",
              height: 120,
            }}
          />
          <Text
            style={{
              paddingLeft: 130,
              position: "absolute",
              textAlign: "center",
              justifyContent: "center",
              fontSize: 20,
              color: "white",
            }}
          >
            User A requesting for financial assistance.
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: "tomato",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={{ uri: "https://picsum.photos/200/300" }}
            style={{
              width: "30%",
              height: 120,
            }}
          />
          <Text
            style={{
              paddingLeft: 130,
              position: "absolute",
              textAlign: "center",
              justifyContent: "center",
              fontSize: 20,
              color: "white",
            }}
          >
            User B requesting for volunteers.
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: "orange",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={{ uri: "https://picsum.photos/200/300" }}
            style={{
              width: "30%",
              height: 120,
            }}
          />
          <Text
            style={{
              paddingLeft: 130,
              position: "absolute",
              textAlign: "center",
              justifyContent: "center",
              fontSize: 20,
              color: "white",
            }}
          >
            User C requesting for technical help.
          </Text>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  scrollview: {
    top: 30,
  },
});

export default OfferHelpBusinesses;