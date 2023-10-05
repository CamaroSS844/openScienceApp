import React from 'react';
import { Text, View, StyleSheet, ScrollView, Pressable } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

function section(){
    return (
        <Touchable>
            <Ionicons name='earth' size={24} color='black' />
            <View>
                <Text>Section</Text>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec vel nunc eget magna aliquam aliquet. Nulla facilisi.
                    Donec vel nunc eget magna aliquam aliquet. Nulla facilisi.
                    Donec vel nunc eget magna aliquam aliquet. Nulla facilisi.
                </Text>
            </View>
        </Touchable>
    )
}


export default function HomeScreen() {
    
    return (
        <View>
            <View style={{display: 'flex', flexDirection: 'row',justifyContent: 'space-evenly', alignItems: 'center'}}>
                <Pressable>
                    <FontAwesome name="user-circle-o" 
                            size={20}
                            color="black"
                    />
                </Pressable>
                <Pressable style={{display: 'flex', flexDirection: 'row',justifyContent: 'space-evenly', alignItems: 'center', }}>
                    <FontAwesome name='search' size={20} color='black' />
                    <Text>Search</Text>
                </Pressable>
                <Pressable>
                    <FontAwesome name='users' size={20} color='black' />
                </Pressable>
            </View>
            <ScrollView>
                    <Text style = {styles.title}>Explore</Text>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 40,
        fontFamily: 'sans-serif-light',
        padding: 20,
    },
    section: {
        display: 'flex',

    },
    heading: {
        fontSize: 20,
        fontFamily: 'sans-serif',
        padding: 20,
    },
    para: {
        fontSize: 15,
        fontFamily: 'sans-serif',
        padding: 20,
    },
    head: {
        
    }
})