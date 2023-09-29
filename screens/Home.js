import React from "react";
import { View, Pressable, TouchableOpacity, Text, ScrollView, StyleSheet } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";


//i will create two functions. 
//1 that will run if the user hasnt set up their profile yet
//2 that will run if the user has set up their profile
// i will need to create a function with the tab navigation set up
//but first i need to figure out how to get the data from the database

export default function Home({navigation}){

    return (
        <View>
            <Pressable>
                <Text>go to chat</Text>
            </Pressable>
        </View>
    )


}


const styles = StyleSheet.create({
    main: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }

})