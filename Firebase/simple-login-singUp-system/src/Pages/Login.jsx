import { signInWithEmailAndPassword } from "firebase/auth/cordova";
import React, { useRef, useState } from "react";
import { auth } from "../Firebase/firebase__init__";
import { Link, useNavigate } from "react-router";
import toast from "react-hot-toast";
import { sendPasswordResetEmail } from "firebase/auth";

const Login = () => {
    const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const Navigate = useNavigate()
  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    const email = e.target.email.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        if (!result.user.emailVerified) {
            toast.error('Please verified your Email');
            return;
        }
        toast.success('User Successfully Login')
        setTimeout(() => {
            Navigate('/')
        }, 200);
        console.log(result.user);
      })
      .catch((error) => {
        setError(error.message);
        toast.error('User not Found! please Create Account')
      });
  };


  const handleResetPassword = ()=>
  {
    const email = emailRef.current.value;
    if (!email) {
        toast.error('Please Enter Email')
    }
    console.log(email);
   sendPasswordResetEmail(auth,email )
   .then(()=> {
    toast.success('Password reset email sent!');
   })
   .catch(error=> {
    console.error(error.message);
    toast.error(error.message)
   })
  }

  return (
    <div className="max-w-6/9 mx-auto">
      <h1>please Login</h1>
      <form onSubmit={handleLogin}>
        <label className="input validator join-item">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </g>
          </svg>
          <input
            type="email"
            name="email"
            ref={emailRef}
            placeholder="mail@site.com"
            required
          />
        </label>
        <div className="validator-hint hidden">Enter valid email address</div>
        <br />
        <label className="input validator">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
              <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
            </g>
          </svg>
          <input
            ref={passwordRef}
            type="password"
            name="password"
            required
            placeholder="Password"
            minLength="8"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
          />
        </label>
        <p className="validator-hint hidden">
          Must be more than 8 characters, including
          <br />
          At least one number <br />
          At least one lowercase letter <br />
          At least one uppercase letter
        </p>
        <br />
        <div onClick={handleResetPassword} className="text-blue-500 underline link-error cursor-pointer">
            <p>Forget Password</p>
        </div>
        <br />
        <p>
          if your have no account ? Please Create an Account{" "}
          <Link className="text-blue-400 underline" to="/SingUp">
            SingUP
          </Link>
        </p>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default Login;
