import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



// Initialize Firebase
var config = {
  apiKey: "AIzaSyAyPycxX9JpVDB6m0u2XiMcFMtCOLPC9cg",
  authDomain: "marioplan201812.firebaseapp.com",
  databaseURL: "https://marioplan201812.firebaseio.com",
  projectId: "marioplan201812",
  storageBucket: "marioplan201812.appspot.com",
  messagingSenderId: "50799726999"
};


firebase.initializeApp(config);

firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;