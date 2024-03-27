import {
  Form,
  useLocation,
  useNavigate,
  useNavigation,
  useNavigationType,
} from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase.config";
import { toast } from "react-toastify";
import googleIcon from "../assets/svg/googleIcon.svg";

function OAuth() {
  const navigate = useNavigate();
  const location = useLocation();

  const onGoogleClick = async () => {
    try {
      const auth = getAuth();

      // Create a Google Auth provider instance.
      const provider = new GoogleAuthProvider();

      // Open a sign-in popup for the user to log in with their Google account.
      // Await the sign-in process to complete and capture the result.
      const result = await signInWithPopup(auth, provider);

      // Extract the user detail from the sign-in result.
      const user = result.user;

      // Prepare a reference to a specific document in the 'users' collection in Firestore,
      // where the document ID is the user's unique ID from Google.
      const docRef = doc(db, "users", user.uid);

      // Fetch the document from Firestore.
      const docSnap = await getDoc(docRef);

      // Check if the document (user data) exists.
      if (!docSnap.exists()) {
        // If the user does not exist, create a new document in the 'users' collection
        // with the user's ID as the document key and set the document with the user's
        // name, email, and the current server timestamp.
        await setDoc(doc(db, "users", user.uid), {
          name: user.displayName, // User's display name from Google account.
          email: user.email, // User's email from Google account.
          timeStamp: serverTimestamp(), // Current time according to Firebase's server.
        });
      }
    } catch (error) {
      toast.error("Couldn't authorize with Google");
    }
  };

  return (
    <div className="socialLogin">
      <p>Sign {location.pathname === "/sign-up" ? "up" : "in"} with</p>
      <button className="socialIconDiv" onClick={onGoogleClick}>
        <img className="socialIconImg" src={googleIcon} alt="google" />
      </button>
    </div>
  );
}

export default OAuth;
