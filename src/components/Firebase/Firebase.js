import app from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
  apiKey: "AIzaSyAEv8XyIy_xjmc9AqzcbV3iNRiA9WRVYa0",
  authDomain: "pearl-486d5.firebaseapp.com",
  databaseURL: "https://pearl-486d5.firebaseio.com",
  projectId: "pearl-486d5",
  storageBucket: "",
  messagingSenderId: "759519451803",
  appId: "1:759519451803:web:fe441cb0f489e47c26443e"
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.db = app.database();
  }
  // auth API
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);

  // *** User API ***

  user = uid => this.db.ref(`users/${uid}`);

  users = () => this.db.ref("users");
}

export default Firebase;
