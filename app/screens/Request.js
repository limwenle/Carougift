import * as React from "react";
import {
  Button,
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  Alert,
  Image,
  TouchableOpacity,
} from "react-native";

function RequestScreen({ navigation }) {
  return (
    <ScrollView
    //style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        I would like help for my ...{" "}
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate("CompanyForm")}>
        <Image
          source={{
            width: 600,
            height: 150,
            uri:
              "https://brand24.com/blog/wp-content/uploads/2018/04/pexels-photo-875514-2-750x300.jpeg",
          }}
        />
        <Button color="#FE8A71" paddingTop="100" title="Business" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("IndividualForm")}>
        <Image
          source={{
            width: 600,
            height: 150,
            uri:
              "https://i.insider.com/5d976efa707bdf0e5652a5b4?width=1100&format=jpeg&auto=webp",
          }}
        />
        <Button color="#FE8A71" paddingTop="100" title="Individual" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("FamilyForm")}>
        <Image
          source={{
            width: 420,
            height: 170,
            uri:
              "https://i.pinimg.com/originals/76/bc/46/76bc462ccf0345c87782cd32dc12121b.jpg",
          }}
        />
        <Button color="#FE8A71" paddingTop="150" title="Family" />
      </TouchableOpacity>
    </ScrollView>
  );
}

export default RequestScreen;
