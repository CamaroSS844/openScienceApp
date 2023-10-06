import React from "react";
import { View, Text, ScrollView, StyleSheet, Pressable } from "react-native";
import { MyHeader } from "./HomeScreen";
import { Ionicons, FontAwesome5, FontAwesome } from "@expo/vector-icons";

export default function Notifications() {
    return (
        <View>
            <MyHeader />
            <ScrollView>
                <Pressable style={styles.notif}>
                    <Ionicons name="logo-octocat" size={40} color="black" />
                    <View style={{width: '80%'}}>
                        <Text style={{fontSize: 15}}>Trinity created a new Post about Lorem ipsum dolor sit amet consectetur, adipisicing elit.</Text>
                        <Text style={{fontSize: 15}}>2h</Text>
                    </View>
                </Pressable>
                <Pressable style={styles.notif}>
                    <FontAwesome5 name="skull" size={40} color="black" />
                    <View style={{width: '80%'}}>
                        <Text style={{fontSize: 15}}>Trinity created a new Post about Lorem ipsum dolor sit amet consectetur, adipisicing elit.</Text>
                        <Text style={{fontSize: 15}}>2h</Text>
                    </View>
                </Pressable>
                <Pressable style={styles.notif}>
                    <FontAwesome name="firefox" size={40} color="black" />
                    <View style={{width: '80%'}}>
                        <Text style={{fontSize: 15}}>Trinity created a new Post about Lorem ipsum dolor sit amet consectetur, adipisicing elit.</Text>
                        <Text style={{fontSize: 15}}>2h</Text>
                    </View>
                </Pressable>
            </ScrollView>
        </View>
    )

}

const styles = StyleSheet.create({
    notif: {
        padding: 20, 
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'space-evenly', 
        width: '100%', 
        height: 100}
})