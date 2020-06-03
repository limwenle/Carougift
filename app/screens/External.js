import * as React from "react";
import { View, Text } from "react-native";
import styles from "../../styles/global";

function ExternalPage({ navigation }) {
  return (
    <View style={styles.externalPage}>
      <Text style={styles.externalPageText}>
        {"\n"}The button you just pressed is meant to be directed to an external
        page, which will be linked to our database or external databases.{"\n"}
      </Text>
    </View>
  );
}

export default ExternalPage;
