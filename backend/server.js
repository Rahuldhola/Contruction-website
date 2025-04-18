// const express = require("express");
// const bodyParser = require("body-parser");
// const fs = require("fs");
// const path = require("path");
// const cors = require("cors");
// const multer = require("multer");

// // Set up multer storage options
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     // Specify the directory where the file will be stored
//     cb(null, "uploads/");
//   },
//   filename: function (req, file, cb) {
//     // Rename the file to avoid conflicts
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });

// const upload = multer({ storage: storage });

// const app = express();

// // Enable CORS for frontend communication
// app.use(cors());

// // Middleware to parse JSON data
// app.use(bodyParser.json());

// // Create the uploads directory if it doesn't exist
// if (!fs.existsSync("uploads")) {
//   fs.mkdirSync("uploads");
// }

// // Route to handle form submission (including file upload)
// app.post("/submit-form", upload.single("resume"), (req, res) => {
//   // Log the incoming form data (including file)
//   console.log("Received form data:", req.body);
//   console.log("Uploaded file:", req.file);

//   const { name, phone, email, jobRole, message } = req.body;

//   // Check if 'message' is provided
//   if (!message) {
//     return res.status(400).json({ message: "Message field is required!" });
//   }

//   // Create a string with the form data (including the message and file path)
//   const formData = `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nJob Role: ${jobRole}\nMessage: ${message}\nResume: ${
//     req.file ? req.file.path : "No resume uploaded"
//   }\n\n`;

//   // Define the file path for 'submissions.txt'
//   const filePath = path.join(__dirname, "submissions.txt");

//   // Append form data to the text file
//   fs.appendFile(filePath, formData, (err) => {
//     if (err) {
//       console.error("Error writing to file:", err); // Log any errors writing to the file
//       return res.status(500).json({ message: "Failed to save data" });
//     }

//     console.log("Data saved to file successfully!"); // Log successful file write
//     res.status(200).json({ message: "Form submitted successfully" });
//   });
// });

// // Start the server on port 5000
// app.listen(5000, () => {
//   console.log("Server is running on port 5000");
// });


const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/authroutes");
const applicationRoutes = require("./routes/applicationroutes");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/jobPortal");

app.use("/api/auth", authRoutes);
app.use("/api/application", applicationRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
