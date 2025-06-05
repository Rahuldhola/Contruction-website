


// const express = require("express");
// const router = express.Router();
// const User = require("../models/user"); // Mongoose model

// // POST /api/auth/signup
// router.post("/signup", async (req, res) => {
//   const { name, email, password } = req.body;

//   if (!name || !email || !password)
//     return res.status(400).json({ message: "All fields are required" });

//   try {
//     const user = new User({ name, email, password });
//     await user.save();
//     res.status(201).json({ message: "Signup successful" });
//   } catch (err) {
//     console.error("Signup error:", err);
//     res.status(500).json({ message: "Signup failed" });
//   }
// });

// // POST /api/auth/login
// router.post("/login", async (req, res) => {
//   const { email, password } = req.body;

//   if (!email || !password)
//     return res.status(400).json({ message: "Email and password are required" });

//   try {
//     const user = await User.findOne({ email });

//     if (!user || user.password !== password) {
//       return res.status(401).json({ message: "Invalid email or password" });
//     }

//     res.status(200).json({ message: "Login successful", user: { name: user.name, email: user.email } });
//   } catch (err) {
//     console.error("Login error:", err);
//     res.status(500).json({ message: "Login failed" });
//   }
// });

// module.exports = router;
