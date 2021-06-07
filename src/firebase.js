// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyC6AA9L3dGQOieF4AdA_U2fCAF6aI6JvFo",
    authDomain: "facebook-clone-fdb14.firebaseapp.com",
    projectId: "facebook-clone-fdb14",
    storageBucket: "facebook-clone-fdb14.appspot.com",
    messagingSenderId: "122923768891",
    appId: "1:122923768891:web:dd0e9ae61f1e12215a101e",
    measurementId: "G-CD7NV76986"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;