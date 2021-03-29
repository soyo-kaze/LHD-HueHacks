import firebase from "firebase";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdfEoYEqjqMDzDjoUiEhKnjAaoXJMPbms",
  authDomain: "holi-cards.firebaseapp.com",
  projectId: "holi-cards",
  storageBucket: "holi-cards.appspot.com",
  messagingSenderId: "495627248219",
  appId: "1:495627248219:web:0f3efde56d69923246d57e",
  measurementId: "G-WJ1DC6NJGP",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
