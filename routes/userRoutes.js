const express = require("express");
const User = require("../models/User");

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { clerkId, name, email } = req.body;
    let user = await User.findOne({ clerkId });
    if (!user) {
      user = new User({ clerkId, name, email });
      await user.save();
    }
    res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;