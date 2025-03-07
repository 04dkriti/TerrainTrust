const express = require("express");
const SensorData = require("../models/SensorData");

const router = express.Router();

router.post("/data", async (req, res) => {
  try {
    const { temperature, humidity, soilMoisture, tilt } = req.body;
    const newSensorData = new SensorData({ temperature, humidity, soilMoisture, tilt });
    await newSensorData.save();
    res.status(201).json({ message: "Sensor data saved" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/data", async (req, res) => {
  try {
    const data = await SensorData.find().sort({ timestamp: -1 }).limit(10);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;