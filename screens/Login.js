import React, {useState} from "react";
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Alert, Pressable } from "react-native";
import {signInWithEmailAndPassword} from "firebase/auth";
import { FontAwesome } from '@expo/vector-icons';
import { auth } from "../config/firebase";

export default function Login({ navigation }){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const onHandleLogin = () => {
        if (email !== "" && password !== ""){
            signInWithEmailAndPassword(auth, email, password)
                .then(() => console.log("Login success"))
                .catch((err) => Alert.alert("Login error", err.message))
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

            <Text style={{fontSize: 30, color: '#d43333'}}>Login</Text>

            <TextInput
              style={{...styles.input, borderColor: '#3EB6AF'}}
              onChangeText={email => setEmail(email)}
              value={username}
              placeholder="Enter Email"
              keyboardType="email-address"
              textContentType="emailAddress"
              autoFocus={true}
              autoCapitalize="none"
            />
            <TextInput
              style={{...styles.input, borderColor: '#3EB6AF'}}
              onChangeText={password => setPassword(password)}
              value={password}
              secureTextEntry = {true}
              autoCorrect={false}
              textContentType="password"
              placeholder="Enter Password"
              keyboardType="numeric"
              autoCapitalize="none"
            />
            <View style={styles.buttonSection}>
              <Pressable style={{...styles.btn, backgroundColor: '#3EB6AF'}} onPress={() => onHandleLogin()}>
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
  