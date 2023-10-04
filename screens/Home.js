import React from "react";
import { View, Pressable, TouchableOpacity, Text, ScrollView, StyleSheet } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import HomeScreen from "./HomeScreen";
import Profile from "./Profile";
import SettingsScreen from "./SettingsScreen";
import Journal from "./Journal";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();


//i will create two functions. 
//1 that will run if the user hasnt set up their profile yet
//2 that will run if the user has set up their profile
// i will need to create a function with the tab navigation set up
//but first i need to figure out how to get the data from the database

export default function Home({navigation}){

    return (
        <Tab.Navigator>
            <Tab.Screen name="HomeScreen" component={HomeScreen} />
            <Tab.Screen name="Profile" component={SettingsScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
            <Tab.Screen name="Journal" component={SettingsScreen} />
        </Tab.Navigator>
    )

}
