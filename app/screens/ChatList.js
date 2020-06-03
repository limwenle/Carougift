import React from "react";
import { Text, ScrollView, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import styles from "../../styles/global";

function ChatList({ navigation }) {
  return (
    <View style={{backgroundColor: "#F9D89C"}}>
      <Text
        style={{
          fontSize: 20,
          top: 20,
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Chats
      </Text>
      <ScrollView style={styles_chatlist.scrollview}>
      <TouchableOpacity
					style={{
						flex: 1,
						backgroundColor: "white",
						alignContent: "center",
						justifyContent: "center",
					}}
					onPress={() => navigation.navigate("Chat")}
				>
					<Image
						source={{
							uri:
								"https://s.yimg.com/uu/api/res/1.2/sM.jBOH2_j.eBjsmn3v1RQ--~B/aD0xOTM2O3c9MjU5MjtzbT0xO2FwcGlkPXl0YWNoeW9u/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2019-08/d7729310-c570-11e9-87fb-68abcc472697",
						}}
						style={{
							width: "30%",
							height: 120,
						}}
					/>
          <Text
            style={{
              top: 20,
              textAlign: "left",
              paddingLeft: 130,
							position: "absolute",
            }}
          >
            <Text style={{fontSize: 20, fontWeight: "bold"}}> Lim Wen Le </Text>
            {'\n'}
            <Text style={{fontSize: 15, fontStyle: "italic"}}> Sultana Bookstore </Text>
            {'\n'}{'\n'}
            <Text style={{color: 'grey', fontSize: 15, fontStyle: "italic"}}> Hello! Thank you for your donati... </Text>
          </Text>
				</TouchableOpacity>

        <TouchableOpacity
					style={{
						flex: 1,
						backgroundColor: "#fff6d9",
						alignContent: "center",
						justifyContent: "center",
					}}
					onPress={() => navigation.navigate("Chat")}
				>
					<Image
						source={{
							uri:
								"https://nusmedicine.nus.edu.sg/images/resources/newsinfo/May2019/newsinfomain_ITE-Graduate_270519.jpg",
						}}
						style={{
							width: "30%",
							height: 120,
						}}
					/>
          <Text
            style={{
              top: 20,
              textAlign: "left",
              paddingLeft: 130,
							position: "absolute",
            }}
          >
            <Text style={{fontSize: 20, fontWeight: "bold"}}> Cheong Zhi Jing </Text>
            {'\n'}
            <Text style={{fontSize: 15, fontStyle: "italic"}}> Freshman in NUS </Text>
            {'\n'}{'\n'}
            <Text style={{color: 'grey', fontSize: 15, fontStyle: "italic"}}> I recently came across your listi... </Text>
          </Text>
				</TouchableOpacity>

        <TouchableOpacity
					style={{
						flex: 1,
						backgroundColor: "white",
						alignContent: "center",
						justifyContent: "center",
					}}
					onPress={() => navigation.navigate("Chat")}
				>
					<Image
						source={{
							uri:
								"https://images.squarespace-cdn.com/content/v1/5494b8f5e4b0d7d16a2b75d4/1467751816887-VY8PQ439BC045MOOM7P4/ke17ZwdGBToddI8pDm48kL0ahr_9pGJA1oNb6oG6xLhZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVFU9jdruave4O4DuxTytA29YXcT16bnEevtTA4ZuotxGgSoCsz8Vx8n618MG-PiSp4/florist-signage",
						}}
						style={{
							width: "30%",
							height: 120,
						}}
					/>
          <Text
            style={{
              top: 20,
              textAlign: "left",
              paddingLeft: 130,
							position: "absolute",
            }}
          >
            <Text style={{fontSize: 20, fontWeight: "bold"}}> Seah Shi Lin </Text>
            {'\n'}
            <Text style={{fontSize: 15, fontStyle: "italic"}}> Bloom Florist Online Store </Text>
            {'\n'}{'\n'}
            <Text style={{color: 'grey', fontSize: 15, fontStyle: "italic"}}> Hi, nice to meet you, I was hop... </Text>
          </Text>
				</TouchableOpacity>

        <TouchableOpacity
					style={{
						flex: 1,
						backgroundColor: "#fff6d9",
						alignContent: "center",
						justifyContent: "center",
					}}
					onPress={() => navigation.navigate("Chat")}
				>
					<Image
						source={{
							uri:
								"https://foreverunafraid.files.wordpress.com/2012/02/china_family.jpg",
						}}
						style={{
							width: "30%",
							height: 120,
						}}
					/>
          <Text
            style={{
              top: 20,
              textAlign: "left",
              paddingLeft: 130,
							position: "absolute",
            }}
          >
            <Text style={{fontSize: 20, fontWeight: "bold"}}> Ong Yi En </Text>
            {'\n'}
            <Text style={{fontSize: 15, fontStyle: "italic"}}> Ong Family </Text>
            {'\n'}{'\n'}
            <Text style={{color: 'grey', fontSize: 15, fontStyle: "italic"}}> Good morning! I would like to tha... </Text>
          </Text>
				</TouchableOpacity>

      </ScrollView>

      </View>
  );
}

const styles_chatlist = StyleSheet.create({
  scrollview: {
    top: 30,
  },
});

export default ChatList;
