require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
const axios = require("axios");

const sensorRoutes = require("./routes/sensorRoutes");
const userRoutes = require("./routes/userRoutes");
// const predictionRoutes = require("./routes/predictionRoutes");

const app = express();

// Middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Routes
app.use("/api/sensors", sensorRoutes);
app.use("/api/users", userRoutes);
// app.use("/api/predict", predictionRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
