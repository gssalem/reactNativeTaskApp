import  firebase from "firebase"
import 'firebase/storage';
 
var firebaseConfig = {
    apiKey: "AIzaSyCyzaKjmIrrcOuzIe-jng5nbVzy9RKZCKo",
    authDomain: "task-cac01.firebaseapp.com",
    projectId: "task-cac01",
    storageBucket: "task-cac01.appspot.com",
    messagingSenderId: "851408149237",
    appId: "1:851408149237:web:d7523cf401c4207149c3bc"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();
export default database