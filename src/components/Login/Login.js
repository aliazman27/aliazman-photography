import React from "react";
import "./Login.css";
import {
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import auth from "../../firebase.init";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

import Home from "../Home/Home";

const Login = () => {
  //login with email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  if (user) {
    navigate(from, { replace: true });
    // navigate('/home');
  }

  const handleUserSignIn = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
//password reset
  const handlePasswordReset = () => {
    sendPasswordResetEmail(auth, email).then(() => {});
  };

  //direct login with google
  const [users, setUsers] = useState({});
  const provider = new GoogleAuthProvider();
  const handelGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUsers(user);
        console.log(user);
        if (users) {
          // navigate(from, { replace: true });
          navigate("/home");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
//sign out
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUsers({});
      })
      .catch((error) => {
        setUsers({});
      });
  };

  return (
    <div>
      <h1>Please Login</h1>
      <div className="border-container ">
        <div className="d-flex justify-content-center">
          <form onSubmit={handleUserSignIn}>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                onBlur={handleEmailBlur}
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                onBlur={handlePasswordBlur}
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                required
              />
            </div>
            <p className="text-danger">{error?.message}</p>
            {loading && <p>Loading...</p>}
            <div class="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
                required
              />
              <label className="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>

            <input className="form-submit" type="submit" value="Login" />
            <br />
          </form>

          <hr />
        </div>
        <p className="mt-3">
          New to this site?{" "}
          <Link className="text-success" to="/signup">
            Create an account
          </Link>
          <p>
            forgot password?{" "}
            <button onClick={handlePasswordReset}>forgot</button>
          </p>
        </p>
        {!users.email ? (
          <button onClick={handelGoogleSignIn} className="button-design">
            Sign In with Google
          </button>
        ) : (
          <button onClick={handleSignOut} className="button-design">
            LogOut From google
          </button>
        )}
        {/* <h2>{users.displayName}</h2>
        <h2>{users.email}</h2> */}
        {/* {user ? <Home user={user}></Home> : <Home users={users}></Home>} */}
      </div>
    </div>
  );
};

export default Login;
