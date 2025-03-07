export default function PredictionResult({ prediction }: { prediction: number | null }) {
    return (
      <div className="max-w-lg mx-auto mt-6 p-4 text-center bg-gray-100 border rounded">
        <h3 className="text-lg font-semibold">Prediction Result</h3>
        {prediction === null ? (
          <p className="text-gray-600">Submit data to get a prediction.</p>
        ) : (
          <p className={`text-lg font-bold ${prediction === 1 ? "text-red-600" : "text-green-600"}`}>
            {prediction === 1 ? "Landslide Risk is HIGH!" : "Landslide Risk is LOW."}
          </p>
        )}
      </div>
    );
  }
  