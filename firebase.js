import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC086X910fHOvkmCpM56kMzOf9nNquY_3M",
  authDomain: "e-census-e2885.firebaseapp.com",
  projectId: "e-census-e2885",
  storageBucket: "e-census-e2885.appspot.com",
  messagingSenderId: "496670058200",
  appId: "1:496670058200:web:357a75aad7fbb91258d9ad",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }
