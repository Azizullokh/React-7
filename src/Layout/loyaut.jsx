import React from "react";
import "../assets/styles/layout.css";
import item from "../images/rc.jpeg";
import { Link } from "react-router-dom";

function Loyaut({ children }) {
  return (
    <div>
      <header className="header">
        <img src={item} alt="" />
        <nav>
          <Link className="link7" to={"/blog"}>
            Blogs
          </Link>
          <Link className="link4" to={"/about"}>
            About
          </Link>
          <Link className="link5" to={"/contact"}>
            Contact
          </Link>
        </nav>
      </header>
      <main className="main">{children}</main>
      <footer className="footer"></footer>
    </div>
  );
}

export default Loyaut;
