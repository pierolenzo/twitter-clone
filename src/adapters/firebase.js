import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA2Q9tVPmrUbuscXab9MYHyK9Of90PpzHI",
  authDomain: "twitter-clone-84818.firebaseapp.com",
  projectId: "twitter-clone-84818",
  storageBucket: "twitter-clone-84818.appspot.com",
  messagingSenderId: "777291488225",
  appId: "1:777291488225:web:fa7f172d3ff6df69e050a0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
