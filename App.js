import React, {useEffect, useState} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import SignUpForm from './components/SignUpForm';
import firebase from 'firebase';
import LoginForm from "./components/LoginForm";
import ProfileScreen from "./components/ProfileScreen";
import { Card } from 'react-native-paper';
import HomeScreen from "./components/HomeScreen";
import {createDrawerNavigator} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./DrawerNavigator";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATXF9J-Bm4EUjbzCRBBTEOGjoHQlgNkQ0",
  authDomain: "eksamensapp.firebaseapp.com",
  projectId: "eksamensapp",
  storageBucket: "eksamensapp.appspot.com",
  messagingSenderId: "511090413714",
  appId: "1:511090413714:web:a517d1e9dcbadb62f4964b"
};

const Drawer = createDrawerNavigator();

export default function App() {

//Her oprettes bruger state variblen
  const [user, setUser] = useState({ loggedIn: false });

  //Koden sikrer at kun én Firebase initieres under brug af appen.
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

//onAuthstatechanged er en prædefineret metode, forsynet af firebase, som konstant observerer brugerens status (logget ind vs logget ud)
//Pba. brugerens status foretages et callback i form af setUSer metoden, som håndterer user-state variablens status.
  function onAuthStateChange(callback) {
    return firebase.auth().onAuthStateChanged(user => {
      if (user) {
        callback({loggedIn: true, user: user});
      } else {
        callback({loggedIn: false});
      }
    });
  }

  //Heri aktiverer vi vores listener i form af onAuthStateChanged, så vi dynamisk observerer om brugeren er aktiv eller ej.
  useEffect(() => {
    const unsubscribe = onAuthStateChange(setUser);
    return () => {
      unsubscribe();
    };
  }, []);

//Her oprettes gæstekomponentsindhold, der udgøres af sign-up og login siderne
  const GuestPage = () => {
    return(
        <View style={styles.container}>
          <Text style={styles.paragraph}>
            Opret eller Login med din Email
          </Text>

          <Card style={{padding:20}}>
            <SignUpForm />
          </Card>

          <Card style={{padding:20}}>
            <LoginForm />
          </Card>

        </View>
    )
  }

  //return user.loggedIn ? <HomeScreen /> : <GuestPage/>;

    return user.loggedIn ?
        <NavigationContainer>
          <DrawerNavigator />
        </NavigationContainer> : <GuestPage/>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: '5%',
    backgroundColor: 'transparent',
    padding: 20,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});