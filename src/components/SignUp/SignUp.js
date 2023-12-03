import { createUserWithEmailAndPassword } from "firebase/auth";
import { useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth'
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordBlur = (event) => {
    setConfirmPassword(event.target.value);
  };

  if(user){
    navigate('/home');
}

  const handleCreateUser = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Your two passwords did not match");
      return;
    }
    if (password.length < 6) {
      setError("Password must be 6 characters or longer");
      return;
    }

    createUserWithEmailAndPassword(email, password);
  };
  return (
    <div>
      <h1>Sign Up</h1>
      <div className="border-container ">
        <div className="d-flex justify-content-center">
          <form onSubmit={handleCreateUser}>
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
                required
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
                name="password"
                required
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Confirm Password
              </label>
              <input
                onBlur={handleConfirmPasswordBlur}
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                name="confirm-password"
                required
              />
            </div>
            <div class="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>
            <input className="form-submit" type="submit" value="SignUp" />
            <br />
          </form>

          <hr />
        </div>
        <p className="mt-3">
          Already have an account?{" "}
          <Link className="text-success" to="/login">
            LogIn
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
