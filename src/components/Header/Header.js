import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import "./Header.css";
const Header = () => {
 
  const [user] = useAuthState(auth);
  const handleSignOut = () =>{
    signOut(auth);
}
  return (
    <div className="header-design">
      <div className="header-position d-flex justify-content-evenly">
        <div className="m-2 pb-2 site-name">
          <h2>Ali Azman</h2>
          <small>Photography</small>
        </div>
        <div>
          <Link className="header-text" to="/home">
            Home
          </Link>
          <Link className="header-text" to="/blogs">
            Blogs
          </Link>
          <Link className="header-text" to="/about">
            About Me
          </Link>
          

          {user ? (
            <button onClick={handleSignOut} className="header-text text-secondary">Log out</button>
            
          ) : (
            <Link className="header-text" to="/login">
              Log In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
