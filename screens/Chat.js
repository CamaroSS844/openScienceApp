import React,{
    useState,
    useEffect,
    useLayoutEffect,
    useCallback,
}
 from "react";
import { TouchableOpacity, Text } from "react-native-gesture-handler";
import {
    collection,
    query,
    onSnapshot,
    orderBy,
    addDoc,
} from "firebase/firestore";
import { signout } from "../firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { database, auth } from "../firebase/config";
import { AntDesign } from "@expo/vector-icons";
import { GiftedChat } from "react-native-gifted-chat";

export default function Chat(){
    const [messages, setMessages] = useState([]);
    const navigation = useNavigation();

    const onSignout = () => {
        signout(auth).catchError((error) => console.log(error.message));
    };

    useLayoutEffect(() => {
        <TouchableOpacity style={{ marginRight: 10 }}  onPress={onSignout}>
            <AntDesign name="logout" size={24} color="black" />
        </TouchableOpacity>
    }, [navigation]);

    useLayoutEffect(() => {
        const collectionRef = collection(database, "chats");
        const q = query(collectionRef, orderBy("createdAt", "desc"));

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            
        })
    }, []);
    return (
        <GiftedChat />
    )
}

