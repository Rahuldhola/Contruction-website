const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const multer = require("multer");

const app = express();

// Enable CORS for frontend communication
app.use(cors());

// Middleware to parse JSON data
app.use(bodyParser.json());

// Set up multer storage options
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// Create the uploads directory if it doesn't exist
if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}

// Route to handle form submission (including file upload)
app.post("/submit-form", upload.single("resume"), (req, res) => {
  console.log("Received form data:", req.body);
  console.log("Uploaded file:", req.file);

  const { name, phone, email, jobRole, message } = req.body;

  if (!message) {
    return res.status(400).json({ message: "Message field is required!" });
  }

  const timestamp = new Date();
  const formattedDate = timestamp.toLocaleDateString();
  const formattedTime = timestamp.toLocaleTimeString();

  const formData = `Date: ${formattedDate}\nTime: ${formattedTime}\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nJob Role: ${jobRole}\nMessage: ${message}\nResume: ${
    req.file ? req.file.path : "No resume uploaded"
  }\n\n`;

  const filePath = path.join(__dirname, "submissions.txt");

  fs.appendFile(filePath, formData, (err) => {
    if (err) {
      console.error("Error writing to file:", err);
      return res.status(500).json({ message: "Failed to save data" });
    }

    console.log("Data saved to file successfully!");
    res.status(200).json({ message: "Form submitted successfully" });
  });
});

// Start the server
const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
