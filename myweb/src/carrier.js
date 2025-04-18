import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


import "./carrier.css";

const Career = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    jobRole: "",
    message: "",
    resume: null, // To hold the uploaded file
  });
  const [message, setMessage] = useState("");

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle file input change
  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0], // Store the selected file
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("Submitting...");

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("jobRole", formData.jobRole);
    formDataToSend.append("message", formData.message);
    formDataToSend.append("resume", formData.resume);

    // Log form data to check if the message and resume are included
    console.log("Form Data to Submit:", formData);

    fetch("http://localhost:5001/submit-form", {
      method: "POST",
      body: formDataToSend, // Send FormData (including file)
    })
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
        setFormData({
          name: "",
          phone: "",
          email: "",
          jobRole: "",
          message: "",
          resume: null, // Reset resume field
        });
        navigate("/opening")
      })
      .catch((error) => {
        setMessage("An error occurred. Please try again later.");
        console.error("Error:", error);
      });
  };
  const navigate = useNavigate();
  
   
  return (
    <div className="career-container">
      <h1 className="h1">Join Our Team</h1>
      <p className="career-description">
        Fill out the form below to apply for a role at our company.
      </p>

      <form onSubmit={handleSubmit} className="career-form">
        {/* Name */}
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your full name"
          />
        </div>

        {/* Phone Number */}
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="Enter your phone number"
          />
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email address"
          />
        </div>

        {/* Job Role Dropdown */}
        <div className="form-group">
          <label htmlFor="jobRole">Select Job Role</label>
          <select
            id="jobRole"
            name="jobRole"
            value={formData.jobRole}
            onChange={handleChange}
            required
          >
            <option value="">Choose a role</option>
            <option value="Site Engineer">Site Engineer</option>
            <option value="Civil Supervisor">Civil Supervisor</option>
            <option value="productManager">Product Manager</option>
            <option value="marketing">Marketing</option>
            <option value="sales">Sales</option>
          </select>
        </div>

        {/* Message Textarea */}
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            rows="4"
            required
          ></textarea>
        </div>

        {/* Resume Upload */}
        <div className="form-group">
          <label htmlFor="resume">Upload Resume</label>
          <input
            type="file"
            id="resume"
            name="resume"
            accept=".pdf,.doc,.docx" // You can limit the file types here
            onChange={handleFileChange}
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-button" >
          Submit Application
        </button>
      </form>

      {/* Display Status Message */}
      <div className="message">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Career;
