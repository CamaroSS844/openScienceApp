import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Chat from "./screens/Chat";
import Login from "./screens/Login";
import Signup from "./screens/Signup";

export const variable = "hello";

const Stack = createStackNavigator();

function ChatStack(){
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  )
}

function RootNAvigator(){
  return (
    <NavigationContainer>
      <ChatStack />
    </NavigationContainer>
  )
}

export default function App() {
  return (
    <RootNAvigator />
  );
}

