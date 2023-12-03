import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Error from "./components/Error/Error";
import Home from "./components/Home/Home";
import Bridal from "./components/Home/Bridal/Bridal";
import Birthday from "./components/Home/Birthday/Birthday";
import Annivarsary from "./components/Home/Annivarsary/Annivarsary";
import Footer from "./components/Footer/Footer";
import Blogs from "./components/Blogs/Blogs";
import AboutMe from "./components/AboutMe/AboutMe";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import CheckOut from "./components/CheckOut/CheckOut";
import RequireAuth from "./components/RequireAuth/RequireAuth";



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<AboutMe></AboutMe>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/checkout" element={
        <RequireAuth>
          <CheckOut></CheckOut>
        </RequireAuth>
      }></Route>

       
        <Route path="/home/bridal" element={<Bridal></Bridal>}></Route>
            <Route path="/home/birthday" element={<Birthday></Birthday>}
            ></Route>
            <Route path="/home/annivarsary" element={<Annivarsary></Annivarsary>}></Route>
        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
