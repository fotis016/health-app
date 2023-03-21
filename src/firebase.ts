import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  orderBy,
  query,
  where,
} from 'firebase/firestore';
import { getDatabase } from 'firebase/database';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASygAQ-SL0nTOfMwztF5COYZ6a-kgXTE0",
  authDomain: "doctor-database-b6ca9.firebaseapp.com",
  databaseURL: "https://doctor-database-b6ca9-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "doctor-database-b6ca9",
  storageBucket: "doctor-database-b6ca9.appspot.com",
  messagingSenderId: "528753747784",
  appId: "1:528753747784:web:beb6ba7ad4baed853ab57d",
  measurementId: "G-CVR1675TR8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const database = getDatabase(app)

const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (error) {
    console.error(error);
  }
};

const isUserLoggedIn = () => {
  return auth.currentUser
}

const logInWithEmailAndPassword = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
  }
};

const registerWithEmailAndPassword = async (name: string, email: string, password: string) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
  }
};

const sendPasswordReset = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
  }
};

const logout = () => {
  signOut(auth);
};

const addAppointment = async (date: string | undefined, speciality: string | undefined) => {
  const appointmentsRef = collection(db, "appointments");
  const q = query(appointmentsRef, where("speciality", "==", speciality), where("date", "==", date))
  const docs = await getDocs(q);
  docs.forEach((doc: any) => {
    console.log(doc.id, doc.data())
  })
  if (docs.docs.length === 0) {
    try{
      await addDoc(collection(db, "appointments"), {
        email: auth.currentUser?.email,
        date,
        speciality
      });}
      catch (err) {
        console.error(err);
      }
    return false
  }
    return true
};

export {
  addAppointment,
  auth,
  db,
  database,
  logInWithEmailAndPassword,
  logout,
  registerWithEmailAndPassword,
  sendPasswordReset,
  signInWithGoogle,
  isUserLoggedIn
};
