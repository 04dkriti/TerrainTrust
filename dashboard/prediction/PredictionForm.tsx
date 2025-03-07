"use client";
import { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function PredictionForm({ onPrediction }: { onPrediction: (prediction: number) => void }) {
  const [formData, setFormData] = useState({
    Rainfall_mm: "",
    Slope_Angle: "",
    Soil_Saturation: "",
    Vegetation_Cover: "",
    Earthquake_Activity: "",
    Proximity_to_Water: "",
    Soil_Type_Gravel: "",
    Soil_Type_Sand: "",
    Soil_Type_Silt: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [predictionResult, setPredictionResult] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Convert values to numbers and ensure all fields are filled
    const processedData = Object.fromEntries(
      Object.entries(formData).map(([key, value]) => [key, value.trim() === "" ? null : parseFloat(value)])
    );

    if (Object.values(processedData).some((value) => value === null || isNaN(value as number))) {
      setError("Please fill in all fields with valid numbers.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post("http://127.0.0.1:5000/predict", processedData);
      if (response.data?.prediction !== undefined) {
        setPredictionResult(response.data.prediction);
        onPrediction(response.data.prediction);
      } else {
        setError("Unexpected response from the server.");
      }
    } catch (error: any) {
      setError(error.response?.data?.error || "Failed to fetch prediction. Please try again.");
      console.error("Error fetching prediction:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md space-y-4">
      <h2 className="text-xl font-semibold text-center">Enter Data for Landslide Prediction</h2>

      {Object.keys(formData).map((key) => (
        <div key={key} className="flex flex-col">
          <label className="text-sm font-medium">{key.replace(/_/g, " ")}</label>
          <Input
            type="number"
            name={key}
            value={formData[key as keyof typeof formData]}
            onChange={handleChange}
            required
            className="p-2 border rounded"
          />
        </div>
      ))}

      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? "Predicting..." : "Predict"}
      </Button>

      {/* Show Prediction Result */}
      {predictionResult !== null && (
        <div className="mt-4 p-3 bg-green-100 text-green-700 text-center rounded-md">
          <strong>Prediction Result:</strong> {predictionResult === 1 ? "HIGH Risk" : "LOW Risk"}
        </div>
      )}

      {/* Show Error Message */}
      {error && (
        <div className="mt-4 p-3 bg-red-100 text-red-700 text-center rounded-md">
          {error}
        </div>
      )}
    </form>
  );
}
