import React from 'react';
import { StyleSheet, Text, View, Platform} from 'react-native';

//PlatformScreen tager navigation med som argument
function PlatformScreen() {

    //I return() benyttes både inline og lokal styling.
    //Der fastsættes en Header, der hentes igennem en import
    //Derudover udskrives der en beskrivelse af komponenten ved brug af en tekstkomponent
    return (
        <View style={Styles.containerPlatform}>
            <Text style={{alignSelf: 'center', marginTop: 'auto', marginBottom: 'auto'}} >
                Farve ændrer sig afhængig af om det er Android eller IOS
            </Text>
        </View>
    )

}


//Lokal styling til brug i PlatformScreen
//Se her hvordan Platform definerer en styling ud fra den enhed, som appen kører på-
const Styles = StyleSheet.create({
    containerPlatform: {
        flex: 1,
        ...Platform.select({
            ios: {
                backgroundColor: 'red'
            },
            android: {
                backgroundColor: 'blue'
            },
            web: {
                backgroundColor: 'green'
            }
        })
    }
});

// <Header navigation={this.props.navigation} title='Platform'/>

export default PlatformScreen