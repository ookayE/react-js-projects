import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg";
import visibilityIcon from "../assets/svg/visibilityIcon.svg";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { db } from "../firebase.config";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase.config";
import { toast } from "react-toastify";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  // Destructuring formData to easily access each value.
  const { name, email, password } = formData;

  // useNavigate hook for redirecting the user after successful sign up.
  const navigate = useNavigate();

  // Function to update formData state based on form input changes.
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  // Async function to handle form submission.
  const onSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior.

    try {
      const auth = getAuth(); // Initialize Firebase authentication.

      // Create a new user with email and password, await for promise to resolve.
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user; // Extract user detail from userCredential.

      // Update user profile with the name provided in the form.
      updateProfile(auth.currentUser, {
        displayName: name,
      });

      // Make a copy of formData, remove password, and add a server-generated timestamp.
      const formDataCopy = { ...formData };
      delete formDataCopy.password; // Remove password for security.
      formDataCopy.timestamp = serverTimestamp(); // Add server-generated timestamp.

      // Save the user data in Firestore under "users" collection with user UID as the document ID.
      await setDoc(doc(db, "users", user.uid), formDataCopy);

      navigate("/"); // Redirect user to the homepage on successful sign up.
    } catch (error) {
      toast.error("Something went wrong with resistration");
    }
  };

  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">Welcome Back!</p>
        </header>

        <main>
          <form onSubmit={onSubmit}>
            <input
              id="name"
              className="nameInput"
              type="text"
              placeholder="Name"
              value={name}
              onChange={onChange}
            />
            <input
              id="email"
              className="emailInput"
              type="email"
              placeholder="Email"
              value={email}
              onChange={onChange}
            />

            <div className="passwordInputDiv">
              <input
                id="password"
                className="passwordInput"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={onChange}
              />

              <img
                src={visibilityIcon}
                alt="show password"
                className="showPassword"
                onClick={() => setShowPassword((prevState) => !prevState)}
              />
            </div>

            <Link to="/forgot-password" className="forgotPasswordLink">
              Forgot Password
            </Link>

            <div className="signUpBar">
              <p className="signUpText">Sign Up</p>
              <button className="signUpButton">
                <ArrowRightIcon
                  fill="#ffffff"
                  width="34px"
                  height="34px"
                ></ArrowRightIcon>
              </button>
            </div>
          </form>

          {/* Google OAuth Component */}
          <Link to="/sign-in" className="registerLink">
            Sign In Instead
          </Link>
        </main>
      </div>
    </>
  );
}

export default SignUp;
