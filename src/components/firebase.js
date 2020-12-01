// firebase.js
import firebase from 'firebase/app';
import 'firebase/database';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAo8f5r77oq38Vta1z1rRPsGwNe0L4HKHc",
    authDomain: "property-4adab.firebaseapp.com",
    databaseURL: "https://property-4adab.firebaseio.com",
    projectId: "property-4adab",
    storageBucket: "property-4adab.appspot.com",
    messagingSenderId: "233292560511",
    appId: "1:233292560511:web:539665e9ec9216de07674a"
};

firebase.initializeApp(firebaseConfig);

// this exports the CONFIGURED version of firebase
export default firebase;