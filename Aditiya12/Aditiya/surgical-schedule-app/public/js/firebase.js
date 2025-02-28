// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
// import {
//   getAuth,
//   GoogleAuthProvider,
// } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
// import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
// import { getStorage } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js"; 
// import { getDatabase } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js"; 

// // ✅ Your Firebase Configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBNpiIM3io_3yvF-sXcY47V5YcewDJuifo",
//   authDomain: "surgical-schedule.firebaseapp.com",
//   projectId: "surgical-schedule",
//   storageBucket: "surgical-schedule.appspot.com", // ✅ Fixed
//   messagingSenderId: "110583388051",
//   appId: "1:110583388051:web:000415eea9717edc003a66",
//   measurementId: "G-9CR3QCNQCQ"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);
// const storage = getStorage(app); 
// const realtimeDB = getDatabase(app); 
// const googleProvider = new GoogleAuthProvider();

// export { auth, db, googleProvider, storage, realtimeDB };
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-storage.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-database.js";

// ✅ Your Firebase Configuration (Updated)
const firebaseConfig = {
  apiKey: "AIzaSyAVKsm0QQ8kzqpWuudwBPwMeWQyYWli1So",
  authDomain: "hospital-24cef.firebaseapp.com",
  projectId: "hospital-24cef",
  storageBucket: "hospital-24cef.appspot.com", // ✅ Fixed storage bucket URL
  messagingSenderId: "875519246537",
  appId: "1:875519246537:web:5338a62691f05ab1410d18",
  measurementId: "G-E8F68JPKF2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const realtimeDB = getDatabase(app);
const googleProvider = new GoogleAuthProvider();

export { auth, db, googleProvider, storage, realtimeDB };
