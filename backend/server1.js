// //     // const express = require("express");
// //     // const bodyParser = require("body-parser");
// //     // const fs = require("fs");
// //     // const path = require("path");
// //     // const cors = require("cors");
// //     // const multer = require("multer");

// //     // const app = express();

// //     // // Enable CORS for frontend communication
// //     // app.use(cors());

// //     // // Middleware to parse JSON data
// //     // app.use(bodyParser.json());

// //     // // Set up multer storage options
// //     // const storage = multer.diskStorage({
// //     //   destination: function (req, file, cb) {
// //     //     cb(null, "uploads/");
// //     //   },
// //     //   filename: function (req, file, cb) {
// //     //     cb(null, Date.now() + path.extname(file.originalname));
// //     //   },
// //     // });

// //     // const upload = multer({ storage: storage });

// //     // // Create the uploads directory if it doesn't exist
// //     // if (!fs.existsSync("uploads")) {
// //     //   fs.mkdirSync("uploads");
// //     // }

// //     // // Route to handle form submission (including file upload)
// //     // app.post("/submit-form", upload.single("resume"), (req, res) => {
// //     //   console.log("Received form data:", req.body);
// //     //   console.log("Uploaded file:", req.file);

// //     //   const { name, phone, email, jobRole, message } = req.body;

// //     //   if (!message) {
// //     //     return res.status(400).json({ message: "Message field is required!" });
// //     //   }

// //     //   const timestamp = new Date();
// //     //   const formattedDate = timestamp.toLocaleDateString();
// //     //   const formattedTime = timestamp.toLocaleTimeString();

// //     //   const formData = `Date: ${formattedDate}\nTime: ${formattedTime}\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nJob Role: ${jobRole}\nMessage: ${message}\nResume: ${
// //     //     req.file ? req.file.path : "No resume uploaded"
// //     //   }\n\n`;

// //     //   const filePath = path.join(__dirname, "submissions.txt");

// //     //   fs.appendFile(filePath, formData, (err) => {
// //     //     if (err) {
// //     //       console.error("Error writing to file:", err);
// //     //       return res.status(500).json({ message: "Failed to save data" });
// //     //     }

// //     //     console.log("Data saved to file successfully!");
// //     //     res.status(200).json({ message: "Form submitted successfully" });
// //     //   });
// //     // });

// //     // // Start the server
// //     // const PORT = 5001;
// //     // app.listen(PORT, () => {
// //     //   console.log(`Server is running on port ${PORT}`);
// //     // });



// const express = require("express");
// const bodyParser = require("body-parser");
// const fs = require("fs");
// const path = require("path");
// const cors = require("cors");
// const multer = require("multer");

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// // Create "uploads" folder if not exists
// if (!fs.existsSync("uploads")) {
//   fs.mkdirSync("uploads");
// }

// // Set up multer for file upload
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/");
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });

// const upload = multer({ storage: storage });

// // Route to handle the form submission
// app.post("/submit-form", upload.single("resume"), (req, res) => {
//   const { name, phone, email, jobRole, message } = req.body;

//   if (!message) {
//     return res.status(400).json({ message: "Message field is required!" });
//   }

//   const timestamp = new Date();
//   const formattedDate = timestamp.toLocaleDateString();
//   const formattedTime = timestamp.toLocaleTimeString();

//   const formData = `Date: ${formattedDate}\nTime: ${formattedTime}\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nJob Role: ${jobRole}\nMessage: ${message}\nResume: ${
//     req.file ? req.file.path : "No resume uploaded"
//   }\n\n`;

//   const filePath = path.join(__dirname, "submissions.txt");

//   fs.appendFile(filePath, formData, (err) => {
//     if (err) {
//       console.error("Error saving to file:", err);
//       return res.status(500).json({ message: "Failed to save data" });
//     }

//     console.log("Data saved successfully!");
//     res.status(200).json({ message: "Form submitted successfully" });
//   });
// });

// const PORT = 5001;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });




// // const express = require("express");
// // const mongoose = require("mongoose");
// // const cors = require("cors");
// // const bodyParser = require("body-parser");
// // const multer = require("multer");
// // const path = require("path");
// // const fs = require("fs");

// // const app = express();

// // // Middleware
// // app.use(cors());
// // app.use(bodyParser.json());

// // // Create uploads folder if it doesn't exist
// // if (!fs.existsSync("uploads")) {
// //   fs.mkdirSync("uploads");
// // }

// // // Multer setup for file uploads
// // const storage = multer.diskStorage({
// //   destination: function (req, file, cb) {
// //     cb(null, "uploads/");
// //   },
// //   filename: function (req, file, cb) {
// //     cb(null, Date.now() + path.extname(file.originalname));
// //   },
// // });
// // const upload = multer({ storage });

// // // MongoDB connection
// // mongoose
// //   .connect("mongodb://localhost:27017/jobApplications", {
// //     useNewUrlParser: true,
// //     useUnifiedTopology: true,
// //   })
// //   .then(() => console.log(" MongoDB connected"))
// //   .catch((err) => console.error("MongoDB connection error:", err));

// // // Mongoose Schema & Model
// // const applicationSchema = new mongoose.Schema({
// //   name: String,
// //   phone: String,
// //   email: String,
// //   jobRole: String,
// //   message: String,
// //   resumePath: String,
// //   submittedAt: {
// //     type: Date,
// //     default: Date.now,
// //   },
// // });
// // const Application = mongoose.model("Application", applicationSchema);

// // // Route to handle form submissions
// // app.post("/submit-form", upload.single("resume"), async (req, res) => {
// //   try {
// //     const { name, phone, email, jobRole, message } = req.body;

// //     if (!message) {
// //       return res.status(400).json({ message: "Message field is required!" });
// //     }

// //     const newApplication = new Application({
// //       name,
// //       phone,
// //       email,
// //       jobRole,
// //       message,
// //       resumePath: req.file ? req.file.path : null,
// //     });

// //     await newApplication.save();
// //     console.log(" Form data saved:", newApplication);

// //     res.status(200).json({ message: "Form submitted successfully" });
// //   } catch (err) {
// //     console.error("Error saving form data:", err);
// //     res.status(500).json({ message: "Failed to submit application" });
// //   }
// // });

// // // Start server
// // const PORT = 5001;
// // app.listen(PORT, () => {
// //   console.log(` Server running on http://localhost:${PORT}`);
// // });
