import React from 'react';
import { Text, SafeAreaView, StyleSheet, Button, Image, View } from "react-native";

const Home = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}> 
            <Image style={styles.logo} source={{uri : "https://upload.wikimedia.org/wikipedia/commons/2/21/CNN_Indonesia.png"}}/>
            <Text style={styles.tagline}>NEWS WE CAN TRUST</Text>
            <View style={styles.button}>
                <Button color= "#cc0000" title = "Go to News List" onPress={() => navigation.navigate('news')}/>
            </View>
            <Text style ={{fontWeight:"bold", marginTop: 15}}>By : Moch Yusuf Fathussalam</Text>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent : "center",
        backgroundColor : "white"
    },
    logo :{
        width : 200,
        height : 200

    },
    tagline : {
        fontWeight : "bold",
        marginVertical : 15,
        fontSize : 24
    },
    button : {
        width : 250,

    }
})

export default Home;