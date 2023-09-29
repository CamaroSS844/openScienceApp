import React, {useState} from "react";
import { StyleSheet, Text, View, Button, TextInput, Alert, Pressable } from "react-native";
import {createUserWithEmailAndPassword} from "firebase/auth";
import { FontAwesome } from '@expo/vector-icons';
import { auth } from "../config/firebase";

export default function Signup({ navigation }){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const onSignup = () => {
        //added username which wasnt there in the tutorial
        if (email !== "" && password !== "" && username !== ""){
            createUserWithEmailAndPassword(auth, email, password, username)
                .then(() => console.log("Signup success"))
                .catch((err) => Alert.alert("Signup error", err.message))
        }
    }

    return (
        <View style={styles.main}>

            <FontAwesome
              size={80}
              name={'user-circle'}
              style={{
                color: "grey",
              }}
            />

            <Text style={{fontSize: 30, color: '#d43333'}}>Signup</Text>

            <TextInput
              style={{...styles.input, borderColor: '#3EB6AF'}}
              onChangeText={username => setUsername(username)}
              value={username}
              placeholder="Enter Username"
              autoFocus={true}
              autoCapitalize="none"
            />
            <TextInput
              style={{...styles.input, borderColor: '#3EB6AF'}}
              onChangeText={email => setEmail(email)}
              value={username}
              placeholder="Enter Email"
              keyboardType="email-address"
              inputMode="email"
              autoCapitalize="none"
            />
            <TextInput
              style={{...styles.input, borderColor: '#3EB6AF'}}
              onChangeText={password => setPassword(password)}
              value={password}
              secureTextEntry = {true}
              autoCorrect={false}
              placeholder="Enter Password"
              keyboardType="numeric"
              autoCapitalize="none"
            />
            <View style={styles.buttonSection}>
              <Pressable style={{...styles.btn, backgroundColor: '#3EB6AF'}} onPress={() => onSignup()}>
                <Text style={{color: '#fff'}}>Login</Text>
              </Pressable>
              <Pressable style={{...styles.btn, backgroundColor: '#d43333'}}>
                <Text style={{color: '#fff'}}>Clear</Text>
              </Pressable>
            </View>
            <Text>Forgot <Text style={{color: '#25837E'}}>password</Text> </Text>
            <Pressable onPress={() => navigation.navigate('Signup')}>
              <Text style={{color: '#3EB6AF'}} >Sign up</Text>
            </Pressable>
          </View>
    )
}

export const styles = StyleSheet.create({
    main: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    content: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonSection: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-around',
      alignItems: 'space-around',
    },
    input: {
      width: '65%',
      borderWidth: 1.5,
      borderRadius: 10,
      height: 40,
      margin: 20,
      paddingLeft: 10
    }, 
    btn: {
      width: 70,
      height: 25,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
    }
  });
  