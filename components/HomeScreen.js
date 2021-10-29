import {Button, StyleSheet, Text, View, TextInput, SafeAreaView, StatusBar, ScrollView} from "react-native";
import * as React from "react";
import firebase from "firebase";
import FlatListComponent from "./FlatListComponent";
import ArrayListSaloner from "./ArrayListSaloner";
import CalenderPicker from "./CalenderPicker";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {NavigationContainer} from "@react-navigation/native";
import ProfileScreen from "./ProfileScreen";

//HomeScreen komponenten tager en prop med og printer indholdet af denne i en <Text/>
export default function HomeScreen ({prop}) {
    const [text, onChangeText] = React.useState("Useless Text");

    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.text}>{prop}</Text>
                <Text>Bruger: {firebase.auth().currentUser.email}</Text>
                <View style={styles.container}>
                    <Text style={styles.text}>{prop}</Text>
                </View>

                <SafeAreaView>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text}
                    />
                </SafeAreaView>
                <View style={styles.container}>
                    <StatusBar style="auto" />
                    <ArrayListSaloner/>
                    <View>
                        <CalenderPicker/>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

//Lokal styling til brug i HomeScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: '5%',
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    text: {
        fontSize: 20,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }
});