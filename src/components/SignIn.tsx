// src/components/SignIn.tsx
import React from "react";
import { auth } from "../firebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const SignIn: React.FC = () => {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log("User signed in: ", user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.error(
          "Error signing in: ",
          errorCode,
          errorMessage,
          email,
          credential
        );
      });
  };

  return (
    <>
      <div className="w-full max-w-[300px] mx-auto flex items-center justify-center">
        <button
          className="text-center mx-auto bg-blue p-2 font-bold"
          onClick={signInWithGoogle}
        >
          Sign in with Google
        </button>
      </div>
    </>
  );
};

export default SignIn;
