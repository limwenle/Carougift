import React from "react";
import { Text, ScrollView, View, Image, StyleSheet, TouchableOpacity } from "react-native";

function ChatList({ navigation }) {
  return (
    <>
      <Text
        style={{
          fontSize: 20,
          top: 20,
          textAlign: "center",
          //color: "tomato",
          fontWeight: "bold",
        }}
      >
        Chats
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
            source={{
                width: 100,
                height: 100,
                uri :
                "https://brand24.com/blog/wp-content/uploads/2018/04/pexels-photo-875514-2-750x300.jpeg"
            }}
          />

          <TouchableOpacity style={styles.manageList}>
                <Text 
                style={{ fontSize: 20, color: "white" }}
                onPress={() => navigation.navigate("Chat")}
                >
					@LimWenLe
				</Text>
			</TouchableOpacity>
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
            source={{
                width: 100,
                height: 110,
                uri :
                "https://brand24.com/blog/wp-content/uploads/2018/04/pexels-photo-875514-2-750x300.jpeg"
            }}
          />
            <TouchableOpacity style={styles.manageList}>
                <Text 
                style={{ fontSize: 20, color: "white" }}
                onPress={() => navigation.navigate("Chat")}
                >
					@SeahShiLin
				</Text>
			</TouchableOpacity>
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
            source={{
                width: 100,
                height: 100,
                uri :
                "https://brand24.com/blog/wp-content/uploads/2018/04/pexels-photo-875514-2-750x300.jpeg"
            }}
          />
            <TouchableOpacity style={styles.manageList}>
                <Text 
                style={{ fontSize: 20, color: "white" }}
                onPress={() => navigation.navigate("Chat")}
                >
					@CheongZhiJing
				</Text>
			</TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: "pink",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={{
                width: 100,
                height: 100,
                uri :
                "https://brand24.com/blog/wp-content/uploads/2018/04/pexels-photo-875514-2-750x300.jpeg"
            }}
          />
            <TouchableOpacity style={styles.manageList}>
                <Text 
                style={{ fontSize: 20, color: "white" }}
                onPress={() => navigation.navigate("Chat")}
                >
					@OngYiEn
				</Text>
			</TouchableOpacity>
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

export default ChatList;
