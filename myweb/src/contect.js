import React from "react";
import "./about.css"; // Import the corresponding CSS file for styling

function Contact() {
  return (
    <div>
      <h1 style={{ textAlign: "center", padding: "30px",marginTop:"100px"}}>Contact Us</h1>
      <div className="contact-container">
        <div className="contect-div">
          <img src={require("./image/download.png")} alt="Phone Icon" />
          <h1>Number</h1>
          <br />
          <a href="tel:+1234567890">123-456-7890</a>
        </div>  

        <div className="contect-div">
          <img src={require("./image/download2.png")} alt="Email Icon" />
          <h1>Email</h1>
          <br />
          <a href="mailto:pradip.vadhiya123@gmail.com">pradip.vadhiya123@gmail.com</a>
        </div>

        <div className="contect-div">
          <img src={require("./image/download3.jpg")} alt="Address Icon" />
          <h1>Address</h1>
          <br />
          <a href="/#"> A-1, 404 SHUBHAM RESIDENCY BHOLAV Bharuch, Gujarat, 392001 India</a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
