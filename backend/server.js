const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");

const User = require("./models/user");
const Application = require("./models/application");

dotenv.config();
const app = express();

// ===== Middleware =====
app.use(cors());
app.use(bodyParser.json());
app.use("/uploads", express.static("uploads")); // Serve uploaded resumes

// ===== MongoDB Connection =====
mongoose
  .connect(process.env.MONGO_URI || "mongodb://localhost:27017/jobPortal")
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// ===== Create uploads folder if it doesn't exist =====
if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}

// ===== Multer setup =====
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) =>
    cb(null, Date.now() + path.extname(file.originalname)),
});
const upload = multer({ storage });

// ===== Routes =====

// Signup
app.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const existing = await User.findOne({ email });
    if (existing)
      return res.status(400).json({ message: "Email already registered" });

    const hashed = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashed });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ message: "Signup failed" });
  }
});

// Login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid password" });

    res.status(200).json({ message: "Login successful" });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Login failed" });
  }
});

// Submit Form with Resume Upload
app.post("/submit-form", upload.single("resume"), async (req, res) => {
  try {
    const { name, phone, email, jobRole, message } = req.body;
    if (!message)
      return res.status(400).json({ message: "Message is required" });

    const newApp = new Application({
      name,
      phone,
      email,
      jobRole,
      message,
      resumePath: req.file ? req.file.path : null,
    });

    await newApp.save();
    res.status(200).json({ message: "Form submitted successfully" });
  } catch (err) {
    console.error("Form submission error:", err);
    res.status(500).json({ message: "Form submission failed" });
  }
});

// ===== Start Server =====
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
