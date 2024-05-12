

import firebase from "firebase/compat/app"; 
import 'firebase/compat/auth'; 
import 'firebase/compat/firestore'; 

// Configuraci�n de Firebase
var firebaseConfig = {
    apiKey: "AIzaSyBYQytt_OkWbm2AexhNcsdBXSUlHC9b6dg",
    authDomain: "dps-asilo-sv.firebaseapp.com",
    projectId: "dps-asilo-sv",
    storageBucket: "dps-asilo-sv.appspot.com",
    messagingSenderId: "186549304054",
    appId: "1:186549304054:web:595412bc63346015cacad7",
    measurementId: "G-QSVW3HW5BB"
};

// Inicializaci�n de Firebase con la configuraci�n proporcionada
firebase.initializeApp(firebaseConfig);

// Obtenci�n de una referencia a Firestore
const db = firebase.firestore();

// Exportaci�n de Firebase y la referencia a Firestore para su uso en otros archivos
export default {
    firebase,
    db,
};
