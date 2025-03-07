"use client";
import { useState } from "react";
import PredictionForm from ;
import PredictionResult from "./PredictionResult";

export default function PredictionPage() {
  const [prediction, setPrediction] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-50">
      <h1 className="text-2xl font-bold mb-4">Enter Data for Prediction</h1>

      {/* Prediction Form */}
      <PredictionForm onPrediction={setPrediction} />

      {/* Show Prediction Result After Form Submission */}
      {prediction !== null && <PredictionResult prediction={prediction} />}
    </div>
  );
}
