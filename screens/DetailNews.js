import React, { Component } from 'react';
import { Text, SafeAreaView, StyleSheet, Image, ActivityIndicator, Dimensions, View, ScrollView } from "react-native";

class Detail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            isLoading: true,
        }
    }

    componentDidMount() {
      const {url} = this.props.route.params;

      fetch('https://www.news.developeridn.com/detail/?url=' + url )
        .then((response) => response.json())
        .then((json) => 
        {
            if (json.data[0].message === "network error") {
                throw new Error('Network error')
            }
            this.setState({data: json.data[0]})
        })
        .catch((error) => alert(new Error(error.message)))
        .finally(() => this.setState({isLoading: false}))
    }

    render() {
        const {data, isLoading} = this.state;

        return (
            <SafeAreaView style={styles.container}> 
                {isLoading ? (
                    <ActivityIndicator color="#cc0000"/>

                ) : (
                  data && (
                    <ScrollView> 
                        <View style={styles.content}>
                            <Text style={styles.title}>{data.judul.trim()}</Text>
                            <Image style={styles.image} source={{uri: data.poster}}/>
                            {data.body
                                .trim()
                                .replace(/(\r\n|\r|\n)+/g, "ENTER ")
                                .split("ENTER ")
                                .map((item, index, array) => {
                                    if(index != 0 ) {
                                        return item !== "" &&
                                          !item.includes("Gambas") &&
                                          !item.includes("Lihat juga") &&
                                          !array[index - 1].includes("Lihat juga") ? (
                                          <Text key={index}>{array[index] + "\n"}</Text>
                                        ) : null;
                                    } else {
                                      return item !== "" &&
                                        !item.includes("Gambas") &&
                                        !item.includes("Lihat juga") ? (
                                        <Text key={index}>{array[index] + "\n"}</Text>
                                      ) : null;
                                    }
                                })}
                        </View>
                    </ScrollView>
                  )
                )}
            </SafeAreaView>
        )
    }
    
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent : "center"
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 15
    },
    text: {
        fontSize: 16,
        color: "black",
    },
    content: {
        padding: 15,
        backgroundColor: "white"
    },
    image: {
        width: Dimensions.get("window").width - 30,
        height: 200,
        marginBottom: 15,
        borderRadius: 5
    }
})
export default Detail;