import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import firebase from 'firebase';

export default function ProfileScreen ({prop}) {

    //I return() udnyttes en prædefineret metode, som firebase stiller til rådighed.
    // Metoden returnerer mailadressen af den aktive bruger.
    // Mailadressen udskrives ved brug af en tekstkomponent.
    return (
        <View style={styles.container} >
            <Text style={styles.text}>{prop}</Text>
            <Text>Current user: {firebase.auth().currentUser.email}</Text>
            <View style={styles.container}>
                <Text style={styles.text}>{prop}</Text>
            </View>
        </View>
    );
}

//Lokal styling til brug i ProfileScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: '5%',
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
});