import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

firebase.initializeApp({
  apiKey: "AIzaSyBCmSb9Do6iawTIOF1STWybnLiW50jXOE0",
  authDomain: "chat-lounge-6058c.firebaseapp.com",
  projectId: "chat-lounge-6058c",
  storageBucket: "chat-lounge-6058c.appspot.com",
  messagingSenderId: "527799815964",
  appId: "1:527799815964:web:fcd1bb8f4e19fd183634d9",
});

export const auth = firebase.auth()
export const firestore = firebase.firestore()