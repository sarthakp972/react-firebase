import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCBP2CHR64p66EhJ_5qpbTgvWDFmaMrElU",
    authDomain: "react-firebase-70567.firebaseapp.com",
    projectId: "react-firebase-70567",
    storageBucket: "react-firebase-70567.appspot.com",
    messagingSenderId: "360302694264",
    appId: "1:360302694264:web:d505a1e412bb2aa2e2828d",
    databaseURL:"https://react-firebase-70567-default-rtdb.firebaseio.com",

  };

  export const app = initializeApp(firebaseConfig);