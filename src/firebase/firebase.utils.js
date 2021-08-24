import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// My web app's Firebase configuration
const config = {
	apiKey: "AIzaSyDfWX9GAgL8r7t11RF_A1bLCs_WH7RMB7M",
	authDomain: "cwn-db-54b7b.firebaseapp.com",
	projectId: "cwn-db-54b7b",
	storageBucket: "cwn-db-54b7b.appspot.com",
	messagingSenderId: "132220095678",
	appId: "1:132220095678:web:5a23336932241bda6422ef",
};

export const createUserProfileDocument = async (userAuth, otherData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();
	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		try {
			await userRef.set({ displayName, email, createdAt, ...otherData });
		} catch (err) {
			console.log("error creating user", err.message);
		}
	}
	console.log(snapShot);
	return userRef;
};

// initialize Firebase with appropriate configurations
firebase.initializeApp(config);

// use anything that related to authentication
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// setup Google authentication utility
const provider = new firebase.auth.GoogleAuthProvider();
// use Google popup everytime we try to sign in with Google account
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
