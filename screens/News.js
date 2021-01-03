import React, { Component } from 'react';
import { Text, SafeAreaView, StyleSheet, Image, ActivityIndicator, TouchableOpacity, View } from "react-native";
import { FlatList } from 'react-native-gesture-handler';

class News extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            isLoading: true,
        }
    }

    componentDidMount() {
      fetch('https://www.news.developeridn.com/')
        .then((response) => response.json())
        .then((json) => this.setState({data: json.data}))
        .catch((error) => console.error(error))
        .finally(() => this.setState({isLoading: false}))
    }

    render() {
        const {data, isLoading} = this.state;
        const {navigation} = this.props;
        

        return (
            <SafeAreaView style={styles.container}> 
                {isLoading ? (
                <ActivityIndicator color="cc0000"/>
                ):(
                    <FlatList 
                    data={data}
                    keyExtractor={(item) => item.link + Math.random()}
                    renderItem={({item}) => {
                        return (
                            <TouchableOpacity  onPress={() => {navigation.navigate('detail', {url: item.link})}}>
                                <View style={styles.newsItem}>
                                    {/* left */}
                                    <View>
                                        <Image style={styles.image} source={{uri: item.poster.replace(/\??w=.*/sg,"?w=650")}}/>
                                    </View>

                                    {/* right */}
                                    <View style={styles.rightSection}>
                                        <Text style={styles.title}>{item.judul}</Text>
                                        <Text>
                                            <Text style={styles.type}>{item.tipe}</Text> .{" "}
                                            <Text style={styles.time}>{item.waktu}</Text>
                                        </Text>
                                    </View>
                                </View> 
                                    
                            </TouchableOpacity>
                        )
                    
                    }}/>
                )} 
    
            </SafeAreaView>
        )
    }
    
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent : "center"
    },
    newsItem: {
        padding: 15,
        borderColor: "lightgray",
        borderWidth: 1,
        flex: 1,
        flexDirection: "row",
        backgroundColor: "white"
    },
    image: {
        width: 130,
        height: 130,
        borderRadius : 10
    },
    rightSection: {
        flexShrink: 1,
        paddingLeft: 15,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        flexShrink: 1,
        paddingBottom: 5
    },
    time: {
        fontSize: 12
    },
    type: {
        fontSize: 12,
        color: "#cc0000",
        fontWeight: "bold"
    }
})

export default News;