// // const express = require("express");
// // const Application = require("../models/application");
// // const auth = require("../middleware/auth");

// // const router = express.Router();

// // router.post("/", auth, async (req, res) => {
// //   try {
// //     const newApp = new Application({ ...req.body, userId: req.user.id });
// //     await newApp.save();
// //     res.status(201).json({ message: "Application submitted!" });
// //   } catch {
// //     res.status(500).json({ error: "Failed to save" });
// //   }
// // });

// // module.exports = router;



// const express = require("express");
// const router = express.Router();
// const multer = require("multer");
// const path = require("path");
// const Application = require("../models/application");

// // Set up multer
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => cb(null, "uploads/"),
//   filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname)),
// });
// const upload = multer({ storage });

// // Create uploads folder if not exists
// const fs = require("fs");
// if (!fs.existsSync("uploads")) fs.mkdirSync("uploads");

// // POST /api/application
// router.post("/", upload.single("resume"), async (req, res) => {
//   const { name, email, phone, jobRole, message } = req.body;
//   const resumePath = req.file ? req.file.path : null;

//   if (!message) return res.status(400).json({ message: "Message is required" });

//   try {
//     const newApp = new Application({ name, email, phone, jobRole, message, resumePath });
//     await newApp.save();
//     res.status(200).json({ message: "Form submitted successfully" });
//   } catch (err) {
//     console.error("Error saving form:", err);
//     res.status(500).json({ message: "Failed to submit form" });
//   }
// });

// module.exports = router;
