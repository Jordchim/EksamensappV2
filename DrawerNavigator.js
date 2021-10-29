import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {createDrawerNavigator, DrawerItem} from "@react-navigation/drawer";
import HomeScreen from "./components/HomeScreen";
import ProfileScreen from "./components/ProfileScreen";
import GuestPage from "./App";
import currentUser from "./components/currentUser";
import {Button, StyleSheet, Text, View} from "react-native";
import firebase from "firebase";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const screenOptionStyle = {
    headerStyle: {
        backgroundColor: "#9AC4F8",
    },
    headerTintColor: "white",
    headerBackTitle: "Back",
};

function LogOut() {

    //handleLogout håndterer log ud af en aktiv bruger.
    //Metoden er en prædefineret metode, som firebase stiller tilrådighed
    //Metoden er et asynkrontkald.
    const handleLogOut = async () => {
        await firebase.auth().signOut();
    };

    //Hvis der af en eller anden grund ikke skulle være muligt at fremfinde den aktive bruger,
    //skal der udprintes en besked om dette igennem en tekstkomponent
    if (!firebase.auth().currentUser) {
        return <View><Text>Not found</Text></View>;
    }

    return (
    <View style={styles.container}>
        <Text>Er du sikker på, at du vil logge ud?</Text>
        <Button style={styles.button} onPress={() => handleLogOut()} title="Log out"/>
    </View>
    )
}

const ContactStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle} initialRouteName={HomeScreen}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Logout" component={GuestPage} />
        </Stack.Navigator>
    );
};

//<DrawerItem label={{"Bruger": firebase.auth().currentUser.email}} onPress={ProfileScreen}/>

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="currentUser" component={currentUser}/>
            <Drawer.Screen name="Home" component={ContactStackNavigator} />
            <Drawer.Screen name="Profile" component={ProfileScreen} />
            <Drawer.Screen name="Log out" component={LogOut} />
        </Drawer.Navigator>
    );
};


export default DrawerNavigator;

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
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'green',
    }
});