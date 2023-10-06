import React from 'react';
import { Text, View, StyleSheet, ScrollView, Pressable } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

export function MyHeader(){
    return (
        <View style={styles.head}>
                <Pressable onPress={() => navigation.navigate("Profile")}>
                    <FontAwesome name="user-circle-o" 
                            size={25}
                            color="black"
                    />
                </Pressable>
                <Pressable style={styles.search}>
                    <FontAwesome name='search' size={15} color='black' />
                    <Text style={{paddingLeft: 5}}>Search</Text>
                </Pressable>
                <Pressable>
                    <FontAwesome name='plus-square' size={25} color='black' />
                </Pressable>
            </View>
    )
}


export default function HomeScreen({navigation}) {
    
    return (
        <View>
            <MyHeader />
            <ScrollView>
                    <Text style = {styles.title}>Explore</Text>

                    {/* <section /> */}

                    <View style={styles.div}>

                    <Pressable style={styles.section}>
                        <Ionicons name='earth' size={45} color='black' />
                        <View style={{paddingTop: 10}}>
                            <Text style={styles.sectHead}>Section</Text>
                            <Text style={styles.sectPara}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </Text>
                        </View>
                    </Pressable>

                    <Pressable style={styles.section}>
                        <Ionicons name='earth' size={45} color='black' />
                        <View style={{paddingTop: 10}}>
                            <Text style={styles.sectHead}>Section</Text>
                            <Text style={styles.sectPara}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </Text>
                        </View>
                    </Pressable>
                    </View>
                    <View style={styles.div}>
                    <Pressable style={styles.section}>
                        <Ionicons name='earth' size={45} color='black' />
                        <View style={{paddingTop: 10}}>
                            <Text style={styles.sectHead}>Section</Text>
                            <Text style={styles.sectPara}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </Text>
                        </View>
                    </Pressable>

                    <Pressable style={styles.section}>
                        <Ionicons name='earth' size={45} color='black' />
                        <View style={{paddingTop: 10}}>
                            <Text style={styles.sectHead}>Section</Text>
                            <Text style={styles.sectPara}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </Text>
                        </View>
                    </Pressable>
                    </View>
                    <View style={styles.div}>

                    <Pressable style={styles.section}>
                        <Ionicons name='earth' size={45} color='black' />
                        <View style={{paddingTop: 10}}>
                            <Text style={styles.sectHead}>Section</Text>
                            <Text style={styles.sectPara}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </Text>
                        </View>
                    </Pressable>

                    <Pressable style={styles.section}>
                        <Ionicons name='earth' size={45} color='black' />
                        <View style={{paddingTop: 10}}>
                            <Text style={styles.sectHead}>Section</Text>
                            <Text style={styles.sectPara}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </Text>
                        </View>
                    </Pressable>
                    </View>


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
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 15,
        margin: 10,
        width: 185,
        height: 200,
        borderRadius: 10,
        backgroundColor: 'lightgray',

    },
    sectHead: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingTop: 10,
        padding: 5,
        paddingBottom: 0,
        fontFamily: 'sans-serif-light',
    },
    sectPara: {
        fontSize: 15,
        fontFamily: 'sans-serif',
        padding: 5
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
        padding: 0.5,
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'space-evenly', 
        alignItems: 'center',
        backgroundColor:'#fff',
        width: '100%',
    },
    search: {
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'center', 
        alignItems: 'center',
        padding: 5,
        borderColor: 'black',
        borderRadius: 5,
        borderWidth: 0.5,
        margin: 10,
        width: '60%',
    },
    div: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        width: '100%',
    }
})