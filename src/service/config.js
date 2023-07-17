
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBTVkzUWIRMlYIhFhdPM5O176FUFJIlZds",
    authDomain: "proyecto-react-43260.firebaseapp.com",
    projectId: "proyecto-react-43260",
    storageBucket: "proyecto-react-43260.appspot.com",
    messagingSenderId: "688530350671",
    appId: "1:688530350671:web:a379a2cd9cd254db0c403a"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);