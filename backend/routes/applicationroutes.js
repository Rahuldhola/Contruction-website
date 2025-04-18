const express = require("express");
const Application = require("../models/application");
const auth = require("../middleware/auth");

const router = express.Router();

router.post("/", auth, async (req, res) => {
  try {
    const newApp = new Application({ ...req.body, userId: req.user.id });
    await newApp.save();
    res.status(201).json({ message: "Application submitted!" });
  } catch {
    res.status(500).json({ error: "Failed to save" });
  }
});

module.exports = router;
