import React, { createContext, useContext, useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase"


import Chat from "./screens/Chat";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Home from "./screens/Home";
import Profile from "./screens/Profile";

export const variable = "hello";

const Stack = createStackNavigator();
const AuthUserContext = createContext({});

const AuthUserProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  return (
    <AuthUserContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthUserContext.Provider>
  )
}


function ChatStack(){
  return (
    <Stack.Navigator defaultScreenOptions = {Home} screenOptions={{
      gestureEnabled: true,
      gestureResponseDistance: 50,
      gestureDirection: 'horizontal',
      headerShown: false
    }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  )
}

function AuthStack(){
  return (
    <Stack.Navigator defaultScreenOptions = {Login}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  )
}

function RootNavigator(){
  const user = useContext(AuthUserContext);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, 
      async authenticateduser => {
        authenticateduser? user.setAuthUser(authenticateduser) : user.setAuthUser(null);
        setLoading(false);
      });
      return () => unsubscribe();
  }, [user.authUser])

  if(loading) {
    return (
      <View style = {{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <ActivityIndicator size={"large"} />
      </View>
    )
  }

  return (
    <NavigationContainer>
      {user.authUser? <ChatStack />: <AuthStack />}
    </NavigationContainer>
  )
}

export default function App() {
  return (
    <AuthUserProvider >
      <RootNavigator />
    </AuthUserProvider>
  );
}

