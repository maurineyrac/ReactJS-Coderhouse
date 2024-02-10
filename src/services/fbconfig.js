// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDb8j4GpnxTDXknLfGfm4YBdb1nHb2_gdo",
	authDomain: "gvsion-ecommerce.firebaseapp.com",
	projectId: "gvsion-ecommerce",
	storageBucket: "gvsion-ecommerce.appspot.com",
	messagingSenderId: "889368130393",
	appId: "1:889368130393:web:1d54b27aeeec876d595248"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export { auth, db };