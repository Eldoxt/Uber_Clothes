import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB4PMiJd4Civ3IEbciEKGCH7AZ-poJCpJc",
    authDomain: "uberclothes.firebaseapp.com",
    projectId: "uberclothes",
    storageBucket: "uberclothes.appspot.com",
    messagingSenderId: "383600077261",
    appId: "1:383600077261:web:5ece5d721e0bcf7b6dfc84"
  };

  !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  export default firebase;