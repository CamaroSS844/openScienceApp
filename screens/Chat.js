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
    snapshotEqual,
} from "firebase/firestore";
import { signOut } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { database, auth } from "../config/firebase";
import { AntDesign } from "@expo/vector-icons";
import { GiftedChat } from "react-native-gifted-chat";

export default function Chat(){
    const [messages, setMessages] = useState([]);
    const navigation = useNavigation();

    const onSignout = () => {
        signOut(auth).catchError((error) => console.log(error.message));
    };

    useLayoutEffect(() => {
        <TouchableOpacity style={{ marginRight: 10 }}  onPress={onSignout}>
            <AntDesign name="logout" size={24} color="black" />
        </TouchableOpacity>
    }, [navigation]);

    useLayoutEffect(() => {
        const collectionRef = collection(database, "chats");
        const q = query(collectionRef, orderBy("createdAt", "desc"));

        const unsubscribe = onSnapshot(q, snapshot => {
            console.log('snapshot');
            setMessages(
                snapshot.docs.map(doc => ({
                    id: doc.id,
                    createdAt: doc.data().createdAt,//.toDate(),
                    text: doc.data().text,
                    user: doc.data().user,
                }))
            )
        });
        return () => unsubscribe();
    }, []);

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages));
        const { _id, createdAt, text, user } = messages[0];
        addDoc(collection(database, "chats"), {
            _id,
            createdAt,
            text,
            user,
        });
    }, []);
    return (
        <GiftedChat 
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{
                _id: auth?.currentUser?.email,
                name: auth.currentUser.displayName,
                avatar: 'https://i.pravatar.cc/300',
            }}
        />
    )
}

