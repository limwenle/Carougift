import * as React from "react";
import {
	TouchableOpacity,
	Button,
	View,
	Text,
	StyleSheet,
	TextInput,
	Alert,
	Image,
	ImageBackground,
	Picker
} from "react-native";
//import Icon from 'react-native-vector-icons/Ionicons';
//import { createBottomTabNavigator } from "react-navigation-bottom-tabs";
//import { SearchBar } from 'react-native-elements'
//import DropdownMenu from 'react-native-dropdown-menu';
import ModalDropdown from 'react-native-modal-dropdown';
import DropDownPicker from 'react-native-dropdown-picker';

function MainPage({ navigation }) {
	return (
		<View
			style={{
				flex: 1,
				//flexDirection: 'row',
				alignItems: "center",
				justifyContent: "center",
				backgroundColor: "#C7F1E5",
			}}
		>
			<View
				style={{
					flex: 0.5,
					alignContent: "stretch",
					position: 'absolute',
					bottom: 560,
					//left: 0,
					//justifyContent: "flex-start",
					//alignContent:"flex-start",
					backgroundColor: "white",
				}}
			>

				{/* <DropDownPicker
					items={[
						{label: 'Filter', value: 'B'},
						{label: 'Media', value: 'Media'},
						{label: 'Charity', value: 'Charity'},
					]}
					labelStyle={{fontSize: 20, color: "grey"}}
					containerStyle={{width: 410, height: 50}}

					//containerStyle={{height: 40}}
					//onChangeItem={item => console.log(item.label, item.value)}
					//<ModalDropdown options={['Technology', 'Environmental']}/>
				/> */}
			<Picker
				//selectedValue={selectedValue}
				style={{ height: 50, width: 410 }}
				//onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
			>
				<Picker.Item key={-1} label={'Filter By...'} value="first" />
				<Picker.Item label="Donations" value="java" />
				<Picker.Item label="Products" value="js" />
				<Picker.Item label="Services" value="js" />
			</Picker>

			</View>

			<Text
				Text
				style={{
					fontSize: 20,
					fontWeight: "bold",
					textAlign: "center",
				}}
			>
				Welcome to CarouGift!
			</Text>
			<Button
				color="#497DE9"
				paddingTop="100"
				title="Who are we"
				title="About Us"
				onPress={() => navigation.navigate("About")}
			/>
			<Button
				color="#497DE9"
				paddingTop="100"
				title="Request for help"
				onPress={() => navigation.navigate("Request")}
			/>

      <Button
        color="#Fe8a71"
        paddingTop="100"
        title="Help Someone"
        onPress={() => navigation.navigate("HelpSomeone")}
      />

			<Button
				color="#497DE9"
				paddingTop="100"
				title="View my account"
				onPress={() => navigation.navigate("MainManageListings")}
			/>		
		</View>
	);
}

export default MainPage;
