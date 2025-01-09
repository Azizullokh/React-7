
import { Link } from "react-router-dom";
import "../assets/styles/Mainlayout.css";
import logo from "../images/rc.jpeg";

function MainLoyaut({children}) {
  return (
    <div className="mainlayout">
      <header className="main-header">
        <img src={logo} />
        <div className="div">
          <Link className="link" to={"/login"}>Log In</Link>
          <Link className="link2" to={"/register"}>Sign Up</Link>
        </div>
      </header>
      <main>{children}</main>
      <footer className="main-footer" ></footer>
    </div>
  );
}

export default MainLoyaut;
