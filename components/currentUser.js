import React from "react";
import {Button, StyleSheet, Text, View} from "react-native";
import firebase from "firebase";
import {DrawerItem} from "@react-navigation/drawer";
import ProfileScreen from "./ProfileScreen";

export default function currentUser() {
    return (
        <DrawerItem label="bruger" onPress={ProfileScreen}>
            <Text>Bruger: {firebase.auth().currentUser.email}</Text>
        </DrawerItem>

    )
}