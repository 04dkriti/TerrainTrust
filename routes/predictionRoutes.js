// const express = require("express");
// const axios = require("axios");

// const router = express.Router();

// // Route to send data to the ML model and return prediction
// router.post("/", async (req, res) => {
//   try {
//     const mlApiUrl = "http://127.0.0.1:5000/predict"; // Flask API URL
//     const requestData = req.body; // Data received from frontend

//     // Send request to ML model
//     const response = await axios.post(mlApiUrl, requestData);

//     // Check if prediction exists in response
//     if (response.data && response.data.prediction !== undefined) {
//       return res.json({ prediction: response.data.prediction });
//     } else {
//       return res.status(500).json({ error: "Unexpected response from ML model" });
//     }
//   } catch (error) {
//     console.error("Error connecting to ML model:", error);
//     return res.status(500).json({ error: "Failed to fetch prediction" });
//   }
// });

// module.exports = router;
