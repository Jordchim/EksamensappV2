import React from "react";
import {ScrollView, StyleSheet, Text, View, Image, Button} from "react-native";
import {BeautySalons} from "../const";

const ArrayListSaloner = () => {

    return(
        <View style={styles.container}>
            {/* Title med styling*/ }
            <Text style={{fontWeight: 'bold', fontSize: 20, textAlign:'center',paddingTop:25, paddingBottom:25}}>
                FIND BEAUTY SALONER
            </Text>

            <ScrollView style={{height:350}}>
                {/* Map funktion, som looper igemmen arrayet ( personlig favorit )*/}
                {
                    BeautySalons.map((i, key) => {
                        return(
                            <View  key={key} style={styles.view}>
                                <View style={styles.containerSalons}>
                                    <Image source={{uri:i.image}} style={{width:100, height:100}}/>
                                </View>
                                <View style={styles.containerSalons}>
                                    <Text style={styles.text}>
                                        Navn: {i.name}
                                    </Text>
                                </View>
                                <View style={styles.containerSalons}>
                                    <Text style={styles.text}>
                                        Lokation: {i.location}
                                    </Text>
                                </View>
                                <View style={styles.containerSalons}>
                                    <Text style={styles.text}>
                                        Services: {i.services}
                                    </Text>
                                </View>
                                <View style={styles.button}>
                                    <Button color="#fff" onPress={() => handleSubmit()} title="BOOK TIDER" />
                                </View>
                            </View>
                        )
                    })
                }
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#DE6535',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    containerSalons: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: 320,
    },
    view: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        marginBottom: 30,
    },
    text: {
        alignSelf: 'flex-start',
        textAlign: "left",
        fontSize: 15,
        padding:5,
    },
    image: {
        position: 'absolute',
        height: 100,
        width: 100,
    },
    button: {
        justifyContent: 'space-between',
        backgroundColor: "#FA853C",
        borderRadius: 0,
    }
});



export default ArrayListSaloner;