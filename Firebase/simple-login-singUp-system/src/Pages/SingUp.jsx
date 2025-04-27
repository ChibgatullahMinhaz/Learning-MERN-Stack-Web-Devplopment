import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import React, { useRef } from "react";
import { Link, useNavigate } from "react-router";
import { auth } from "../Firebase/firebase__init__";
import toast from "react-hot-toast";

const SingUp = () => {
    const Navigate = useNavigate();
  const passwordRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const password = passwordRef.current.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const name = e.target.name.value;
    createUserWithEmailAndPassword(auth,email, password ).then(result => {
       sendEmailVerification(result.user).then(()=> {
        toast.success('we Send An Email For verification')
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
        .then(()=> {
            toast.success('user Create Successfully')
            setTimeout(() => {
        Navigate('/SingIn')
            }, 300);
        }).catch(error => {
            toast.error(error.message)
        })
       }).catch(error=> {
        toast.error(error.message);
       })
     
    }).catch(error=> {
        toast.error(error.message)
    })
  };
  return (
    <div className="max-w-sm mx-auto">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          required
          placeholder=" Enter Your Name"
          className="input"
        />
        <br />
        <input
          type="text"
          name="photo"
          required
          placeholder="Enter Your Photo URL"
          className="input"
        />
        <br />
        <input
          type="email"
          name="email"
          required
          placeholder="Enter YOur email"
          className="input"
        />
        <br />
        <input
          type="password"
          name="password"
          required
          placeholder="Enter Your password"
          ref={passwordRef}
          className="input"
        />
        <br />
        <div>
          <p>
            If You Have already An Account ? Please Login{" "}
            <Link className="text-blue-500 underline" to="/SingIn">
              Login
            </Link>{" "}
          </p>
        </div>
        <button className="btn btn-primary">SingUp</button>
      </form>
    </div>
  );
};

export default SingUp;
