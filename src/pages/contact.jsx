import React from "react";
import item from "../images/rc.jpeg";
import tg from "../images/tg.png";
import inst from "../images/Inst.png";
import "../assets/styles/contact.css";
import { Link } from "react-router-dom";
function Contact() {
  return (
    <div>
      <header className="contact-header">
        <img src={item} alt="" />
        <Link className="link3" to={"/home"}>
          Go Back
        </Link>
      </header>
      <h5>📨 Contact me if you'd like to discuss a project</h5>
      <div className="contact-main">
        <div className="networks">
          <a href="https://t.me/AZ1Z_WEB">
            <img src={tg} alt="" />
          </a>
          <a href="https://www.instagram.com/azizullokh_7?igsh=MWZsb3M4aHhoMTh3ZA==">
            <img src={inst} alt="" />
          </a>
        </div>
      </div>
      <div className="emails">
        <h4>azizulloabdumannopov77@gmail.com</h4>
        <h4>azizulloabdumannopov5@gmail.com</h4>
      </div>
      <footer className="contact-footer"></footer>
    </div>
  );
}

export default Contact;
