import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
  setDoc,
  addDoc,
} from "firebase/firestore/lite";
import { initializeApp } from "firebase/app";
import {
  signOut,
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider,
  getRedirectResult,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC1i69tVTEOSgRQ47GpJCsOdpZLfw8p9Do",
  authDomain: "pizza-91c78.firebaseapp.com",
  projectId: "pizza-91c78",
  storageBucket: "pizza-91c78.appspot.com",
  messagingSenderId: "258048814506",
  appId: "1:258048814506:web:5d134efb94c2a19948cfd3",
  measurementId: "G-XS4RGY8W2V",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
provider.addScope("profile");
provider.addScope("email");
provider.setCustomParameters({ prompt: "select_account" });

export const SignInWithRedirectGoogle2 = () => {
  console.log(`auth==>`,auth,`provider==>`, provider);
  signInWithRedirect(auth, provider)
    .then(() => {})
    .catch((error) => {
      console.log(error);
    });
};

export const handleRedirectResult = () => {
  getRedirectResult(auth)
    .then((result) => {
      if (result.credential) {
        // This gives you a Google Access Token. You can use it to access Google APIs.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};

export const SignOut = async () => {
  const auth = getAuth();
  // console.log(auth);
  try {
    await signOut(auth);
    console.log("signout successful");
    console.log(auth);
  } catch (error) {
    console.log(error);
  }
};

export const createUserData = async (userAuth, ...otherdata) => {
  const userReference = doc(db, `users/${userAuth.uid}`);
  const userSnapShot = await getDoc(userReference);

  if (userSnapShot.exists() == false) {
    const { email, displayName, uid } = userAuth;
    const time = new Date();

    const newUserData = {
      displayName,
      email,
      time,
      uid,
      ...otherdata,
    };

    try {
      await setDoc(userReference, newUserData);
      console.log("user successfully added");
    } catch (error) {
      console.log(error);
    }
  }
  return userReference;
};
