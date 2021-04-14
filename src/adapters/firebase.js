import firebase from "firebase";

const firebaseConfig = {
  apiKey: "",
  authDomain: "twitter-clone-84818.firebaseapp.com",
  projectId: "twitter-clone-84818",
  storageBucket: "twitter-clone-84818.appspot.com",
  messagingSenderId: "",
  appId: ""
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
