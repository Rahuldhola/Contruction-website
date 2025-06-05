const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  jobRole: String,
  message: String,
  resumePath: String,
  submittedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Application", applicationSchema);
