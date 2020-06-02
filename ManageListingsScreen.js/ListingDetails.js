function ListingDetails({ navigation }) {
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
        Listing details
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
        Posted by user A
      </Text>
      <View style={{ alignItems: "center", top: 20 }}>
        <Image
          source={require("./app/assets/elephant.png")}
          style={{
            width: "30%",
            height: 120,
          }}
        />
        <Text
          style={{
            fontSize: 20,
            top: 20,
            justifyContent: "center",
            textAlign: "center",
            color: "tomato",
          }}
        >
          User is currently seeking for help! Listing details here.
        </Text>
      </View>
    </>
  );
}
