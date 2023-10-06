import React from "react";
import { View, Pressable, TouchableOpacity, Text, ScrollView, StyleSheet } from "react-native";
import { Entypo, FontAwesome, Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import HomeScreen from "./HomeScreen";
import Chat from "./ChatsScreen";
import Journal from "./Journal";
import Notifications from "./notifications";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();


//i will create two functions. 
//1 that will run if the user hasnt set up their profile yet
//2 that will run if the user has set up their profile
// i will need to create a function with the tab navigation set up
//but first i need to figure out how to get the data from the database

export default function Home({navigation}){

    return (
        <Tab.Navigator  defaultScreenOptions = {HomeScreen} screenOptions={{
            tabBarShowLabel: false,
            tabBarHideOnKeyboard: true,
        }}>
            <Tab.Screen
              name="Notifications"
              component={Notifications}
              options={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused }) => {
                  return (
                    <FontAwesome name="bell" 
                        size={focused ? 28 : 23}
                        color={focused ? "black" : "gray"}
                     />
                  );
                },
              })}
            />
            <Tab.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused }) => {
                  return (
                    <Entypo name="home" 
                        size={focused ? 28 : 23}
                        color={focused ? "black" : "gray"}
                     />
                  );
                },
              })}
            />
            <Tab.Screen
              name="Chat"
              component={Chat}
              options={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused }) => {
                  return (
                    <Ionicons name="chatbubbles" 
                        size={focused ? 28 : 23}
                        color={focused ? "black" : "gray"}
                     />
                  );
                },
              })}
            />
        </Tab.Navigator>
    )

}
