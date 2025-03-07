const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  clerkId: { type: String, unique: true, required: true },
  name: String,
  email: { type: String, unique: true },
  createdAt: { type: Date, default: Date.now }
});