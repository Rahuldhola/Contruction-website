const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  name:       { type: String, required: true },
  phone:      { type: String, required: true },
  email:      { type: String, required: true },
  jobRole:    { type: String },
  message:    { type: String, required: true },
  resumePath: { type: String }, // Path to uploaded resume
  createdAt:  { type: Date, default: Date.now },
});

module.exports = mongoose.model("Application", applicationSchema);
