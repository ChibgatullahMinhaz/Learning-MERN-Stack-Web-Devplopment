import { use, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "./firebase/firebase.init";

function App() {
  const [user, setUser] = useState(null);
  const googleAuthProvider = new GoogleAuthProvider();
  const handleSingUpByGoogle = () => {
    signInWithPopup(auth, googleAuthProvider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleSingOut = () => {
    signOut(auth)
      .then(() => {
        console.log("singOut successfully");
        setUser(null)
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      {user ? (
        <button onClick={handleSingOut}>SingOut</button>
      ) : (
        <button onClick={handleSingUpByGoogle}>SingUp using Google</button>
      )}
    </>
  );
}

export default App;
