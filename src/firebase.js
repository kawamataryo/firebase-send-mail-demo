import firebase from "firebase";

const config = {
    apiKey: "AIzaSyABk9nCStymfQVmJ35H7Wd7w-Q-ACQq-9k",
    authDomain: "send-mail-demo.firebaseapp.com",
    databaseURL: "https://send-mail-demo.firebaseio.com",
    projectId: "send-mail-demo",
    storageBucket: "send-mail-demo.appspot.com",
    messagingSenderId: "756179565704"
};
firebase.initializeApp(config);
export const functions = firebase.functions();

